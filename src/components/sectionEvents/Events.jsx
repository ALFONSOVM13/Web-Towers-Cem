import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay, Pagination } from 'swiper';

SwiperCore.use([Autoplay, Pagination]);

const Slider = ({ images }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div
              className="cursor-grab active:cursor-grabbing"
              onClick={() => window.open(image.Link, "_blank")}
            >
              <Image
                src={isMobile ? image.srcMobile : image.src}
                alt={image.title}
                title={image.title}
                width={1920}
                height={1080}
                className="object-contain w-full mx-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Events = () => {
  const images = [
    {
      id: 1,
      title: "Próximo Evento",
      src: "/images/events/RealEstate.png",
      srcMobile: "/images/events/RealStateMovil.jpg",
    },
    {
      id: 2,
      title: "Próximo Evento",
      src: "/images/events/LaVaki2.png",
      srcMobile: "/images/events/LaVakiMobile.png",
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
