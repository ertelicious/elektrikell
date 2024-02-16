import { createContext, useState } from 'react';


export const ElectricPriceContext = createContext(null);

// .Provider идет через createContext, передаем один проперти. все состояние передают в value, информацию, все, что нужно

function ElectricPriceProvider ({ children }) {

    const [averagePrice, setAveragePrice] = useState(0);
    const [currentPrice, setCurrentPrice] = useState(0);

    const value = {
        values: {
            averagePrice,
            currentPrice
        },
        actions: { 
            setAveragePrice,
            setCurrentPrice
        },
    };

    return (
        <ElectricPriceContext.Provider value={value}> 
        {/* теперь константу с объектами value передаем как проперти в value */}
            {children}
        </ElectricPriceContext.Provider>
    );
}

export default ElectricPriceProvider;

// тпеперь этим компонентом оборачиваем все копмпоненты, где мы хотим добраться до averagePrice