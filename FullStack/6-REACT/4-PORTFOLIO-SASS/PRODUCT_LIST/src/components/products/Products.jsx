import React from "react";
import "./Products.scss";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div className="ürün-list">
      {products.map((ürün) => (
        <ProductCard key={ürün.id} ürün={ürün} />
      ))}
    </div>
  );
};

export default Products;
