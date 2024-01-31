import Logo from './Logo';
import Info from './Info';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Head(props) {

    const { handleOpenSidebar, ...restProps } = props; //деструкт из проперти то, что нам необходимо    

    return (
        <>
            <Row>
                <Col>
                    <Col>
                        <Logo handleOpenSidebar={handleOpenSidebar} />
                    </Col>
                    <Col>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Info {...restProps} />
            </Row>
            <Row>
                
            </Row>
        </>
    );
}

export default Head;