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
    Dot,
    Line,
    ReferenceArea,
    ReferenceLine,
    ResponsiveContainer
} from 'recharts';
import { getPriceData } from '../services/apiService';
import { chartDataConvertor } from '../utils';
import { currentTimeStamp } from '../utils/dates';
import {  getLowPriceInterval } from '../utils/buildIntervals';
import lodash from 'lodash';


function Body({ from, until, activeHour }) {

// переменные которые держат данные это useState
const [priceData, setPriceData] = useState([]);
const [x1, setX1] = useState(0); 
const [x2, setX2] = useState(0); 
const [averagePrice, setAveragePrice] = useState(0);

const renderDot = (line) => {
    const {
    //   cx, из line можно выделить cx и cy и расчитать как сделать посередине красным
    //   cy,
      payload: { timestamp },
    } = line;

    // const cxN = cx +20; // cy 10 

    return timestamp === currentTimeStamp() ? (
      <Dot {...line}>
        <div></div>
        {/* <div></div>  здесь можно вписать класснейм и задизайнить*/}
      </Dot>
    ) : null;
  };


    useEffect(() => {
        getPriceData(from, until).then(({ data }) => {
            const priceData = chartDataConvertor(data.ee);

            setPriceData(priceData);

            // average price
            const allPrices = priceData.map(priceItem => parseFloat(priceItem.price));
            const sum = allPrices.reduce((acc, curr) => acc + curr, 0);
            const average = sum / allPrices.length;

            setAveragePrice(average);
        }
        );
    }, [from, until]); 


     useEffect(() => {
        const lowPriceIntervals = getLowPriceInterval(priceData, activeHour);

        if(lowPriceIntervals.length){
            setX1(lowPriceIntervals[0].index);
            setX2(lodash.last(lowPriceIntervals).index);
        }
    }, [priceData, activeHour]);


    return (
        <Row className="mt-3">
            <Col> 
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={priceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                            dataKey="hour" 
                            interval={1} 
                        />
                        <YAxis />
                        <Tooltip />
                        {/* tooltip -> content from chart 
                        <Tooltip content={renderTooltip} />*/}
                        <Line 
                            type="stepAfter" 
                            dataKey="price" 
                            stroke="#8884d8" 
                            dot={renderDot} 
                        />
                        <ReferenceArea 
                            x1={x1} 
                            x2={x2} 
                            stroke="red" 
                            strokeOpacity={0.3} 
                        />
                        <ReferenceLine 
                            y={averagePrice} 
                            // label="average" 
                            stroke="orange" 
                            strokeDasharray="3 3" 
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Col>
        </Row>
    );
}

export default Body;