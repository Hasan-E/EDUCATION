import React from "react";
const Card = ({ player }) => {
  const { name, img, statistics } = player;
  return (
    <div>
      <div className="card">
        <img src={img} alt="" />
        <p className="name">{name}</p>
        <div className="info">
          <p>{statistics[0]}</p>
          <p>{statistics[1]}</p>
          <p>{statistics[2]}</p>
          <p>{statistics[3]}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
