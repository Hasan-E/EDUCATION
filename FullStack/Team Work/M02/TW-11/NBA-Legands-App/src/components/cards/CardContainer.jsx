import React from "react";
import Card from "./Card";
import "./Cards.scss";
const CardContainer = ({ data }) => {
  // console.log(data);

  return (
    <div className="cardContainer">
      {data.map((player) => (
        <Card key={player.name} player={player} />
      ))}
    </div>
  );
};
export default CardContainer;
