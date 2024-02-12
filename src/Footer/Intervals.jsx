import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; 
import Stack from 'react-bootstrap/Stack';
import { INTERVALS } from './constants';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveHour } from '../services/stateService';


function Intervals() {

    const dispatch = useDispatch(); //связывает с экшенами в редаксе
    const activeHour = useSelector((state) => state.main.activeHour);

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
                            onClick={() => dispatch(setActiveHour(id))}
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