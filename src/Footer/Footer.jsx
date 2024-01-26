// import Row from 'react-bootstrap/Row';
import TargetLow from './TargetLow';
import TargetHigh from './TargetHigh';
import { DEFAULT_ACTIVE_BUTTON } from '../Head/constants'; 

function Footer({ activePrice }) {
    const getSelectedFooterComponent = () => {
        // return activePrice === 'high' ? <TargetHigh /> : <TargetLow />;
        return activePrice === DEFAULT_ACTIVE_BUTTON ? <TargetLow /> : <TargetHigh />;
    };

    return (
        <>
            {getSelectedFooterComponent()}
        </>
    );
}

export default Footer;