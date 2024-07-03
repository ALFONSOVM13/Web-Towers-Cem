"use client";
import React from "react";
import HeroSection from "@/components/hero/HeroSection";
import NewsSection from "@/components/news/NewsSection";
import Products from "@/components/products/Products";
import Tecnologies from "@/components/tecnologies/Tecnologies";
import FooterSection from "@/components/footer/FooterSection";
import KnowUsSection from "@/components/knowUs/KnowUsSection";
import BrandSlider from "@/components/footer/BrandSlider";
import Title from "@/components/ui/Title";

const HomePage = () => {
  return (
    <div className="">
      <div>
        <HeroSection />
      </div>
      <div className=" bg-complementary-200">
        <KnowUsSection />
      </div>
      <div className=" bg-complementary-200">
        <Products />
      </div>
      <div className=" bg-complementary-100">
        <Tecnologies />
      </div>

      <div className=" bg-complementary-200">
        <NewsSection />
      </div>
      <div className=" bg-complementary-200">
        <BrandSlider />
      </div>
    </div>
  );
};

export default HomePage;
