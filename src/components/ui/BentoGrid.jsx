import React from "react";
import "./BentoGrid.scss";
import Image from "next/image";
import { FiArrowRightCircle } from "react-icons/fi";

const BentoGrid = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid gap-6 p-2 grid-cols-4 grid-rows-4 bg-white w-[1440px] h-[80%]">
        <div className="relative sm:col-span-1 sm:row-span-1 bg-complementary-400 rounded-lg shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer">
          <div className="absolute top-[-40%] left-0 right-0 flex justify-center items-center">
            <Image
              src="/logo3.svg"
              alt="Logo de Towers Cem"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
          <p className="text-complementary-300 font-title p-6 mt-12 text-2xl sm:text-3xl !lg:text-3xl text-center">
            Towers Cem
          </p>
        </div>

        <div className="relative col-span-8 sm:col-span-1 sm:row-span-2 bg-primary-100 rounded-lg shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer">
          <h2 className="font-title font-bold text-center text-3xl md:text-4xl xl:text-6xl text-complementary-200">
            RoadMap
          </h2>
          <Image
            src="/images/plus-svgrepo-com.svg"
            height={50}
            width={50}
            alt="Icono de más"
            className="absolute top-5 right-5"
          />
        </div>

        <div className="relative col-span-8 sm:col-span-1 sm:row-span-2 bg-complementary-400 rounded-lg shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer">
          <h2 className="font-title font-bold text-center text-3xl md:text-4xl xl:text-6xl text-primary-100">
            Pruebas
          </h2>
          <Image
            src="/images/icons/plus-blue.svg"
            height={50}
            width={50}
            alt="Icono de más"
            className="absolute top-5 right-5"
          />
        </div>

        <div className="relative col-span-8 sm:col-span-1 sn:row-span-1 bg-primary-100 rounded-lg shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer">
          <h2 className="font-title font-bold text-center text-3xl md:text-4xl xl:text-4xl text-complementary-200">
            Mas sobre <br /> Nosotros
          </h2>
          <Image
            src="/images/plus-svgrepo-com.svg"
            height={50}
            width={50}
            alt="Icono de más"
            className="absolute top-5 right-5"
          />
        </div>

        <div className="relative col-span-6 sm:col-span-1 sm:row-span-4 bg-secondary-200 rounded-lg shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer">
          <div className="flex items-left flex-col gap-6">
            <h2 className="font-title font-bold text-center text-3xl md:text-4xl xl:text-6xl text-complementary-200">
              Asesoria <br />
              <span className="font-bold">Tecnica</span>
            </h2>
            <FiArrowRightCircle className="text-6xl text-complementary-200" />
          </div>
          <Image
            src="/images/plus-svgrepo-com.svg"
            height={50}
            width={50}
            alt="Icono de más"
            className="absolute top-5 right-5"
          />
        </div>

        <div
          className="relative col-span-6 sm:col-span-1 sm:row-span-4 rounded-lg shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer"
          style={{
            backgroundImage: "url(/images/BG.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%)",
          }}
        >
          <div className="absolute inset-0 bg-gray-300 bg-opacity-50"></div>
          <h2 className="absolute font-title font-bold text-center text-3xl md:text-4xl xl:text-6xl text-complementary-200 bottom-4 left-1/2 transform -translate-x-1/2 z-10">
            Nuestros <br />
            <span className="font-bold font-title text-2xl md:text-3xl xl:text-6xl text-slate-900">
              Proyectos
            </span>
          </h2>
          <Image
            src="/images/plus-svgrepo-com.svg"
            height={50}
            width={50}
            alt="Icono de más"
            className="absolute top-5 right-5 z-10"
          />
        </div>

        <div className="relative col-span-1 row-span-2 bg-complementary-400 rounded-lg shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer">
          <h2>
            <span className="font-title font-bold text-center text-3xl md:text-4xl xl:text-5xl text-primary-100">
              Newsletters
            </span>
          </h2>
          <Image
            src="/images/icons/plus-blue.svg"
            height={50}
            width={50}
            alt="Icono de más"
            className="absolute top-5 right-5"
          />
        </div>

        <div className="relative col-span-1 row-span-2 bg-secondary-200 rounded-lg shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer">
          <h2 className="font-title font-bold text-center text-3xl md:text-4xl xl:text-6xl text-complementary-200">
            FAQs
          </h2>
          <Image
            src="/images/plus-svgrepo-com.svg"
            height={50}
            width={50}
            alt="Icono de más"
            className="absolute top-5 right-5"
          />
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
