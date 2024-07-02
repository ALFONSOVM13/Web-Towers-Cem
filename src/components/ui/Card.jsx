import Image from "next/image";
import React from "react";

const Card2 = ({ title, bgImage }) => {
  return (
    <div className="relative overflow-hidden w-60 h-28 rounded-2xl cursor-pointer text-2xl font-bold bg-primary-100">
      <div className="z-10 absolute w-full h-full peer"></div>
      <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[240%] -top-48 -left-16 w-32 h-44 rounded-full bg-primary-100 transition-all duration-500"></div>
      <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-48 -right-16 w-36 h-44 rounded-full bg-primary-100 transition-all duration-500">
        <p className="peer-hover:text-white text-complementary-200 peer-hover:font-bold">{title}</p>
      </div>
      <div className="w-full h-full items-center justify-center flex uppercase">
        <Image
          className="object-cover"
          src={bgImage}
          width={600}
          height={200}
          alt="Planet"
        />
      </div>
    </div>
  );
};

export default Card2;
