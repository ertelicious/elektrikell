import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { PRICE_BUTTONS, BADGES, ERROR_MESSAGE } from './constants';
import { useEffect, useState } from 'react';
import { getCurrentPrice } from '../services/apiService';
import { mwToKw, addTax } from '../utils/priceFormat';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePrice, setErrorMessage } from '../services/stateService';


function Info () {

    const dispatch = useDispatch();

    const [currentPrice, setCurrentPrice] = useState(0);
    const activePrice = useSelector((state) => state.main.activePrice); //redux

    useEffect(() => {
        (async() => { 
            try {
                const { data, success } = await getCurrentPrice();

                if(!success) throw new Error();

                setCurrentPrice(addTax(mwToKw(data[0].price), 'ee'));
            } catch (error) {
                dispatch(setErrorMessage(ERROR_MESSAGE));
            }    
        }) ();
    }, [dispatch]); // setErrorMessage это функция, кот. никогда не изменится, но useEffect все равно в данном случае просит dependency

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
                    onClick={() => dispatch(setActivePrice(id))} 
                    variant="outline-warning">{name}</Button>
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