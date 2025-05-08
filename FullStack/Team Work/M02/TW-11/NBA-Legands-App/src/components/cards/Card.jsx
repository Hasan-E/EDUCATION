import React from "react";
import { useState } from "react";
const Card = ({ player }) => {
  const { name, img, statistics } = player;
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <div className="card" onClick={() => setVisible(!visible)}>
        {visible ? (
          <img src={img} alt="" />
        ) : (
          <div className="info">
            {statistics.map((statistics, index) => (
              <p key={index}>🏀 {statistics}</p>
            ))}
          </div>
        )}
        <p className="name">{name}</p>
      </div>
    </div>
  );
};
export default Card;
