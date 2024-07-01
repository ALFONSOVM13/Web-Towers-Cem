import React, { useState } from "react";
import Image from "next/image";
import Title from "../ui/Title";

const Tecnologies = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const menuItems = [
    "Equipo",
    "Que Productos Tenemos",
    "Impacto Ambiental",
    "Pruebas"
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-b from-complementary-300 to-primary-100 text-white">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/3 p-8">
          <Title
            text="MAS SOBRE NOSOTROS"
            className="font-title font-bold text-complementary-200 text-2xl md:text-3xl"
            size="small"
          />
          <ul className="space-y-4 mt-6 text-lg md:text-xl">
            {menuItems.map((item, index) => (
              <li
                key={item}
                onClick={() => setActiveIndex(index)}
                className={`relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-gray-300 hover:after:bg-gray-400 ${
                  activeIndex === index ? "text-gray-300" : "hover:text-gray-300"
                }`}
              >
                <span
                  className={`before:content-['→'] before:absolute before:right-[2px] before:font-bold before:text-2xl ${
                    activeIndex === index ? "before:text-white" : "before:text-transparent"
                  }`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-2/3 p-9">
          <Title
            text="NUESTRA TECNOLOGIA"
            className="font-title font-bold text-complementary-200 text-3xl md:text-4xl"
            size="large"
          />
          <div className="flex flex-col gap-6 mt-6 bg-white text-black overflow-hidden">
            <Image
              src="/images/fondo-cementos.png"
              width={400}
              height={400}
              alt="Tecnologia"
              className="w-full object-cover"
            />
            <div className="p-8 text-wrap">
            <p className="text-complementary-300 font-title text-xl px-4 md:px-0 ">
              Somos una cementera innovadora dedicada a la producción de
              cementos verdes, enfocados en la sostenibilidad y la reducción
              del impacto ambiental. Utilizando tecnologías avanzadas como
              X-CEM, donde incorporamos materiales reciclados y propiedades
              inteligentes en nuestros productos, permitiendo la absorción de
              CO₂ y contribuyendo a la lucha contra el cambio climático.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tecnologies;