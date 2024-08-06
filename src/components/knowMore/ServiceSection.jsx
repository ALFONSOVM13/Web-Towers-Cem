import React from "react";
import ServiceCard from "./ServiceCard";
import Title from "../ui/Title";

const servicesData = [
  {
    title: "Asesoría Técnica",
    description: "Ver más",
    imageSrc: "/images/icons/asesoria.png",
    bgColor: "bg-complementary-300",
    textColor: "text-white",
    link: "https://calendly.com/miley-velasquez/reunion-towers-cem?month=2024-07",
  },
  {
    title: "Roadmap          ",
    description: "Ver más",
    imageSrc: "/images/icons/roadmap.png",
    bgColor: "bg-secondary-300",
    textColor: "text-white",
    link: "/historia",
  },
  {
    title: "Pruebas",
    description: "Ver más",
    imageSrc: "/images/icons/pruebas.png",
    bgColor: "bg-primary-300",
    textColor: "text-white",
    link: "/pruebas",
  },
  {
    title: "Nuestros Proyectos",
    description: "proyectos de Towers Cem",
    imageSrc: "/images/icons/proyectos.png",
    bgColor: "bg-complementary-300",
    textColor: "text-white",
    link: "/proyectos",
  },
];

const ServicesSection = () => {
  return (
    <div className="mx-12 sm:mx-20 mb-12">
      <div className="flex justify-between my-4 mb-8 sm:my-8">
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
