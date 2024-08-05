import React from "react";
import ServiceCard from "./ServiceCard";
import Title from "../ui/Title";

const servicesData = [
  {
    title: "Asesoría Técnica",
    description: "Ver más",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4f3355d8af4788908370cc1a4256aea97d3f0f4c9b9f4647c0182317098ef1ad?apiKey=88a378e8dc3e4713ab9f36f873f0b43d&&apiKey=88a378e8dc3e4713ab9f36f873f0b43d",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/00a6691f7f262760fbe87c5491ba897ed9d3a6f19754f733b345938dab503343?apiKey=88a378e8dc3e4713ab9f36f873f0b43d&&apiKey=88a378e8dc3e4713ab9f36f873f0b43d",
    bgColor: "bg-complementary-400",
    textColor: "text-black",
    link: "https://calendly.com/miley-velasquez/reunion-towers-cem?month=2024-07",
  },
  {
    title: "Roadmap          ",
    description: "Ver más",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/04e673669fce52611b700ddb794c24f8f1dac956828d01050505750d3e30fcf1?apiKey=88a378e8dc3e4713ab9f36f873f0b43d&&apiKey=88a378e8dc3e4713ab9f36f873f0b43d",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3b6b699a3fc0f60a85e8a6eb92e3228c3df5546790b297f4b3309d4e3d66fd17?apiKey=88a378e8dc3e4713ab9f36f873f0b43d&&apiKey=88a378e8dc3e4713ab9f36f873f0b43d",
    bgColor: "bg-secondary-300",
    textColor: "text-black",
    link: "/historia"
  },
  {
    title: "Pruebas",
    description: "Ver más",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1e505695e1ae79d74ad485b06b9e2dc0893f99cf6f337b6b65e852f07753c40d?apiKey=88a378e8dc3e4713ab9f36f873f0b43d&&apiKey=88a378e8dc3e4713ab9f36f873f0b43d",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dc984718d117e528727e3096c116d621475c78df6de7fcf3ba19e255027fa9d8?apiKey=88a378e8dc3e4713ab9f36f873f0b43d&&apiKey=88a378e8dc3e4713ab9f36f873f0b43d",
    bgColor: "bg-primary-300",
    textColor: "text-white",
    link: "/pruebas",
  },
  {
    title: "Nuestros Proyectos",
    description: "Ver más",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c46a291615c507764661f3a809dd74aba70a7e2b90b09cc0ceaf168f7527e249?apiKey=88a378e8dc3e4713ab9f36f873f0b43d&&apiKey=88a378e8dc3e4713ab9f36f873f0b43d",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83e3b671a0bdfe3f413fd8ded4c20655272e9e2f230d2b6189d58afe692752e3?apiKey=88a378e8dc3e4713ab9f36f873f0b43d&&apiKey=88a378e8dc3e4713ab9f36f873f0b43d",
    bgColor: "bg-complementary-300",
    textColor: "text-white",
    link: "/proyectos",
  },
];

const ServicesSection = () => {
  return (
    <div className="mx-12 sm:mx-20 mb-12">
      <div className="flex justify-between my-4 mb-8 sm:my-12">
        <Title
          text="Más sobre nosotros"
          className="text-left text-3xl md:text-4xl xl:text-5xl"
        />
      </div>
      <section className="flex flex-col w-full ">
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 sm:gap-8 ">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
