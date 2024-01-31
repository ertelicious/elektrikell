const apiUrl = 'https://dashboard.elering.ee/api';

export const getPriceData = async (from, until) => {


    const data = new URLSearchParams({
        start: from,
        end: until
    });

    const response = await fetch(`${apiUrl}/nps/price?${data}`); // фетч делает запрос обычный (если мы не объясняем как) по стандарту делает get запрос

    return await response.json(); //мы хотим вывести оттуда чистый json 
};


export const getCurrentPrice = async () => {
    const countryCode = 'EE';
    const response = await fetch(`${apiUrl}/nps/price/${countryCode}/current`);

    return await response.json();
};