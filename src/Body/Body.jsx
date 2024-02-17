import { useEffect, useState, useCallback, useContext } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../Preloader';
import { setErrorMessage, setBestUntil } from '../services/stateService';
// import { setIsLoading } from '../services/stateService';
import { ElectricPriceContext } from '../contexts/ElectricPriceContext';


function Body() {

const dispatch = useDispatch();

const [priceData, setPriceData] = useState([]);
const [x1, setX1] = useState(0); 
const [x2, setX2] = useState(0); 
const [isLoading, setIsLoading] = useState(true);

//useContext react
const { actions: { setAveragePrice }, values } = useContext(ElectricPriceContext);

const activeHour = useSelector((state) => state.main.activeHour);
const from = useSelector((state) => state.date.from);
const until = useSelector((state) => state.date.until);

// useCallback запоминает функцию, а не просто ответ как в useMemo. используется в компонентах
const renderDot = useCallback((line) => {
    const {
    //   cx, из line можно выделить cx и cy и расчитать как сделать посередине красным
    //   cy,
      payload: { timestamp },
    } = line;
    // const cxN = cx +20; // cy 10 

    return timestamp === currentTimeStamp() ? (
      <Dot {...line} r={4} fill="red" stroke="red" />
    ) : null;
  }, []);

  
    useEffect(() => {
        setIsLoading(true);

        getPriceData(from, until)
            .then(({ data, success }) => {
                if(!success) throw new Error();

                const priceData = chartDataConvertor(data.ee);

                setPriceData(priceData);

                getAveragePrice(priceData);

                setAveragePrice(getAveragePrice(priceData));

            })
            .catch(() => dispatch(setErrorMessage(ERROR_MESSAGE)))
            setTimeout(() => setIsLoading(false), 500);
           
    }, [from, until, dispatch, setIsLoading, setAveragePrice]); 


    useEffect(() => {
        const lowPriceIntervals = getLowPriceInterval(priceData, activeHour);

        if(lowPriceIntervals.length){
            setX1(lowPriceIntervals[0].position);
            setX2(lodash.last(lowPriceIntervals).position + 1);
            dispatch(setBestUntil(lowPriceIntervals[0].timestamp));
        }
    }, [priceData, activeHour, dispatch]);


    return (
        <Row className="mt-3">
            <Col> 
                <ResponsiveContainer width="100%" height={400}>
                    {isLoading && 
                        <div className="preloader-overlay">
                            <Preloader /> 
                        </div>
                    }
                    <LineChart data={priceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                            dataKey="hour"
                            // branch style-additions 
                            // should be interval={1} 
                            interval={0} 
                            axisLine={false}
                        />
                        <YAxis 
                            axisLine={false}
                        />
                        <Tooltip />
                        {/* <Tooltip content={renderTooltip} /> */}
                        <ReferenceArea 
                            x1={x1} 
                            x2={x2} 
                            // stroke="#DBEBE3" 
                            fill="#E3F4E2"
                            // strokeOpacity={0.3} 
                        />
                        <ReferenceLine 
                            y={values.averagePrice} 
                            // label="Average" 
                            stroke="#FFC007" 
                            // strokeDasharray="3 3" 
                        />
                        <Line 
                            type="stepAfter" 
                            dataKey="price" 
                            stroke="#8884d8" 
                            dot={renderDot} 
                            strokeWidth={2}
                            isAnimationActive={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Col>
        </Row>
    );
}

export default Body;