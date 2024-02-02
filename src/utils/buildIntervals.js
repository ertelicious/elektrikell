import moment from 'moment';


//бежит по массиву и убирает то, что находится в прошлом
// filter возвращает boolean
export const removePast = (data) => {
    return data.filter(({ timestamp }) => {
     return moment.unix(timestamp).isAfter(moment());
});
};

// d сам массив
export const getLowPriceInterval = (data, interval) => {
    let minimum = Infinity;
    let result = [];
    const futureData = removePast(data);
    futureData.forEach((_, i) => {
        const dataInterval = futureData.slice(i, interval + i + 1); // диапазон

        if (dataInterval.length < interval) return; // останавливаем на последнем, у кот. нет пары

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
            index: data.findIndex(({ timestamp }) => timestamp === r.timestamp),
        };
    });
};