import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRouter = () => {
  const username = localStorage.getItem("username");

  return username === "ROOSTER" ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRouter;
