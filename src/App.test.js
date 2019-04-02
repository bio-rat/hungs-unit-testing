import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import ProductList from "./ProductList";

it("renders the name of my site", () => {
  const output = shallow(<App />);
  const header = output.find("h1").first();
  expect(header.contains("My E-Commerce Site")).toBe(true);
});

it("contains a product list", () => {
  const output = shallow(<App />);
  expect(output.find(ProductList).length).toBe(1);
});
