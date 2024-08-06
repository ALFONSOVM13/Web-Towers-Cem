import React from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const ServiceCard = ({
  title,
  imageSrc,
  bgColor,
  textColor,
  link,
}) => {
  return (
    <div className="relative flex justify-center w-full">
      <div
        className={`relative flex flex-col md:flex-row w-full max-w-[300px] sm:max-w-[300px] md:max-w-[600px] h-auto ${bgColor} ${textColor} rounded-sm transition-transform transform hover:scale-105 items-center md:items-stretch cursor-pointer`}
        onClick={() => (window.location.href = link)}
        // style={{
        //   boxShadow: "inset 0px -4px 0px 1.6px rgba(0, 0, 0, 1)",
        // }}
      >
        <div className="flex flex-col w-full md:w-1/2 mb-4 md:mb-0 ml-6 mt-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center md:text-left">
            {title}
          </h2>
          <div className="flex-grow"></div>
          <button className="hidden md:flex items-center mb-8 ">
            <BsFillArrowUpRightCircleFill className="w-12 h-12 mr-2" />
            <p className="text-xl font-medium">Ver más</p>
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={imageSrc}
            alt="service"
            className="w-10/12 p-8 h-auto object-cover rounded-lg shadow-sm transition-transform transform hover:scale-105"
          />
        </div>
        {/* Botón "Ver más" para dispositivos móviles */}
        <button className="flex md:hidden items-center mb-4">
          <BsFillArrowUpRightCircleFill 
            className="w-8 h-8 sm:w-12 sm:h-12 mr-2"
           />
          <p className="text-xl font-medium">Ver más</p>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
