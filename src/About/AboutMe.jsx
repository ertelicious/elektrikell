import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AboutMe() {
  console.log("AboutMe");
  return (
    <>
      <Container className="my-1 pt-2">
        <Row className="about-container-ve">
          <h1 className="display-2 p-0">About ./me</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </Row>
        <Row className="mx-3 pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Row>

        <Form className="mt-5 px-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className="form-control border-dark"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              className="form-control border-dark"
              as="textarea" 
              rows={3}
              placeholder="Leave your message"
            />
          </Form.Group>

          <Button className="w-100 btn-lg" variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default AboutMe;
