"use client";
import React, { useRef } from "react";
import HeroSection from "@/components/hero/HeroSection";
import NewsSection from "@/components/newsPreview/NewsSection";
import Products from "@/components/products/Products";
import Tecnologies from "@/components/tecnologies/Tecnologies";
import FooterSection from "@/components/footer/FooterSection";
import KnowUsSection from "@/components/knowUs/KnowUsSection";
import BrandSlider from "@/components/footer/BrandSlider";

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
      <div ref={knowUsRef}  className="min-h-screen">
        <KnowUsSection />
      </div>
      <div >
        <Products />
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
