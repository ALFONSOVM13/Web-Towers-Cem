import React from "react";
import Image from "next/image";

const Banner = ({ title, src, width, height }) => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-7 p-4 cursor-pointer"
      onClick={() => window.open("https://mentex.co/summit24/", "_blank")}
    >
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-0 text-center md:text-left">
        {title}
      </h1>
      <Image
        src={src}
        alt={title}
        width={width}
        height={height}
        className="object-contain object-center w-full md:w-auto max-w-full"
      />
    </div>
  );
};

const Events = () => {
  return (
    <section className="bg-complementary-300 mb-12 p-4">
      <Banner
        title="Estaremos en"
        src="/images/events/GeneraSummit.png"
        width={600}
        height={400}
      />
    </section>
  );
};

export default Events;
