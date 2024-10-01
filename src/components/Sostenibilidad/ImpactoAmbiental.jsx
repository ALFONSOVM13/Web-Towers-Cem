"use client"; // Asegúrate de que esto esté en la primera línea del archivo

import Image from "next/image";
import { useState } from "react";
import { PiMouseSimple } from "react-icons/pi";

export default function ImpactoAmbiental() {
  const [showMore, setShowMore] = useState({}); // Estado para controlar "Ver más" para cada sección

  const sections = [
    {
      id: "01",
      subtitle: "COMO EMPEZAMOS",
      title: "La sostenibilidad es nuestra misión",
      description: `En Towers Cem, nos dedicamos a innovar en la industria del cemento, creando productos que no solo cumplen con las más altas normas de calidad, sino que también minimizan el impacto ambiental. Nuestro cemento fotocatalítico ayuda a reducir la contaminación del aire al descomponer los contaminantes atmosféricos cuando se expone a la luz solar. Además, utilizamos materiales reciclados en nuestros procesos de producción y buscamos constantemente nuevas formas de reducir nuestra huella de carbono.`,
      imageSrc: "/images/sostenibilidad/section1.jpg",
      altText: "Sostenibilidad",
      backgroundColor: "bg-black",
      textColor: "text-white",
      numberColor: "text-white",
    },
    {
      id: "02",
      subtitle: "NUESTRO COMPROMISO",
      title: "Le apostamos a los Objetivos de Desarrollo Sostenible (ODS)",
      description: `Nos comprometemos con los Objetivos de Desarrollo Sostenible de la ONU:`,
      list: [
        "ODS 9 (Industria, Innovación e Infraestructura)",
        "ODS 11 (Ciudades y Comunidades Sostenibles)",
        "ODS 13 (Acción por el Clima)",
        "ODS 9: Fomentamos la innovación en la industria del cemento, desarrollando productos que mejoran la infraestructura y son más sostenibles.",
        "ODS 11: Contribuimos a la creación de ciudades y comunidades más sostenibles mediante la reducción de la contaminación y la mejora de la calidad del aire.",
        "ODS 13: Actuamos contra el cambio climático mediante la reducción de nuestra huella de carbono y la promoción de tecnologías que limpian el aire.",
      ],
      imageSrc: "/images/sostenibilidad/section2.jpg",
      altText: "Objetivos de Desarrollo Sostenible",
      backgroundColor: "bg-complementary-300",
      textColor: "text-white",
      numberColor: "text-white",
    },
    {
      id: "03",
      subtitle: "CERTIFICACIONES AMBIENTALES",
      title: "En proceso de certificaciones LEED y Casa Colombia",
      description: `Estamos trabajando arduamente para obtener las certificaciones LEED (Liderazgo en Energía y Diseño Ambiental) y Casa Colombia, que reconocen a los edificios y productos que cumplen con altos estándares de eficiencia energética y sostenibilidad.`,
      imageSrc: "/images/sostenibilidad/section3.jpg",
      altText: "Certificaciones",
      backgroundColor: "bg-black",
      textColor: "text-white",
      numberColor: "text-white",
    },
  ];

  const toggleShowMore = (id) => {
    setShowMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Alterna el estado de la sección específica
    }));
  };

  return (
    <div className="relative w-full h-full">
      {/* Header Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/images/sostenibilidad/hero.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-4 sm:px-6">
          <h2 className="text-md font-title md:text-2xl text-left uppercase tracking-widest font-semibold text-white relative z-10 flex items-center">
            <span className="block w-12 h-[2px] bg-white mr-4"></span>
            IMPACTO AMBIENTAL
          </h2>
          <h1 className="text-white font-title text-3xl md:text-5xl font-bold">
            Estamos Comprometidos Con El Medio Ambiente
          </h1>
        </div>
        <div className="absolute bottom-10 flex justify-center w-full">
          <button
            className="group mt-2 animate-bounce animate-infinite animate-ease-in-out"
            aria-label="Scroll down"
          >
            <PiMouseSimple className="text-complementary-100 text-5xl group-hover:text-secondary-200 transition duration-300" />
          </button>
        </div>
      </section>

      {/* Dynamic Sections */}
      {sections.map((section, index) => (
        <section
          key={index}
          className={`relative flex flex-col md:flex-row ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          } items-center justify-center py-12 md:py-16 ${
            section.backgroundColor
          } ${section.textColor}`}
        >
          <div className="relative md:w-1/2 px-12 sm:px-6 md:px-8 max-w-screen-md mx-auto">
            <div
              className={`absolute text-[5rem] md:text-[10rem] font-bold ${section.numberColor} opacity-30 z-10 top-[-100px] md:top-[-150px] left-10`}
            >
              {section.id}
            </div>
            <h3 className=" font-title text-sm md:text-base uppercase tracking-widest font-semibold text-[#759c32] relative z-10 flex items-center">
              <span className="block w-12 h-[2px] bg-[#759c32] mr-4"></span>
              {section.subtitle}
            </h3>

            <h2 className="text-2xl font-title md:text-3xl font-bold relative z-10">
              {section.title}
            </h2>
            <p className="mt-4 font-title text-sm md:text-base">
              {section.description}
            </p>
            {section.list && (
              <ul className="mt-4 font-title list-none text-sm md:text-base space-y-3">
                {/* Muestra solo las primeras 3 entradas o toda la lista si se pulsa "Ver más" */}
                {section.list
                  .slice(0, showMore[section.id] ? section.list.length : 3)
                  .map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      {/* Ícono de lista personalizado */}
                      <span className="flex-shrink-0 text-[#759c32]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                        >
                          <path d="M10 18l-6-6 1.41-1.41L10 15.17l8.59-8.58L20 8l-10 10z" />
                        </svg>
                      </span>
                      <span className="text-white">{item}</span>
                    </li>
                  ))}
              </ul>
            )}

            {/* Mostrar el botón "Ver más" solo si hay más de 3 elementos en la lista */}
            {section.list && section.list.length > 3 && (
              <button
                onClick={() => toggleShowMore(section.id)}
                className="mt-4 text-[#759c32] underline"
              >
                {showMore[section.id] ? "Ver menos" : "Ver más"}
              </button>
            )}
          </div>
          <div className="w-full px-12 sm:px-6 md:px-8 mt-8 md:mt-0 max-w-full sm:max-w-lg md:max-w-xl mx-auto">
            <Image
              src={section.imageSrc}
              width={1100}
              height={1100}
              className="w-full h-auto object-cover"
              alt={section.altText}
            />
          </div>
        </section>
      ))}
    </div>
  );
}
