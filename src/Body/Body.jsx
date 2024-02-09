import { useEffect, useState, useMemo, useCallback } from 'react';
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
import { getLowPriceInterval } from '../utils/buildIntervals';
import { getAveragePrice } from '../utils/maths';
import lodash from 'lodash';
import { ERROR_MESSAGE } from './constants';
import Preloader from '../Preloader';


function Body({ from, until, activeHour , setErrorMessage, setBestUntil }) {

// переменные которые держат данные это useState
const [priceData, setPriceData] = useState([]);
const [x1, setX1] = useState(0); 
const [x2, setX2] = useState(0);
const [loading, setLoading] = useState(true);

const averagePrice = useMemo(() => {
    return getAveragePrice(priceData);
}, [priceData]); // принимает функцию и массив зависимостей


// useCallback запоминает функцию, а не просто ответ как в useMemo. используется в компонентах
const renderDot = useCallback((line) => {
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
  }, []);

  
    useEffect(() => {
        setLoading(true);
        getPriceData(from, until)
            .then(({ data, success }) => {
                if(!success) throw new Error();

                const priceData = chartDataConvertor(data.ee);

                setPriceData(priceData);
            })
            .catch(() => setErrorMessage(ERROR_MESSAGE))
            .finally(() => {
                setTimeout(() => setLoading(false), 500);
                // console.log('ok');
            });
    }, [from, until, setErrorMessage]); 


    useEffect(() => {
        const lowPriceIntervals = getLowPriceInterval(priceData, activeHour);

        if(lowPriceIntervals.length){
            setX1(lowPriceIntervals[0].position);
            setX2(lodash.last(lowPriceIntervals).position);
            setBestUntil(lowPriceIntervals[0].timestamp);
        }
    }, [priceData, activeHour, setBestUntil]);     

    return (
        <Row className="mt-3">
            <Col> 
                <ResponsiveContainer width="100%" height={400} className="position-relative">
                     {loading && 
                        <div className="preloader-overlay">
                            <Preloader /> 
                        </div>
                    }
                    <LineChart data={priceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="hour" interval={1} />
                        <YAxis />
                        <Tooltip />
                        {/* tooltip -> content from chart 
                        <Tooltip content={renderTooltip} />
*/}
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
                            // label="Average" 
                            stroke="grey" 
                            strokeDasharray="3 3" 
                        />
                    </LineChart>
                    </ResponsiveContainer>
            </Col>
        </Row>
    );
}

export default Body;