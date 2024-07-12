"use client";
import React from "react";
import { useState } from "react";

const NewsletterCard = ({ image, title, readTime, index }) => {
  const [isOvered, setIsOvered] = useState(false);

  return (
    <div
      className={`relative w-full h-[400px] rounded-md overflow-hidden`}
      onMouseEnter={() => setIsOvered(true)}
      onMouseLeave={() => setIsOvered(false)}
    >
      <div
        className={`w-full h-full bg-cover bg-center ${
          isOvered ? "scale-110 grayscale-[5%]" : "scale-105 grayscale-[75%]"
        } transition-all duration-500`}
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      <div className="flex flex-col p-5 absolute bottom-0 gap-2 font-bold bg-black/30 w-full backdrop-blur-sm text-white">
        <span className="font-bold text-2xl tracking-wide">{title}</span>

        <span className="self-end font-light">{readTime}</span>
      </div>
    </div>
  );
};

export default NewsletterCard;
