import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Intervals from './Intervals';
import CountdownRenderer from './CountdownRenderer';


function TargetLow(props) {
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
                    <CountdownRenderer />
                </Col>
            </Row>
            
        </>
    );
}
export default TargetLow;