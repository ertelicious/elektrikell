import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; // from homework-2


function Intervals() {
    return (
        <>
        <Row className="justify-content-center align-items-center"> 
            <Col>
                <h4>Choose your consumption period</h4>
            </Col>
        </Row>

        <Row>
            <Col>
                <Button variant="outline-primary">1h</Button>{' '}
                <Button variant="outline-primary">2h</Button>{' '}
                <Button variant="outline-primary">3h</Button>{' '}
                <Button variant="outline-primary">4h</Button>{' '}
                <Button variant="outline-primary">6h</Button>{' '}
                <Button variant="outline-primary">8h</Button>{' '} 
            </Col>
        </Row>
        </>
    );
}

export default Intervals;