import AboutApp from "./AboutApp";
import AboutMe from "./AboutMe";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";


function About() {
  return (
    <>
      <Container className="mt-4">
        <Tab.Container id="left-tabs-example" defaultActiveKey="gamma">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="gamma" href="#gamma">About app</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="me" href="#me">About me</Nav.Link>
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
