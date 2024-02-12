import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Intervals from './Intervals';
import Countdown from 'react-countdown';


function TargetLow(props) {
    const { bestUntil } = props;

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
                <Col className="text-center display-3 mt-3">
                {bestUntil && (
                    <Countdown date={bestUntil * 1000}> 
                        <div>The time is now!</div>
                    </Countdown>
                )}
                </Col>
            </Row>
        </>
    );
}
export default TargetLow;