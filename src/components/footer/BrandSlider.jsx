import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { src: "/images/brands/51-labs.jpg", alt: "Logo 1" },
  { src: "/images/brands/Cedex-logo.png", alt: "Logo 2" },
  { src: "/images/brands/cleantech.png", alt: "Logo 3" },
  { src: "/images/brands/collision.png", alt: "Logo 4" },
  { src: "/images/brands/instituto-eduardo-torroja.png", alt: "Logo 5" },
  { src: "/images/brands/Logo_uni-costa.png", alt: "Logo 6" },
  { src: "/images/brands/Logo_uninorte_colombia.jpg", alt: "Logo 7" },
  { src: "/images/brands/madrid-innovation.png", alt: "Logo 8" },
  { src: "/images/brands/secot.jpg", alt: "Logo 9" },
  { src: "/images/brands/uni-nac-colombia.png", alt: "Logo 10" },
];

const BrandSlider = () => {
  // Duplica los slides para permitir un desplazamiento continuo
  const duplicatedSlides = logos.concat(logos);

  return (
    <div className="overflow-hidden w-full py-8">
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
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
      className="object-cover"
    />
  </div>
);

export default BrandSlider;
