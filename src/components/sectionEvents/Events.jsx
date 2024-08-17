import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            className="cursor-pointer flex-shrink-0 w-full h-[auto] md:h-[auto] flex items-center justify-center relative"
            onClick={() => window.open(image.Link, "_blank")}
          >
            <Image
              src={isMobile ? image.srcMobile : image.src}
              alt={image.title}
              title={image.title}
              width={4100}
              height={400}
              className="object-contain object-center"
            />
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
      srcMobile: "/images/events/GeneraSummitMobile.svg",
      Link: "https://mentex.co/summit24/",
    },
    {
      id: 2,
      title: "Próximo Evento",
      src: "/images/events/LaVaki.svg",
      srcMobile: "/images/events/LaVaki.webp",
      Link: "https://vaki.co/es/vaki/Oz8xpMtjZTxmk1b25kYJ",
    },
  ];

  return (
    <section className="bg-complementary-300 mb-12 ">
      <Slider images={images} />
    </section>
  );
};

export default Events;
