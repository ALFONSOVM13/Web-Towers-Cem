import React from "react";
import FechaPublicacion from "../FechaPublicacion";
import AutorPublicacion from "../AutorPublicacion";

const NewsletterFrame = ({ image, title, content, publishedAt, author }) => {
  return (
    <div className={`relative w-full h-[800px] overflow-hidden space-y-5`}>
      <div className="flex justify-between items-center gap-3 w-full px-3">
        <AutorPublicacion author={author} />
        <FechaPublicacion fecha={publishedAt} />
      </div>
      <div
        className={`w-full h-full bg-cover bg-center transition-all duration-500 border border-slate-200/50   rounded-md`}
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      <div className="flex flex-col p-5 absolute bottom-0 gap-2 font-normal bg-black/80 w-full backdrop-blur-sm text-white">
        <span className="font-normal text-2xl tracking-wide">{title}</span>

        <span className="self-end font-light">{content[0]}</span>
      </div>
    </div>
  );
};

export default NewsletterFrame;
