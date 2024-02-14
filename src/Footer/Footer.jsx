// import Row from 'react-bootstrap/Row';
import TargetLow from './TargetLow';
import TargetHigh from './TargetHigh';
import { DEFAULT_ACTIVE_BUTTON } from '../Head'; 
import MadeBy from './MadeBy';
import { useSelector } from 'react-redux';


function Footer() {

    const activePrice = useSelector((state) => state.main.activePrice);
    const bestUntil = useSelector((state) => state.main.bestUntil);

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