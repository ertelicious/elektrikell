import { useEffect } from 'react';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { 
    LineChart, 
    CartesianGrid, 
    Tooltip,  
    XAxis, 
    YAxis, 
    Line,
    ResponsiveContainer
} from 'recharts';
import { getPriceData } from '../services/apiService';
import { chartDataConvertor } from '../utils';

function Body() {
//useEffect запускается, когда боди уже отрисовался. он всегда находится внутри компонента. первый аргумент функция, второй массив. чтобы юзэффект запускался один раз, мы добавляем пустой массив [] - то есть нет зависимостей. запускается при рендере только.

// переменные которые держат данные это useState
const [priceData, setPriceData] = useState(null);

    useEffect(() => {
        getPriceData().then(({ data }) => 
            setPriceData(chartDataConvertor(data.ee))
        );
    }, []); //получили данные

    //передать данные в LineChart. 

    return (
        <Row>
            <Col> 
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={priceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="hour" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="price" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </Col>
        </Row>
    );
}

export default Body;