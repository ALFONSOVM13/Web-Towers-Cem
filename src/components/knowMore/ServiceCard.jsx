import React from 'react';

const ServiceCard = ({ title, description, iconSrc, imageSrc, bgColor, textColor }) => {
  return (
    <div className={`flex flex-col md:flex-row overflow-hidden gap-5 items-center p-6 md:p-12 shadow-sm ${bgColor} h-auto w-full md:w-[575px] rounded-[45px]`}>
      <div className="flex flex-col justify-center md:w-1/2 w-full">
        <div className={`flex flex-col text-3xl font-title font-bold ${textColor} whitespace-nowrap`}>
          {title.split(' ').map((word, index) => (
            <div key={index} className="px-2 rounded-lg">{word}</div>
          ))}
        </div>
        <div className={`flex gap-4 items-center mt-10 text-xl leading-snug ${textColor}`}>
          <img loading="lazy" src={iconSrc} alt="" className="object-contain w-[41px]" />
          <div>{description}</div>
        </div>
      </div>
      <div className="flex justify-center md:w-1/2 w-full">
        <img loading="lazy" src={imageSrc} alt="" className="object-contain h-full w-full md:max-w-[210px]" />
      </div>
    </div>
  );
};

export default ServiceCard;
