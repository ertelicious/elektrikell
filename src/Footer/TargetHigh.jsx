import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function TargetHigh() {
    const inlineLowPriceStyle =  {
        color: '#1CB129',
    }
    return (
        <Row>
            <Col>
                <h4>NO PEAK HOURS</h4>
                <p>If you want to consume at the most reasonable time, choose <span style={inlineLowPriceStyle}>Low Price</span> from above and you will find the best time to do so.</p>
            </Col>
        </Row>
    );
}

export default TargetHigh;