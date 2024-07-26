import React from "react";
import H3 from "../ui/H3";

function WhatWeDo() {
  const cardsData = [
    { title: "Prefabricados", bgImage: "/images/prefabricados.jpg" },
    { title: "Bloqueras", bgImage: "/images/bloqueras.jpg" },
    { title: "Constructoras", bgImage: "/images/constructoras.jpg" },
  ];

  return (
    <section className="w-full py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-neutral-800 mb-12 text-3xl sm:text-4xl lg:text-5xl font-bold">
          Ofrecemos soluciones sostenibles para:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"> 
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="group relative rounded-lg overflow-hidden shadow-sm transition-transform duration-300 hover:scale-105 aspect-video" // Add aspect-video
            >
              <img
                src={card.bgImage}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-xl md:text-2xl font-content font-semibold text-white text-center">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
