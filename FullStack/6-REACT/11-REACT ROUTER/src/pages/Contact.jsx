import { Container, Form, Button, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center vh-100 bg-black text-white px-3"
    >
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={5}>
          <h1 className="text-danger fw-bold mb-4 text-center">Contact Us</h1>
          <p className="text-secondary text-center mb-4">
            Have a question or feedback? Fill out the form below and we’ll get back to you.
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label className="text-light">Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" className="bg-dark text-white border-secondary" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="text-light">Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" className="bg-dark text-white border-secondary" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label className="text-light">Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your message" className="bg-dark text-white border-secondary" />
            </Form.Group>

            <div className="text-center">
              <Button variant="danger" type="submit" className="mt-2 px-4">
                Send Message
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
