import { cardComponent } from "../components/cardComponent.js";
import { products } from "../data/products.js";

const productArea = document.querySelector("#render-product");

products.map((product) => {
  productArea.innerHTML += cardComponent(product);
  console.log(product);
});
