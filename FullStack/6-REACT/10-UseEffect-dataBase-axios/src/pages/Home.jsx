import React, { useEffect, useState } from "react";
import axios from "axios";
import InfoList from "../components/InfoList";
const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  //! GET (READ)
  const getInfo = async () => {
    const res = await axios.get(url);
    // console.log(res);
    setTutorials(res.data);
  };
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div>
      <InfoList tutorials={tutorials} />
    </div>
  );
};

export default Home;
