// src/pages/SignIn.jsx
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";

function SignIn() {

  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center vh-100 bg-black text-white px-3"
    >
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={4}>
          <h1 className="text-danger fw-bold mb-4 text-center">Sign In</h1>
          <p className="text-secondary text-center mb-4">
            Welcome back! Please enter your username to continue.
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label className="text-light">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                className="bg-dark text-white border-secondary"
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="danger" type="submit" className="mt-2 px-4">
                Sign In
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
