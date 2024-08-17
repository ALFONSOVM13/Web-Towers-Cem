import React, { useState, useEffect } from "react";
import Image from "next/image";

const Slider = ({ images }) => {
  const [currentId, setCurrentId] = useState(images[0].id);
  const [intervalId, setIntervalId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCircleClick = () => {
    // Avanza a la siguiente imagen
    setCurrentId((prevId) => {
      const currentIndex = images.findIndex((image) => image.id === prevId);
      const nextIndex = (currentIndex + 1) % images.length;
      return images[nextIndex].id;
    });
  
    // Limpia el intervalo anterior y crea uno nuevo
    if (intervalId) {
      clearInterval(intervalId);
    }
  
    const newIntervalId = setInterval(() => {
      setCurrentId((prevId) => {
        const currentIndex = images.findIndex((image) => image.id === prevId);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex].id;
      });
    }, 5000);
  
    setIntervalId(newIntervalId);
  };
  
  useEffect(() => {
    const newIntervalId = setInterval(() => {
      setCurrentId((prevId) => {
        const currentIndex = images.findIndex((image) => image.id === prevId);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex].id;
      });
    }, 5000); // Cambia la imagen cada 5 segundos
  
    setIntervalId(newIntervalId);
  
    return () => clearInterval(newIntervalId); // Limpia el intervalo al desmontar el componente
  }, [images]);

  const currentIndex = images.findIndex((image) => image.id === currentId);

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
              className="object-co object-center"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((image) => (
          <button
            key={image.id}
            className={`w-3 h-3 rounded-full ${
              image.id === currentId ? "bg-secondary-200" : "bg-complementary-200"
            }`}
            onClick={() => handleCircleClick(image.id)}
          />
        ))}
      </div>
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
      src: "/images/events/LaVaki.webp",
      srcMobile: "/images/events/LaVakiMobile.svg",
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
