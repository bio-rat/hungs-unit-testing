import React, { Component } from "react";
import "./App.css";
import ProductList from "./ProductList";

class App extends Component {
  render() {
    const TEST_DATA = [
      { id: 134, name: "computer", price: 1000 },
      { id: 122, name: "anker mouse", price: 50.25 },
      { id: 553, name: "computer stand", price: 20.99 },
      { id: 689, name: "mac adapter", price: 10000 }
    ];
    return (
      <div className="App">
        <h1>My E-Commerce Site</h1>
        <ProductList products={TEST_DATA} />
      </div>
    );
  }
}

export default App;
