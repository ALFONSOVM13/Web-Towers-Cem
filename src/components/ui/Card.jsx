import Image from "next/image";
import React from "react";

const Card2 = ({ title, bgImage, isHovered }) => {
  return (
    <div className={`relative overflow-hidden w- h-40 rounded-2xl cursor-pointer text-2xl font-bold bg-primary-100 mb-6 shadow-lg ${isHovered? 'text-3xl' : ''}`}>
      <div className="z-10 absolute w-full h-full peer"></div>
      <div className="absolute peer-hover:-top-24 peer-hover:-left-20 peer-hover:w-[160%] peer-hover:h-[320%] -top-64 -left-20 w-48 h-56 rounded-full bg-primary-100 transition-all duration-500"></div>
      <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-64 -right-20 w-48 h-56 rounded-full bg-primary-100 transition-all duration-500">
        <p className="peer-hover:text-white text-complementary-200 peer-hover:font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacus erat, ornare vitae lacinia quis</p>
      </div>
      <div className="w-full h-full items-center justify-center flex uppercase relative">
      
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <Image
          className="object-cover"
          src={bgImage}
          width={1200} 
          height={300} 
          alt="Planet"
        />
      
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <span className={`${isHovered? 'text-3xl' : 'text-lg'} font-semibold`}>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Card2;