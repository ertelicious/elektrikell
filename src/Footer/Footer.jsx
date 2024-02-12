import TargetLow from './TargetLow';
import TargetHigh from './TargetHigh';
import { DEFAULT_ACTIVE_BUTTON } from '../Head'; 
import MadeBy from './MadeBy';


function Footer({ activePrice, activeHour, setActiveHour, bestUntil }) {
    return (
        <>
            { activePrice === DEFAULT_ACTIVE_BUTTON ? ( 
                <TargetLow 
                    activeHour={activeHour} 
                    setActiveHour={setActiveHour} 
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