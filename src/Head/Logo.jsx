import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { setShowSidebar } from "../services/stateService";
import { useDispatch } from 'react-redux'

function Logo () {

    const dispatch = useDispatch();
    const handleOpenSidebar = () => {
        dispatch(setShowSidebar(true));
    };
    
    return (
        <>
            {/* <Col>Logo</Col> */}
            <Col>
                <Button 
                    variant="primary" 
                    onClick={handleOpenSidebar}
                >
                    Search
                </Button>
            </Col>
        </>
    );
}

export default Logo;