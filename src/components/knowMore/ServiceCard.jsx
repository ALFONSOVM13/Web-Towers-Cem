import React from "react";

const ServiceCard = ({
  title,
  iconSrc,
  imageSrc,
  bgColor,
  textColor,
  link,
}) => {
  return (
    <div
      className="relative flex justify-center p-4 cursor-pointer"
      onClick={() => (window.location.href = link)}
    >
      <div
        className={`relative flex flex-col md:flex-row w-full max-w-[400px] sm:max-w-[500px] md:max-w-[700px] h-auto p-4 ${bgColor} ${textColor} rounded-3xl transition-transform transform hover:scale-105 items-center md:items-stretch`}
        style={{
          boxShadow: "inset 0px -4px 0px 1.6px rgba(0, 0, 0, 1)",
        }}
      >
        <div className="flex flex-col w-full md:w-1/2 mb-4 md:mb-0 ml-6 mt-4 ">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center md:text-left">
            {title}
          </h2>
          <div className="flex-grow"></div>
          <button className="hidden md:flex items-center mb-2">
            <img src={iconSrc} alt="icon" className="w-8 h-8 sm:w-12 sm:h-12 mr-2" />
            <p className="text-xl font-medium">Ver más</p>
          </button>
        </div>
        <div className="w-full md:w-1/2 flex-shrink-0 mb-4 md:mb-0">
          <img
            src={imageSrc}
            alt="service"
            className="w-full h-auto object-cover rounded-lg shadow-sm transition-transform transform hover:scale-105"
          />
        </div>
        {/* Botón "Ver más" para dispositivos móviles */}
        <button className="flex md:hidden items-center mt-auto">
          <img src={iconSrc} alt="icon" className="w-8 h-8 sm:w-12 sm:h-12 mr-2" />
          <p className="text-xl font-medium">Ver más</p>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
