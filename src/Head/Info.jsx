import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { PRICE_BUTTONS, ERROR_MESSAGE } from './constants';
import { useEffect, useContext } from 'react';
import { getCurrentPrice } from '../services/apiService';
import { mwToKw, addTax } from '../utils/priceFormat';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePrice, setErrorMessage } from '../services/stateService';
import BadgePrice from './BadgePrice';
import { ElectricPriceContext } from '../contexts/ElectricPriceContext';


function Info () {

    const dispatch = useDispatch();

    const { values, actions } = useContext(ElectricPriceContext);

    const activePrice = useSelector((state) => state.main.activePrice); //redux

    useEffect(() => {
        (async() => { 
            try {
                const { data, success } = await getCurrentPrice();

                if(!success) throw new Error();

                actions.setCurrentPrice(addTax(mwToKw(data[0].price), 'ee'));
            } catch (error) {
                dispatch(setErrorMessage(ERROR_MESSAGE));
            }    
        }) ();
    }, [dispatch, actions]); 

    return (
        <>
        <Col className="mt-auto">
            <div>Current price of electricity is</div>
            <BadgePrice {...values} />
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
             <h2>{values.currentPrice}</h2>
             <div>cent / kilowatt-hour</div>
        </Col>
        </>
    );
}

export default Info;