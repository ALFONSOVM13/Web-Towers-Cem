import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="flex-shrink-0 w-full h-[auto] md:h-[auto] flex items-center justify-center relative"
          >
            <Image
              src={image.src}
              alt={image.title}
              width={4100}
              height={400}
              className="object-contain object-center"
            />
            {/* Botón abajo del todo centrado */}
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 md:left-8"
        onClick={handlePrev}
      >
        <FaChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 md:right-8"
        onClick={handleNext}
      >
        <FaChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

const Events = () => {
  const images = [
    {
      id: 1,
      title: "Estaremos en",
      src: "/images/events/GeneraSummit.svg",
      Link: "https://mentex.co/summit24/",
    },
    {
      id: 2,
      title: "Próximo Evento",
      src: "/images/events/LaVaki.svg",
      Link: "https://vaki.co/es/vaki/Oz8xpMtjZTxmk1b25kYJ",
    },
  ];

  return (
    <section className="bg-complementary-300 mb-12 p-0">
      <Slider images={images} />
    </section>
  );
};

export default Events;
