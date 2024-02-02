import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { PRICE_BUTTONS, BADGES } from './constants';
import { useEffect, useState } from 'react';
import { getCurrentPrice } from '../services/apiService';
import { mwToKw, addTax } from '../utils/priceFormat';


function Info ({ activePrice, setActivePrice }) {

    const [currentPrice, setCurrentPrice] = useState(0);

    useEffect(() => {
        (async() => {
            // функция которая сразу же запускается
            const { data } = await getCurrentPrice();
        setCurrentPrice(addTax(mwToKw(data[0].price), 'ee'));
        }) ()
    }, []);

    return (
        <>
        <Col className="mt-auto">
            <div>Current price of electricity is</div>
            <Badge bg={BADGES[0].name}>{BADGES[0].id}</Badge>
        </Col>

        <Col className="text-center mt-auto">
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
             <h2>{currentPrice}</h2>
             <div>cent / kilowatt-hour</div>
        </Col>
        </>
    );
}

export default Info;