import moment from 'moment';
import { mwToKw } from './priceFormat';

export default function chartDataConvertor(priceData) {
    return priceData.map((data) => ({
        ...data, 
        price: mwToKw(data.price),
        hour: moment.unix(data.timestamp).format("HH"),
    }));
}