import React, { useEffect, useState } from "react";

import axios from "axios";

const People = () => {
  const [people, setPeople] = useState([]);

  //! 1. yol fetch then yapısı (zincir-chain)

  // useEffect(()=>{
  // fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((veri)=>setPeople(veri))
  // },[])

  //! 2. yol axios then yapısı
  // useEffect(()=>{
  // axios
  //   .get("https://jsonplaceholder.typicode.com/users")
  //   .then((res) => setPeople(res.data));
  // },[])

  //! 3.yol axios async await

  const getir = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    setPeople(res.data);
  };

  useEffect(() => {
    getir();
  }, []);

  return (
    <div className="container text-center mt-4">
      <div className="row">
        {people.map((a) => (
          <div key={a.id} className="col-12 col-sm-6 col-md-4">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${a.id}`}
              alt=""
            />

            <h5 className="text-danger">{a.name} </h5>
            <h6 className="text-warning">{a.username} </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
