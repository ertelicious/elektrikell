import { currentTimeStamp } from '../utils/dates';


//бежит по массиву и убирает то, что находится в прошлом
// filter возвращает boolean
export const removePast = (data) => {
    return data.filter(({ timestamp }) => {
        return timestamp >= currentTimeStamp();
});
};

// d сам массив
export const getLowPriceInterval = (data, interval) => {
    let minimum = Infinity;
    let result = [];
    const futureData = removePast(data);
    futureData.forEach((_, i) => {
        const dataInterval = futureData.slice(i, interval + i + 1); // диапазон

        if (dataInterval.length < interval + 1) return; // останавливаем на последнем, у кот. нет пары

        const sumInterval = dataInterval.reduce((acc, { price }) => {
            return acc + parseFloat(price);
        }, 0); // , 0 вернет integer. но может и другие типы данных, мы указываем

        if (minimum > sumInterval) {
            minimum = sumInterval;
            result = dataInterval;
        }
        //второй вариант с пом. библиотеки lodash (импорт нужен)
        // const sumInterval = lodash.sum(dataInterval.map(({ price }) => price));
    });
    
    return result.map((r) => {
        return {
            ...r,
            position: data.findIndex(({ timestamp }) => timestamp === r.timestamp) + 1, //bug fix + 1 and position
        };
    });
};