import { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Users from "./components/users/Users";
import users from "./helper/data";
// console.log({ users });

function App() {
  return (
    <>
      <Header />
      <Users users={users} />
    </>
  );
}

export default App;
