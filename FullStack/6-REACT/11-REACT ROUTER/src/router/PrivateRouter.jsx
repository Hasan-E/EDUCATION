import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRouter = () => {
  const userName = localStorage.getItem("userName");

  return userName === "ROOSTER" ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRouter;
