import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


function Logo ({ handleOpenSidebar }) {
    return (
        <>
            <Col>Logo</Col>
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