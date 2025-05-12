import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { data } from "../../helpers/data";
import LegendCard from "./LegendCard";

const LegendsContainer = () => {
  return (
    <Container className="my-3 p-3 card-container">
      <Row xs={1} md={2} xl={3} className="justify-content-center g-3">
        {data.map((legend) => (
          <LegendCard legend={legend} key={legend.id} />
        ))}
      </Row>
    </Container>
  );
};

export default LegendsContainer;
