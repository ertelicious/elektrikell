const apiUrl = 'https://dashboard.elering.ee/api';

export const getPriceData = async () => {
    const from = '2024-01-28T20:59:59.999Z';
    const until = '2024-01-31T20:59:59.999Z';

    const data = new URLSearchParams({
        start: from,
        end: until
    });

    const response = await fetch(`${apiUrl}/nps/price?${data}`); // фетч делает запрос обычный (если мы не объясняем как) по стандарту делает get запрос

    return await response.json(); //мы хотим вывести оттуда чистый json 
};