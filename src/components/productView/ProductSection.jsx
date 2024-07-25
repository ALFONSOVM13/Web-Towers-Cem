"use client";
import { useState } from "react";
import DescriptionProduct from "./DescriptionProduct";
import ProductsSlider from "./ProductsSlider";
import BenefitsProduct from "./BenefitsProduct";

const ProductSection = ({ products }) => {
  const [counter, setCounter] = useState(0);
  const [product, setProduct] = useState(products[counter]);

  const nextCem = () => {
    if (counter < products.length - 1) {
      setCounter(counter + 1);
      setProduct(products[counter + 1]);
    }
  };

  const previousCem = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setProduct(products[counter - 1]);
    }
  };

  return (
    <>
      <ProductsSlider
        title={product.title}
        name={product.name}
        description={product.description}
        image={product.image}
        nextCem={nextCem}
        previousCem={previousCem}
        counter={counter}
      />

      <DescriptionProduct cards={product.cards} />

      <BenefitsProduct />
    </>
  );
};
export default ProductSection;
