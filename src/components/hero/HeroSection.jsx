import React from "react";
import Title from "../ui/Title";
import CustomButton from "../ui/CustomButton";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-90"></div>

      <div className="absolute inset-0 flex items-center justify-center text-center text-complementary-200">
        <div className="max-w-4xl px-6 md:px-10 lg:px-20 ">
          <Title
            text="CONSTRUYENDO CIUDADES QUE RESPIRAN"
            size="large"
            color="white"
            className={"animate-jump-in"}
          />
          <p className="mt-4 text-lg md:text-2xl leading-relaxed font-title">
            Innovación y sostenibilidad se unen para construir el futuro con
            cementos inteligentes y ecológicos.
          </p>
        </div>
      </div>
    </div>
      
  );
};

export default HeroSection;
