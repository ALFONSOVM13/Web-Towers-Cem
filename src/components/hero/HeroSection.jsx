import React from "react";
import Title from "../ui/Title";
import { PiMouseSimple } from "react-icons/pi";
import { FaAnglesDown } from "react-icons/fa6";
const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-90"></div>

      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-4xl px-6 md:px-10 lg:px-20">
          <Title
            text="CONSTRUYENDO CIUDADES QUE RESPIRAN"
            size="large"
            color="white"
            className="animate-jump-in text-shadow-smooth mb-6 text-complementary-200"
          />
          <p className="text-xl md:text-2xl leading-relaxed font-content text-white mb-8">
            Innovación y sostenibilidad se unen para construir el futuro con
            cementos inteligentes y ecológicos.
          </p>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center flex-col justify-center animate-bounce animate-infinite animate-ease-in-out">
              <PiMouseSimple className=" text-white text-5xl" />
              <FaAnglesDown className="text-white text-3xl mt-4 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
