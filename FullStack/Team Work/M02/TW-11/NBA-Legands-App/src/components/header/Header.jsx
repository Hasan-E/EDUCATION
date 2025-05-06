import React from "react";
import nbaImg from "../../assets/nba-logo.png";
import "./Header.scss";
const Header = () => {
  return (
    <header>
      <img src={nbaImg} alt="" />
      <h1>NBA Legends</h1>
    </header>
  );
};
export default Header;
