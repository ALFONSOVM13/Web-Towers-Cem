"use client";
import React, { useRef } from "react";
import HeroSection from "@/components/hero/HeroSection";
import NewsSection from "@/components/newsPreview/NewsSection";
import Products from "@/components/products/Products";
import Tecnologies from "../../../public/images/icons/Tecnologies";
import BrandSlider from "@/components/footer/BrandSlider";
import KnowUsSection from "@/components/knowUs/KnowUsSection";
import ServicesSection from "@/components/knowMore/ServiceSection";
import Events from "@/components/sectionEvents/Events";
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
      <HeroSection scrollToNextSection={scrollToKnowUsSection} />

      <KnowUsSection />
      <div className="min-h-screen" ref={knowUsRef}>
        <Products />
      </div>
      {/* 
      <Advantages /> */}
      <div className="flex flex-col ">
        <ServicesSection />
      </div>
      <Events />

      <Tecnologies />

      <NewsSection />

      <BrandSlider />
    </div>
  );
};

export default HomePage;
