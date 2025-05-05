import React from "react";

const Card = ({ kart }) => {
  const { img, name } = kart;
  return (
    <div className="body">
      <div className="card">
        <img className="image" src={img} alt="" />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card;
