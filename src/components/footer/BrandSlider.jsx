import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const logos = [
  { src: "/51-labs.jpg", alt: "Logo 1" },
  { src: "/Cedex-logo.png", alt: "Logo 2" },
  { src: "/cleantech.png", alt: "Logo 3" },
  { src: "/collision.png", alt: "Logo 4" },
  { src: "/instituto-eduardo-torroja.png", alt: "Logo 5" },
  { src: "/Logo_uni-costa.png", alt: "Logo 6" },
  { src: "/Logo_uninorte_colombia.jpg", alt: "Logo 7" },
  { src: "/images/brands/madrid-innovation.png", alt: "Logo 8" },
  { src: "/images/brands/secot.jpg", alt: "Logo 9" },
  { src: "/images/brands/uni-nac-colombia.png", alt: "Logo 10" },
];

const BrandSlider = () => {
  const duplicatedSlides = logos.concat(logos);

  return (
    <div className="overflow-hidden w-full py-8">
      <motion.div
        className="flex"
        animate={{
          x: [0 , "-80%"],
          transition: { ease: "linear", duration: 15, repeat: Infinity },
        }}
        initial={false}
      >
        {duplicatedSlides.map((slide, index) => (
          <motion.div 
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / logos.length}%` }}
            whileHover={{ scale: 1.1 }} 
          >
            <LogoImage src={slide.src} alt={slide.alt} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const LogoImage = ({ src, alt }) => (
  <div className="flex items-center justify-center h-56 w-12 md:h-52 md:w-52">
    <Image 
      src={src} 
      alt={alt} 
      width={150} 
      height={100} 
      className="object-contain" 
    />
  </div>
);

export default BrandSlider;
