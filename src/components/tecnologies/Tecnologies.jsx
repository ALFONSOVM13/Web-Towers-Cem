import React, { useState } from "react";
import Image from "next/image";
import Title from "../ui/Title";

const Tecnologies = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const menuItems = ["Roadmap", "News", "Nuestros Proyectos", "Pruebas"];

  return (
    <div className="flex flex-col md:flex-row min-h-screen text-white relative"style={{backgroundImage:"url(/images/hero-background.jpg)", backgroundSize:"cover", backgroundPosition:"center"}}>
      {/* <Image
        src=""
        alt="Fondo Tecnologías"
        layout="fill" 
        object-Fit="cover" 
        className="absolute z-0 object-fill" 
      /> */}
      <div className="absolute z-10 w-full h-full bg-black opacity-70"></div>
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center z-10">
        <div className="md:w-2/3 p-0 sm:p-0 md:p-9 xl:p-9">
          <Title
            text="Nuestra Tecnología"
            className="font-title font-bold text-complementary-200 text-3xl md:text-4xl mt-5"
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
              <p className="text-complementary-300 font-title text-xl px-0 md:px-0 text-justify">
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
        <div className="md:w-1/3 w-full p-8">
          <Title
            text="Más sobre TC"
            className="font-title font-bold text-complementary-200 text-xl md:!text-4xl"
          />
          <ul className="space-y-4 mt-6 text-lg md:text-xl">
            {menuItems.map((item, index) => (
              <li
                key={item}
                onClick={() => setActiveIndex(index)}
                className={`
              relative cursor-pointer
              after:content-[''] 
              after:absolute 
              after:left-0 
              after:bottom-0 
              after:w-full 
              after:h-px 
              after:bg-gray-300 
              hover:after:bg-gray-400 
              ${
                activeIndex === index
                  ? "text-gray-300"
                  : "hover:text-slate-100 hover:font-bold"
              }
            `}
              >
                <span
                  className={`
                before:absolute 
                before:right-[2px] 
                before:font-bold 
                before:text-2xl 
                ${
                  activeIndex === index
                    ? "before:text-white"
                    : "before:text-transparent"
                }
              `}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tecnologies;
