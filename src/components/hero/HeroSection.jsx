import React, { useRef } from "react";
import Title from "../ui/Title";
import { PiMouseSimple } from "react-icons/pi";
import { FaAnglesDown } from "react-icons/fa6";

const HeroSection = ({ scrollToNextSection }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-90"></div>

      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-5xl px-10 md:px-10 md:max-w-6xl lg:max-w-7xl xl:max-w-8xl">
          <Title
            text="Construyendo ciudades que respiran"
            className="animate-jump-in text-shadow-smooth mb-6 text-complementary-200 sm:text-4xl md:text-5xl lg:text-6xl text-5xl"
          />
          <p className="text-2xl md:text-4xl leading-relaxed font-content font-light text-white mb-8">
            Innovación y sostenibilidad se unen para construir el futuro con
            cementos inteligentes y ecológicos.
          </p>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <button
              className="flex items-center flex-col justify-center animate-bounce animate-infinite animate-ease-in-out"
              onClick={scrollToNextSection}
            >
              <PiMouseSimple className="text-white text-5xl" />
              <FaAnglesDown className="text-white text-3xl mt-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
