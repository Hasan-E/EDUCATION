import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white text-center"
    >
      <h1 className="display-1 text-danger fw-bold">404</h1>
      <h2 className="mb-3">Lost in the Code</h2>
      <p className="text-secondary">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button variant="danger" className="mt-3">
          Go Back Home
        </Button>
      </Link>
    </Container>
  );
};

export default NotFound;
