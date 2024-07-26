import React from "react";

function SectionHeader({ title, className = "" }) {
  return (
    <header
      className={`flex flex-col max-md:flex-wrap max-md:max-w-full ${className}`}
    >
      <h1 className="text-6xl font-title tracking-wide leading-[68.2px] max-md:text-4xl font-bold text-complementary-200">
        {title}
      </h1>
      <h2 className="flex flex-col font-title text-xl text-left mt-2">
        Towers Cem y el Mundo
      </h2>
    </header>
  );
}

export default SectionHeader;
