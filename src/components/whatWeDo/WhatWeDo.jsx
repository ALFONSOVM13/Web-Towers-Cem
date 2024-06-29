import React, { useEffect, useRef } from "react";
import { gsap } from "gsap"; // Asegúrate de tener GSAP instalado (npm install gsap)

const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
    gsap.fromTo(
      contentRef.current.children, // Anima cada elemento dentro de contentRef
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power2.out" }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex flex-col justify-center items-start px-8 py-12 overflow-hidden"
      style={{
        backgroundImage: `url('/images/banner.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-complementary-300/70 z-0"></div>

      <div 
        ref={contentRef} 
        className="max-w-3xl bg-white/20 backdrop-blur-lg p-8 rounded-xl shadow-2xl z-10 space-y-6"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-complementary-200 font-bold leading-tight">
          ¿Qué Hacemos?
        </h1>
        <p className="text-lg sm:text-xl text-complementary-200 leading-relaxed">
          En Towers Cem, desarrollamos cementos inteligentes y sostenibles que 
          purifican el aire eliminando hasta un 23% de CO₂. Nos enfocamos en 
          ofrecer soluciones que no solo son duraderas y de alta calidad, sino 
          también amigables con el medio ambiente.
        </p>

        {/* Botones con estilo mejorado y enlaces internos */}
        <div className="flex space-x-4">
          <button className="bg-complementary-300 text-white hover:bg-complementary-100 transition-colors duration-300 font-bold py-2 px-4 rounded-lg shadow-md">
            Conoce más
          </button>
          <a href="#contacto" className="bg-complementary-300 text-white hover:bg-complementary-100 transition-colors duration-300 font-bold py-2 px-4 rounded-lg shadow-md">
            Contáctanos
          </a>
          <a href="#productos" className="bg-complementary-300 text-white hover:bg-complementary-100 transition-colors duration-300 font-bold py-2 px-4 rounded-lg shadow-md">
            Productos
          </a>
        </div>
      </div>

      {/* (Opcional) Puedes agregar elementos decorativos como en el ejemplo anterior */}
    </section>
  );
};

export default WhatWeDo;
