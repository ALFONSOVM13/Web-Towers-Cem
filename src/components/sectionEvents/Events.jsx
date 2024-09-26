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

  const handleCircleClick = (id) => {
    setCurrentId(id);
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

  const currentIndex = images.findIndex((image) => image.id === currentId);

  return (
    <div className="relative w-full overflow-hidden bg-white">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="cursor-pointer flex-shrink-0 w-full h-[300px] md:h-[400px] lg:h-[600px] flex items-center justify-center relative"
            onClick={() => window.open(image.Link, "_blank")}
          >
            <Image
              src={isMobile ? image.srcMobile : image.src}
              alt={image.title}
              title={image.title}
              width={1000}
              height={600}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((image) => (
          <button
            key={image.id}
            className={`w-4 h-4 rounded-full ${
              image.id === currentId
                ? "bg-secondary-200"
                : "bg-complementary-300"
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
      id: 2,
      title: "Próximo Evento",
      src: "/images/events/LaVaki.png",
      srcMobile: "/images/events/LaVakiMobile.svg",
      Link: "https://vaki.co/es/vaki/Oz8xpMtjZTxmk1b25kYJ",
    },
  ];

  return (
    <section className="bg-complementary-200 mb-12">
      <Slider images={images} />
    </section>
  );
};

export default Events;
