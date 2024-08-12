"use client";

import React from "react";
import Image from "next/image";

const photoTestimonial = [
  {
    id: 1,
    image: "/images/contact.png",
    title: "Card Testimonial",
    subtitle: "USO GENERAL",
    description: "arboles",
  },
];

function TestimonialCard() {
  return (
    <div className="flex flex-col w-full max-w-[536px] max-md:max-w-full">
      <figure className="relative flex flex-col justify-center items-center text-base tracking-normal">
        <div className="relative flex flex-col w-full min-h-[536px]">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={photoTestimonial[0].image}
              alt="Overlay image"
              width={536}
              height={536}
              className="object-cover w-full h-full"
            />
          </div>
          <figcaption className="relative mt-80 text-center text-white">
            <blockquote className="text-lg font-medium">
              {`"Desarrollamos cementos inteligentes y sostenibles que purifican el aire eliminando hasta un 23% de CO₂."`}
            </blockquote>
            <cite className="mt-4 block text-lg font-semibold">
              Carlos Torres
            </cite>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default TestimonialCard;
