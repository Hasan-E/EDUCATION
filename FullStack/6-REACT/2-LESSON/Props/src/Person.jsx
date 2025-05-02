import React from "react";
import Posta from "./Posta";
const Person = (props) => {
  console.log(props);

  //! dest
  const { img, name, tel } = props.kisi;
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt="" />
      <p>{tel}</p>
      <Posta isim={name} />
    </div>
  );
};

export default Person;
