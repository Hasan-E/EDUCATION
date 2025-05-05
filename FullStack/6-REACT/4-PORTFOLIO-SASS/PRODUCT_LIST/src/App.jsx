import { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import { categories, products } from "./helper/data";
import Products from "./components/products/Products";

// console.log(categories);

function App() {
  return (
    <>
      <Header categoriess={categories} />
      <Products products={products}/>
    </>
  );
}

export default App;
