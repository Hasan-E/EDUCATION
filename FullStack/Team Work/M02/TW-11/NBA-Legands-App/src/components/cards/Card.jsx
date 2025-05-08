import React from "react";
import { useState } from "react";
const Card = ({ player }) => {
  const { name, img, statistics } = player;
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <div className="card" onClick={() => setVisible(!visible)}>
        {visible && <img src={img} alt="" />}
        {!visible && (
          <div className="info">
            <p>🏀 {statistics[0]}</p>
            <p>🏀 {statistics[1]}</p>
            <p>🏀 {statistics[2]}</p>
            <p>🏀 {statistics[3]}</p>
          </div>
        )}
        <p className="name">{name}</p>
      </div>
    </div>
  );
};
export default Card;
