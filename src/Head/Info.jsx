import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { PRICE_BUTTONS, BADGES } from './constants';


function Info ({ activePrice, setActivePrice }) {
    return (
        <>
        <Col>
            <div>Current price of electricity is</div>
            <Badge bg={BADGES[0].name}>{BADGES[0].id}</Badge>
        </Col>

        <Col>
            <ButtonGroup>
                {PRICE_BUTTONS.map(({ name, id }) => (
                <Button 
                key={id}
                active={activePrice === id} 
                onClick={() => setActivePrice(id)} 
                variant="secondary">{name}</Button>
                ))}
         </ButtonGroup>
        </Col>

        <Col className="text-end">
             <h2>XX.XX</h2>
             <div>cent / kilowatt-hour</div>
        </Col>
        </>
    );
}

export default Info;