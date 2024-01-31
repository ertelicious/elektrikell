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
    ResponsiveContainer
} from 'recharts';
import { getPriceData } from '../services/apiService';
import { chartDataConvertor } from '../utils';
import { currentTimeStamp } from '../utils/dates';

function Body({ from, until }) {

// переменные которые держат данные это useState
const [priceData, setPriceData] = useState(null);

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
        getPriceData(from, until).then(({ data }) => 
            setPriceData(chartDataConvertor(data.ee))
        );
    }, [from, until]); //получили данные

    //передать данные в LineChart. 

    return (
        <Row>
            <Col> 
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={priceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="hour" interval={1} />
                        <YAxis />
                        <Tooltip />
                        {/* tolltip -> content from chart 
                        <Tooltip content={renderTooltip} />
*/}
                        <Line 
                            type="stepAfter" 
                            dataKey="price" 
                            stroke="#8884d8" 
                            dot={renderDot} 
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Col>
        </Row>
    );
}

export default Body;