import { useEffect } from 'react'; // homework-4
import { useState } from 'react'; // homework-4


function CurrentPrice() {
    const [currPrice, setCurrPrice] = useState(null);

    useEffect(() => {
        fetchData();
    }, []); 

    const fetchData = async () => {
        try {
            const response = await fetch('https://dashboard.elering.ee/api/nps/price/EE/current');
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();

            setCurrPrice(result);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    return (
        <div>
            {currPrice && currPrice.data 
            && currPrice.data.length > 0 
            && (
                <h2>{currPrice.data[0].price}</h2> 
                )}
        </div>
    );
}

export default CurrentPrice;