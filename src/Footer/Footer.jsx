// import Row from 'react-bootstrap/Row';
import TargetLow from './TargetLow';
import TargetHigh from './TargetHigh';


function Footer({ activePrice }) {
    const getSelectedFooterComponent = () => {
        return activePrice === 'high' ? <TargetHigh /> : <TargetLow />;
    };

    return (
        <>
            {getSelectedFooterComponent()}
        </>
    );
}

export default Footer;