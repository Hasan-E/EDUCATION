import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameNavbar from "./../components/GameNavbar";
import Layout from "../pages/Layout";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Games from "../pages/Games";

const AppRouterV6 = () => {
  return (
    <BrowserRouter>
      {/* <GameNavbar/> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/games" element={<Games />} />
        </Route>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouterV6;
