import React from "react";
import ServiceCard from "./ServiceCard";
import Title from "../ui/Title";

const servicesData = [
  {
    title: "Asesoría Técnica",
    description: "Ver mas",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4f3355d8af4788908370cc1a4256aea97d3f0f4c9b9f4647c0182317098ef1ad?apiKey=88a378e8dc3e4713ab9f36f873f0b43d&&apiKey=88a378e8dc3e4713ab9f36f873f0b43d",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/00a6691f7f262760fbe87c5491ba897ed9d3a6f19754f733b345938dab503343?apiKey=88a378e8dc3e4713ab9f36f873f0b43d&&apiKey=88a378e8dc3e4713ab9f36f873f0b43d",
    bgColor: "bg-complementary-400",
    textColor: "text-black",
  },
  {
    title: "Roadmap",
    description: "Ver mas",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/04e673669fce52611b700ddb794c24f8f1dac956828d01050505750d3e30fcf1?apiKey=88a378e8dc3e4713ab9f36f873f0b43d&&apiKey=88a378e8dc3e4713ab9f36f873f0b43d",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3b6b699a3fc0f60a85e8a6eb92e3228c3df5546790b297f4b3309d4e3d66fd17?apiKey=88a378e8dc3e4713ab9f36f873f0b43d&&apiKey=88a378e8dc3e4713ab9f36f873f0b43d",
    bgColor: "bg-secondary-300",
    textColor: "text-black",
  },
  {
    title: "Pruebas",
    description: "Ver mas",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1e505695e1ae79d74ad485b06b9e2dc0893f99cf6f337b6b65e852f07753c40d?apiKey=88a378e8dc3e4713ab9f36f873f0b43d&&apiKey=88a378e8dc3e4713ab9f36f873f0b43d",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dc984718d117e528727e3096c116d621475c78df6de7fcf3ba19e255027fa9d8?apiKey=88a378e8dc3e4713ab9f36f873f0b43d&&apiKey=88a378e8dc3e4713ab9f36f873f0b43d",
    bgColor: "bg-primary-300",
    textColor: "text-white",
  },
  {
    title: "Nuestros Proyectos",
    description: "Ver mas",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c46a291615c507764661f3a809dd74aba70a7e2b90b09cc0ceaf168f7527e249?apiKey=88a378e8dc3e4713ab9f36f873f0b43d&&apiKey=88a378e8dc3e4713ab9f36f873f0b43d",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/83e3b671a0bdfe3f413fd8ded4c20655272e9e2f230d2b6189d58afe692752e3?apiKey=88a378e8dc3e4713ab9f36f873f0b43d&&apiKey=88a378e8dc3e4713ab9f36f873f0b43d",
    bgColor: "bg-complementary-300",
    textColor: "text-white",
  },
];

const ServicesSection = () => {
  return (
    <>
      <div className="flex justify-between  mx-4 sm:mx-20 mt-12 sm:my-8">
        <Title
          text="Conoce más"
          className="text-left text-3xl md:text-4xl xl:text-5xl"
        />
      </div>
      <section className="flex flex-col items-center px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-24">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
