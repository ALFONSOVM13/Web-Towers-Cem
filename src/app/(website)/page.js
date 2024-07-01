"use client";
import React, { useEffect, useRef } from "react";
import HeroSection from "@/components/hero/HeroSection";
import WhatWeDo from "@/components/whatWeDo/WhatWeDo";
import NewsSection from "@/components/news/NewsSection";
import Products from "@/components/products/Products";
import NewsletterSection from "@/components/newsletter/NewsletterSection";
import Tecnologies from  "@/components/tecnologies/Tecnologies"

const HomePage = () => {
  const sectionRefs = useRef([]);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (!isScrolling.current) {
        if (event.deltaY > 0) {
          scrollToSection(1);
        } else if (event.deltaY < 0) {
          scrollToSection(-1);
        }
      }
    };

    const handleKeyDown = (event) => {
      if (!isScrolling.current) {
        if (event.key === "ArrowDown") {
          scrollToSection(1);
        } else if (event.key === "ArrowUp") {
          scrollToSection(-1);
        }
      }
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const scrollToSection = (direction) => {
    isScrolling.current = true;

    const currentSectionIndex = sectionRefs.current.findIndex((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top === 0;
    });

    let nextSectionIndex = currentSectionIndex + direction;
    if (nextSectionIndex < 0) nextSectionIndex = 0;
    if (nextSectionIndex >= sectionRefs.current.length)
      nextSectionIndex = sectionRefs.current.length - 1;

    sectionRefs.current[nextSectionIndex].scrollIntoView({
      behavior: "smooth",
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, 900); 
  };

  return (
    <div className="h-screen w-full sm:overflow-y-auto xl:overflow-hidden">
      <div ref={(el) => (sectionRefs.current[0] = el)} className="h-screen">
        <HeroSection />
      </div>
      <div ref={(el) => (sectionRefs.current[1] = el)} className="h-screen">
        <WhatWeDo />
      </div>
      <div ref={(el) => (sectionRefs.current[2] = el)} className="min-h-screen bg-complementary-200">
        <Products />
      </div>
      <div ref={(el) => (sectionRefs.current[3] = el)} className="h-screen bg-complementary-100">
        <Tecnologies />
      </div>
      <div ref={(el) => (sectionRefs.current[4] = el)} className="min-h-screen bg-complementary-200">
        <NewsSection />
      </div>
      <div ref={(el) => (sectionRefs.current[5] = el)} className="min-h-screen bg-complementary-200 grid place-content-center">
        <NewsletterSection />
      </div>
    </div>
  );
};

export default HomePage;
