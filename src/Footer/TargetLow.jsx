import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Intervals from './Intervals';


function TargetLow() {
    return(
        <>
            <Row>
                <Col>
                    <p>(Target Low)</p>
                </Col>
            </Row>
            <Row>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
            </Row>
            <Intervals />
        </>
    );
}
export default TargetLow;