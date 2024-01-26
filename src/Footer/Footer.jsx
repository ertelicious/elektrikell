// import Row from 'react-bootstrap/Row';
import TargetLow from './TargetLow';
import TargetHigh from './TargetHigh';
import { DEFAULT_ACTIVE_BUTTON } from '../Head'; 


function Footer({ activePrice, activeHour, setActiveHour }) {
    return (
        <>
            { activePrice === DEFAULT_ACTIVE_BUTTON ? ( 
                <TargetLow activeHour={activeHour} setActiveHour={setActiveHour} /> 
                ) : ( 
                <TargetHigh /> 
            )}
        </>
    );
}

export default Footer;