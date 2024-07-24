import React, { useCallback, useRef } from "react";
import Image from "next/image";
import Title from "../ui/Title";
import CustomButton from "../ui/CustomButton";
import SliderButton from "../ui/SliderButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import H3 from "../ui/H3";

const products = [
  {
    id: 1,
    image: "/images/products/cemento.png",
    title: "X-CEM",
    subtitle: "USO GENERAL",
    description:
      "Nuestro cemento X-Cem utiliza tecnología avanzada para proporcionar altos niveles de durabilidad y sostenibilidad. Descubre cómo X-Cem puede transformar tus proyectos de construcción.",
  },
  {
    id: 2,
    image: "/images/products/1TC_PACK_BLANCO_FRONTAL.png",
    title: "X-CEM",
    subtitle: "USO ESTRUCTURAL",
    fichaTecnica: "/files/FICHA_TECNICA.pdf",
    description:
      "Revolucionamos los estándares de la construcción, minimizamos el impacto en el ecosistema y maximizamos la eficiencia de los recursos. Cada tonelada (t) de cemento X-cem remueve hasta 173.35 Kg de CO2 de la atmósfera.",
  },
  {
    id: 3,
    image: "/images/bolsa-marron.png",
    title: "X-CEM",
    subtitle: "USO ESTRUCTURAL",
    description:
      "Revolucionamos los estándares de la construcción, minimizamos el impacto en el ecosistema y maximizamos la eficiencia de los recursos. Cada tonelada (t) de cemento X-cem remueve hasta 173.35 Kg de CO2 de la atmósfera.",
  },
];

const Products = () => {
  const mainSliderRef = useRef(null);

  const handleSlidePrev = useCallback(() => {
    if (mainSliderRef.current) {
      mainSliderRef.current.swiper.slidePrev();
    }
  }, []);

  const handleSlideNext = useCallback(() => {
    if (mainSliderRef.current) {
      mainSliderRef.current.swiper.slideNext();
    }
  }, []);

  return (
    <section className="bg-complementary-200">
      <Swiper
        pagination={true}
        loop={true}
        ref={mainSliderRef}
        effect={"fade"}
        modules={[FreeMode, EffectFade]}
        className="h-full cursor-grab active:cursor-grabbing"
      >
        {products.map((product) => (
          <SwiperSlide className="bg-complementary-200" key={product.id}>
            <div className="flex flex-col md:flex-col p-6 md:p-14 justify-center items-center min-h-screen">
              <Title
                text="Nuestros Productos"
                className="text-primary-100 text-center my-10"
              />

              <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center">
                <div className="flex flex-col flex-2 md:ml-10 items-center md:items-center gap-4">
                  <figure className="min-h-[400px] h-[400px]">
                    <Image
                      src={product.image}
                      width={400}
                      height={400}
                      alt="Cemento uso general"
                      className="object-cover object-center h-full animate-fade"
                    />
                  </figure>
                  <SliderButton
                    onClickLeft={handleSlidePrev}
                    onClickRight={handleSlideNext}
                    className="left-4 top-1/2 transform -translate-y-1/2"
                  />
                </div>
                <div className="flex flex-col space-y-8 flex-1 mt-10 md:mt-0 items-center md:items-start text-center md:text-left">
                  <Title
                    text={product.title}
                    className="font-title font-bold text-primary-100"
                    size="large"
                  />
                  <H3
                    text={product.subtitle}
                    className="font-title font-bold"
                  />
                  <p className="text-complementary-300 font-title text-xl px-4 md:px-0 animate-fade-down text-justify">
                    {product.description}
                  </p>

                  <div className="flex flex-col lg:flex-row gap-6 mt-10">
                    <CustomButton
                      type="primary"
                      onClick={() => {}}
                      className="rounded-2xl"
                    >
                      <a
                        href={product.fichaTecnica}
                        target="_blank"
                        title="Ver ficha"
                        rel="noopener noreferrer"
                      >
                        VER FICHA TECNICA
                      </a>
                    </CustomButton>
                    <CustomButton
                      type="secundary"
                      onClick={() => {}}
                      className="rounded-2xl"
                    >
                      SOLICITAR MUESTRAS
                    </CustomButton>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Products;
