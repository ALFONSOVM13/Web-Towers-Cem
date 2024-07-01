import React, { useState } from 'react';
import Image from 'next/image';

const Card = ({ title, bgImage }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-4 overflow-hidden hover:shadow-lg cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Imagen de fondo */}
      <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden transition-opacity duration-300 ease-in-out">
        <Image
          src={bgImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={75}
          className="opacity-100 filter brightness-50 hover:opacity-85 transition-opacity duration-300 ease-in-out"
        />
      </div>

      <div className="relative z-10 text-center">
        <h3 className="text-lg font-bold text-complementary-200 mb-2">
          {hovered ? 'IR A' : title}
        </h3>
      </div>
    </div>
  );
};

export default Card;
