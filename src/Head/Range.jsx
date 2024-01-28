import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function Range() {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Control 
            placeholder="From"
            type="text"
            id="from"
            name="from"
            data-type="data" 
          />
        </Col>
        <Col>
          <Form.Control 
            placeholder="Until"
            type="text"
            id="until"
            name="until"
            data-type="data"   
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Row>
    </Form>
  );
}

export default Range;