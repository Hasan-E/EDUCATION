import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import roosterLogo from "./assets/r5.jpg";
import "./App.css";
import Card from "./Card";
import card from "./helper/data";

function App() {
  // const card = [
  //   {
  //     img: "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__480.jpg",
  //     name: "Lucía Montenegro",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_1280.jpg",
  //     name: "Veronika Bykovich",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2025/04/04/15/25/lonely-9513577_640.jpg",
  //     name: "ἐμμανυελ  ",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2020/12/14/15/48/stair-5831253_640.jpg",
  //     name: "Eugene Golovesov",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2020/12/14/15/48/stair-5831253_640.jpg",
  //     name: "op23",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2024/03/08/13/04/autumn-8620917_640.jpg",
  //     name: "Nina Hill",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__480.jpg",
  //     name: "Jonathan Borba",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_1280.jpg",
  //     name: "Enrique Hoyos ",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__480.jpg",
  //     name: "Malik Skydsgaard",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_1280.jpg",
  //     name: "Fidan Nazim qizi",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__480.jpg",
  //     name: "Philip Warp",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_1280.jpg",
  //     name: "Poyee Tsang",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__480.jpg",
  //     name: "Blue Arauz",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_1280.jpg",
  //     name: "Poyee Tsang",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__480.jpg",
  //     name: "Martino Grua",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_1280.jpg",
  //     name: "Malik Skydsgaard",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__480.jpg",
  //     name: "Malik Skydsgaard",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_1280.jpg",
  //     name: "Alyona Pastukhova",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__480.jpg",
  //     name: "Rizky Sabriansyah",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_1280.jpg",
  //     name: "Kris Møklebust",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__480.jpg",
  //     name: "op23",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_1280.jpg",
  //     name: "7inchs",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__480.jpg",
  //     name: "Taylor Marx",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_1280.jpg",
  //     name: "Jair Hernandez",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__480.jpg",
  //     name: "Elena Rubtsova",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_1280.jpg",
  //     name: "Elena Rubtsova",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__480.jpg",
  //     name: "GEORGE KASCHEEV",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_1280.jpg",
  //     name: "Trinity LaKose",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__480.jpg",
  //     name: "Omar Zetina",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_1280.jpg",
  //     name: "Withsonya_",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__480.jpg",
  //     name: "Leah Kelley",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_1280.jpg",
  //     name: "Leah Kelley",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__480.jpg",
  //     name: "Lucía Montenegro",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__480.jpg",
  //     name: "Usman ARJ",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_1280.jpg",
  //     name: "Iury Bessa",
  //   },
  //   {
  //     img: "https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_1280.jpg",
  //     name: "op23",
  //   },
  // ];
  return (
    <>
      <h1>Image Gallery</h1>
      <Card kart={card[0]} />
      <Card kart={card[1]} />
      <Card kart={card[2]} />
      <Card kart={card[3]} />
      <Card kart={card[4]} />
      <Card kart={card[5]} />
      <Card kart={card[6]} />
      <Card kart={card[7]} />
      <Card kart={card[8]} />
      <Card kart={card[9]} />
      <Card kart={card[10]} />
    </>
  );
}

export default App;
