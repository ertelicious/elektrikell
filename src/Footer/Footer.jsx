// import Row from 'react-bootstrap/Row';
import TargetLow from './TargetLow';
import TargetHigh from './TargetHigh';
import { DEFAULT_ACTIVE_BUTTON } from '../Head'; 
import MadeBy from './MadeBy';
//redux hook
import { useSelector } from 'react-redux';


function Footer({  bestUntil }) {

    const activePrice = useSelector((state) => state.main.activePrice); //вытягиваем все, но указываем конкретно, что нам нужно

    return (
        <>
            { activePrice === DEFAULT_ACTIVE_BUTTON ? ( 
                <TargetLow 
                    bestUntil={bestUntil}
                /> 
            ) : ( 
                <TargetHigh /> 
            )}
            <MadeBy />
        </>
    );
}

export default Footer;