"use client";
import React, { useRef } from "react";
import HeroSection from "@/components/hero/HeroSection";
import NewsSection from "@/components/newsPreview/NewsSection";
import Products from "@/components/products/Products";
import Tecnologies from "@/components/tecnologies/Tecnologies";
import BrandSlider from "@/components/footer/BrandSlider";
import SolutionsSection from "@/components/solutions/SolutionsSection";
import Advantages from "@/components/products/Advantages";
import KnowUsSection from "@/components/knowUs/KnowUsSection";
const HomePage = () => {
  const knowUsRef = useRef(null); // Referencia para la sección KnowUsSection

  const scrollToKnowUsSection = () => {
    if (knowUsRef.current) {
      window.scrollTo({
        top: knowUsRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="">
      <div>
        <HeroSection scrollToNextSection={scrollToKnowUsSection} />
      </div>

      <div >
      <KnowUsSection />
      </div>
      
      <div className="min-h-screen" ref={knowUsRef}>
        <Products />
      </div>
        <Advantages />
      <div>
        <SolutionsSection />
      </div>
      <div>
        <Tecnologies />
      </div>

      <div>
        <NewsSection />
      </div>
      <div>
        <BrandSlider />
      </div>
    </div>
  );
};

export default HomePage;
