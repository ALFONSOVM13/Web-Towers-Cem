"use client";
import { useState } from "react";
import DescriptionProduct from "./DescriptionProduct";
import ProductsSlider from "./ProductsSlider";
import BenefitsProduct from "./BenefitsProduct";

const ProductSection = ({ products }) => {
  const product = useState(products);


  return (
    <>
      <ProductsSlider
        title={product.title}
        name={product.name}
        description={product.description}
        image={product.image}
      />

      <DescriptionProduct cards={product.cards} />

      <BenefitsProduct />
    </>
  );
};
export default ProductSection;
