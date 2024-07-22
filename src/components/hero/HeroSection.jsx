import React from "react";
import Title from "../ui/Title";
import { PiMouseSimple } from "react-icons/pi";
import Button from "../ui/Button";
import H1 from "../ui/H1";

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

      <div className="absolute inset-0 flex flex-col items-center justify-end mx-10">
        <div className="max-w-5xl px-4 text-center">
          <H1
            text="Somos Towers Cem"
            className=" mb-4 text-complementary-200 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Somos Towers Cem
          </H1>
          <p className="text-xl md:text-3xl leading-relaxed font-content font-light italic text-complementary-200 mb-8">
            Construyendo ciudades que respiran
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-1 sm:gap-2">
            <Button onClick={() => (window.location.href = "/products")}>
              Nuestro Cemento
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://calendly.com/miley-velasquez/reunion-towers-cem?month=2024-07",
                  "_blank"
                )
              }
            >
              Asesoria Técnica
            </Button>
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
