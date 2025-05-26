import React from "react";
import GameNavbar from "./../components/GameNavbar";
import Slider from "./../components/Slider";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <GameNavbar />
      <Slider />
      <main className="bg-dark text-white">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
