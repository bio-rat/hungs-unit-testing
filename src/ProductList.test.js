import React from "react";
import { shallow } from "enzyme";
import ProductList from "./ProductList";

let TEST_DATA;
let output;
let testingFn = jest.fn();

beforeEach(() => {
  TEST_DATA = [
    { id: 134, name: "computer", price: 1000 },
    { id: 122, name: "anker mouse", price: 50.25 },
    { id: 553, name: "computer stand", price: 20.99 },
    { id: 689, name: "mac adapter", price: 10000 }
  ];
  output = shallow(
    <ProductList onProductBuy={testingFn} products={TEST_DATA} />
  );
});

it("Render a list of products", () => {
  expect(output.find("li").length).toEqual(4);
});

it("Render price as $XXX.XX USD but not show .00", () => {
  const output = shallow(<ProductList products={TEST_DATA} />);
  expect(output.text()).toMatch(/\$\d{1,} USD/ || !/[.]00/);
});

it("Each li has to have className", () => {
  const list = output.find("li");
  list.forEach(node => {
    expect(node.hasClass("product-item")).toEqual(true);
  });
});

it("Each li has a button", () => {
  const firstProduct = output.find("li").first();
  expect(firstProduct.find("button").length).toBe(1);
});

it("Each button has text 'Add to Card' ", () => {
  expect(
    output
      .find("button")
      .first()
      .contains("Add to Card")
  ).toBe(true);
});

it("Click button works", () => {
  const firstProduct = output.find("button").first();
  firstProduct.simulate("click");
  expect(testingFn.mock.calls.length).toEqual(1);
});

it("Check params through function", () => {
  const firstProduct = output.find("button").first();
  firstProduct.simulate("click");
  expect(testingFn.mock.calls[0][0]).toEqual(134);
});

it("Check snapshot", () => {
  expect(output).toMatchSnapshot();
});
