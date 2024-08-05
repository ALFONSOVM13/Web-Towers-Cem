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
      className="relative flex justify-center items-center p-4 cursor-pointer"
      onClick={() => (window.location.href = link)}
    >
      <div
        className={`relative flex flex-col md:flex-row w-full max-w-[400px] sm:max-w-[500px] h-auto p-4 ${bgColor} ${textColor} rounded-3xl transition-transform transform hover:scale-105`}
        style={{
          boxShadow: "inset 0px -4px 0px 1.6px rgba(0, 0, 0, 1)",
        }}
      >
        <div className="flex flex-row sm:flex-col w-full md:w-3/5 mb-4 md:mb-0 p-6">
          <h2 className="text-3xl md:text-3xl font-semibold mb-2 w-1/3">
            {title}
          </h2>
          <div className="flex-grow"></div>
          <button className="flex items-center mb-2">
            <img src={iconSrc} alt="icon" className="w-12 h-12 mr-2" />
            <p className="text-xl font-medium">Ver más</p>
          </button>
        </div>
        <div className="w-full md:w-3/5 flex-shrink-0">
          <img
            src={imageSrc}
            alt="service"
            className="w-full h-auto object-cover rounded-lg shadow-sm transition-transform transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
