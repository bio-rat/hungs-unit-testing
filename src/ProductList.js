import React from "react";
import "./ProductList.css";

const ProductList = ({ products, onProductBuy }) => {
  return (
    <div>
      {products.map(x => (
        <li className="product-item" key={x.id}>
          {x.name} : ${x.price} USD
          <button onClick={() => onProductBuy(x.id)}>Add to Card</button>
          <h1>Hello</h1>
        </li>
      ))}
    </div>
  );
};

export default ProductList;
