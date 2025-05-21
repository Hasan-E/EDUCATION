import React, { useEffect, useState } from "react";
import axios from "axios";
import InfoList from "../components/InfoList";
import AddInfo from "../components/AddInfo";
const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  /!* --------------  GET (READ) -------------- /;
  const getInfo = async () => {
    const res = await axios.get(url);
    // console.log(res);
    setTutorials(res.data);
  };
  useEffect(() => {
    getInfo();
  }, []);
  /!* ------------------ DELETE ------------------ */;
  const deleteInfo = async (id) => {
    await axios.delete(`${url}${id}/`);
    getInfo();
  };

  /!* ------------------- POST (CREATE) ------------------- */;
  const postInfo = async (newData) => {
    await axios.post(url, newData);
    getInfo();
  };

  /!* --------------- PUT (UPDATE) --------------- */;
  const putInfo = async (edit) => {
    await axios.put(`${url}${edit.id}/`, edit);
    getInfo();
  };
  return (
    <div>
      <AddInfo postInfo={postInfo} />
      <InfoList
        tutorials={tutorials}
        deleteInfo={deleteInfo}
        putInfo={putInfo}
      />
    </div>
  );
};

export default Home;
