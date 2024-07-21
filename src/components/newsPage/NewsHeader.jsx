import React from "react";

function NewsHeader({ title, className = "" }) {
  return (
    <header
      className={`flex gap-5 justify-between text-zinc-900 max-md:flex-wrap max-md:max-w-full ${className}`}
    >
      <h1 className="text-6xl font-normal tracking-wide leading-[68.2px] max-md:text-4xl text-white">
        {title}
      </h1>
    </header>
  );
}

export default NewsHeader;
