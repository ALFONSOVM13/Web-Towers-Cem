import React from "react";
import Title from "../ui/Title";
import { PiMouseSimple } from "react-icons/pi";

const HeroSection = ({ scrollToNextSection }) => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute object-cover w-full h-full"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-end mb-10">
        <div className="max-w-5xl px-4 text-center">
          <Title
            text="Somos Towers Cem"
            className="animate-jump-in text-shadow-xl mb-4 text-complementary-200 sm:text-4xl md:text-5xl lg:text-6xl"
          />
          <p className="text-xl md:text-2xl leading-relaxed font-content font-light italic text-complementary-200 mb-8">
            Construyendo ciudades que respiran
          </p>
          <div className="mb-8">
            <p className="text-xl md:text-2xl leading-relaxed font-content font-light text-complementary-200 mb-8">
              ¿Estás listo para descubrir cómo el cemento puede cambiar el
              mundo?
            </p>
          </div>
        </div>

        <button
          className="group mt-12 animate-bounce animate-infinite animate-ease-in-out"
          onClick={scrollToNextSection}
          aria-label="Scroll down"
        >
          <PiMouseSimple className="text-complementary-100 text-5xl group-hover:text-secondary-200 transition duration-300" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
