import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Intervals from './Intervals';
import Countdown from 'react-countdown';
import { addHourToCurrentTSMl } from '../utils/dates';


function TargetLow(props) {
    const countDownDate = addHourToCurrentTSMl();
    return(
        <>
            <Row>
                <Col>
                    {/* <p>(Target Low)</p> */}
                </Col>
            </Row>
            <Row>
                <Col>
                <Intervals {...props} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Countdown date={countDownDate}> 
                    {/* Date.now() is js method */}
                        <div>The time is now!</div>
                    </Countdown>
                </Col>
            </Row>
        </>
    );
}
export default TargetLow;