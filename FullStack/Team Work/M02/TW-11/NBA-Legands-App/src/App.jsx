import { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import CardContainer from "./components/cards/CardContainer";
import { data } from "./helpers/data";
// console.log(data);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Header />
      <Search />
      <CardContainer data={data} />
    </div>
  );
}

export default App;
