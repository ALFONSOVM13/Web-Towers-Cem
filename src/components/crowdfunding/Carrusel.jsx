"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Carrusel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: "¿QUE ES UN CROWDFUNDING?",
      content:
        "Es una campaña de donación colaborativa, donde cualquier persona puede aportar a un proyecto o idea de negocio para su crecimiento o lanzamiento al mercado. ",
    },
    {
      title: "¿Que es Vaki?",
      content:
        "Vaki es una plataforma de crowdfunding que te permite recaudar dinero para tu proyecto o idea de negocio. ",
    },
    {
      title: "Como ganas",
      content:
        "Al donar a nuestro proyecto puedes recibir recompensas como productos, servicios o beneficios exclusivos.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel bg-primary-100">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="flex-none w-full" key={index}>
              <div className="h-96 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl text-complementary-200 font-bold mb-4">
                    {slide.title}
                  </h3>
                  <p className="text-lg text-complementary-200">
                    {slide.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center transform -translate-y-1/2">
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
