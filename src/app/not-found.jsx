"use client";
import Button from '@/components/ui/Button';
import Image from 'next/image';
import React from 'react';

const NotFound = () => {
  const handleClick = () => {
    window.location.href = '/';
  }

  return (
    <div className="relative h-screen bg-cover bg-center">
      <Image
        src="/images/coming-soon.png"
        alt="Descripción de la imagen"
        layout="fill"
        objectFit="cover"
        priority
        className="w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-50 pb-24">
        <h1 className="text-3xl font-title font-bold text-white text-center md:text-3xl lg:text-4xl mb-4">
          ¡Estamos creando contenido valioso para ti, espéralo pronto!
        </h1>
        
        <Button className="mt-4" onClick={handleClick}>Volver al inicio</Button>
      </div>
    </div>
  );
};

export default NotFound;
