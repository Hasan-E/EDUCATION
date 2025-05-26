import React from "react";
import { Container } from "react-bootstrap";
import { Col, Row,Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col>

          <h1 className="display-1">  Welcome to GameZone      </h1>
          <p>
            Discover the latest and greatest free-to-play games from all genres. Dive into epic adventures, competitive battles, and immersive stories.
          </p>
          <Button className="btn btn-danger">
            Explore Games
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
