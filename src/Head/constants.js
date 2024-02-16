export const LOW = 'low'; 
export const HIGH = 'high';
export const AVERAGE = 'average';

export const BADGES = [
    {
        name: 'success',
        id: LOW
    },
    {
        name: 'danger',
        id: HIGH
    },
    {
        name: 'warning',
        id: AVERAGE
    }
]

export const PRICE_BUTTONS = [
    {
        name: "Low Price",
        id: LOW,
    },
    {
        name: "High Price",
        id: HIGH,
    }
];

export const DEFAULT_ACTIVE_BUTTON = LOW;

export const ERROR_MESSAGE = 'Could not fetch data from: /nps/price/current';