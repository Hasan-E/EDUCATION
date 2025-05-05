import React from "react";
import "./Header.scss";
//! jsx alanında döngülerden sadece map kullanılır
//! jsx alanındaki döngülerdeki ilk etikete key={index} yazılır. benzersiz(unique ) veri ister

const Header = ({ categoriess }) => {
  // console.log(categoriess);
  return (
    <div className="header">
      <h1>Product List</h1>
      <div className="btnDiv">
        {categoriess.map((a) => (
          <button key={a}>{a}</button>
        ))}
      </div>
    </div>
  );
};

export default Header;
