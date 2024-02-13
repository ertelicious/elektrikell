// import { useEffect } from 'react';
// import { useLocation, useParams, useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import AboutApp from './AboutApp';
import AboutMe from './AboutMe';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


function About() {
    // const location = useLocation();
    // console.log(location); // для того чтобы в компоненте узнать на какой ссылке мы находимся

    //  для id-шек
    // const { who } = useParams();

    //  по сути переадресация
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (params.id === '999') navigate('/');
    // }, [params, navigate]);

    // if(who === 'me') return <>About me</>;
    // if(who === 'gamma') return <>Gamma Intelligence</>;

    return (
        <>
            <Container className="mt-4">
                <Tab.Container id="left-tabs-example" defaultActiveKey="gamma">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="gamma">
                                        About app
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="me">About dev</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="gamma">
                                    <AboutApp />
                                </Tab.Pane>
                                <Tab.Pane eventKey="me">
                                    <AboutMe />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </>
    );
}

export default About;