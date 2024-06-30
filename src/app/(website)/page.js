"use client";
import React, { useEffect, useRef } from "react";
import HeroSection from "@/components/hero/HeroSection";
import WhatWeDo from "@/components/whatWeDo/WhatWeDo";
import Products from "@/components/products/Products";

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
    }, 200); // Ajusta el tiempo según sea necesario
  };

  return (
    <div className="h-screen w-full sm:overflow-y-auto xl:overflow-hidden">
      <div ref={(el) => (sectionRefs.current[0] = el)} className="h-screen">
        <HeroSection />
      </div>
      <div ref={(el) => (sectionRefs.current[1] = el)} className="h-screen">
        <WhatWeDo />
      </div>
      <div ref={(el) => (sectionRefs.current[2] = el)} className="h-screen bg-complementary-200">
        <Products />
      </div>
    </div>
  );
};

export default HomePage;
