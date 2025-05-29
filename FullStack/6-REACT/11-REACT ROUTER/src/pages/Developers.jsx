import React from "react";
import developers from "../helper/developers";
import { Container } from "react-bootstrap";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import slugify from "../helper/Slugify";
const Developers = () => {
  const navigate = useNavigate();

  const handleSubmit = (name) => {
    navigate(`/developers/${slugify(name)}`);
  };
  return (
    <Container>
      <h2>Our Developers</h2>
      <Row>
        {developers.map((developer) => (
          <Col key={developer.id}>
            <Card
              style={{ width: "18rem" }}
              onClick={() => handleSubmit(developer.name)}
            >
              <Card.Img variant="top" src={developer.avatar} />
              <Card.Body>
                <Card.Title>{developer.name}</Card.Title>
                <Card.Text>{developer.title}</Card.Text>
                <Card.Text>{developer.bio}</Card.Text>
                <Button variant="btn btn-danger">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Developers;
