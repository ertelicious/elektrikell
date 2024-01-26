import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; 
import Stack from 'react-bootstrap/Stack';
import { INTERVALS } from './constants';


function Intervals({ activeHour, setActiveHour }) {
    return (
        <Row>
            <Col>
            <h4 className="text-center">Choose your consumption period</h4>
                <Stack 
                    direction="horizontal" 
                    gap={3} 
                    className="justify-content-center">
                        {INTERVALS.map(({id, name}) => (
                        <Button 
                            variant="outline-warning" 
                            key={id} 
                            active={(activeHour || 1) === id}
                            onClick={() => setActiveHour(id)}
                        >
                            {name}
                        </Button>
                    ))}
                </Stack>
            </Col>
        </Row>
    );
}

export default Intervals;