import React from "react";

const NewsletterCard = ({ image, title, readTime, index }) => {
  return (
    <div className={`relative w-full h-[400px] rounded-md overflow-hidden`}>
      <div
        className={`w-full h-full bg-cover bg-center scale-105 hover:scale-110 hover:grayscale-[5%] transition-all duration-500 grayscale-[75%]`}
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      <div className="flex flex-col p-5 absolute bottom-0 gap-2 font-bold bg-black/30 w-full backdrop-blur-sm">
        <span className="font-bold text-2xl tracking-wide">{title}</span>

        <span className="self-end font-light">{readTime}</span>
      </div>
    </div>
  );
};

export default NewsletterCard;
