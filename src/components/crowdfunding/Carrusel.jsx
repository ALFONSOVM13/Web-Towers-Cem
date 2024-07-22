"use client";

import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Imagen1 from "../../../public/images/crowdfunding/banner2.jpg";
import Imagen2 from "../../../public/images/crowdfunding/banner1.png";
import Imagen3 from "../../../public/images/crowdfunding/banner3.jpg";

function Carrusel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: "¿QUÉ ES UN CROWDFUNDING?",
      content:
        "Es una campaña de donación colaborativa, donde cualquier persona puede aportar a un proyecto o idea de negocio para su crecimiento o lanzamiento al mercado.",
      backgroundImage: Imagen1.src,
    },
    {
      title: "¿QUÉ ES VAKI?",
      content:
        "Vaki es una plataforma de crowdfunding que te permite recaudar dinero para tu proyecto o idea de negocio.",
      backgroundImage: Imagen2.src,
    },
    {
      title: "¿CÓMO GANAS?",
      content:
        "Al donar a nuestro proyecto puedes recibir recompensas como productos, servicios o beneficios exclusivos.",
      backgroundImage: Imagen3.src,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel bg-primary-100 relative">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-none w-full relative h-[50vh]"> 
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.backgroundImage})`,
                  opacity: 0.3,
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center w-2/3 sm:w-full md:w-2/3 lg:w-1/2 xl:w-2/3">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-4">
                    {slide.title}
                  </h3>
                  <p className="text-lg sm:text-xl lg:text-2xl text-white">
                    {slide.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center transform -translate-y-1/2 p-10">
          <IoIosArrowBack
            className="text-4xl text-white cursor-pointer"
            onClick={() =>
              setActiveIndex(
                (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
              )
            }
          />
          <IoIosArrowForward
            className="text-4xl text-white cursor-pointer"
            onClick={() =>
              setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Carrusel;
