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
                </Col>
            </Row>
            <Row>
                <Col className="mt-5">
                <Intervals {...props} />
                </Col>
            </Row>
            <Row>
                <Col className="text-center display-3 mt-4">
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