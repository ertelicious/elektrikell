import Logo from './Logo';
import Info from './Info';
import Search from './Search';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Head(props) {
    return (
        <>
            <Row>
                <Col>
                    <Col>
                        <Logo />
                    </Col>
                    <Col>
                        <Search />
                    </Col>
                </Col>
            </Row>
            <Row>
                <Info {...props} />
            </Row>
            <Row>
                
            </Row>
        </>
    );
}

export default Head;