import Image from "next/image";
import Marquee from "react-fast-marquee";
import Title from "../ui/Title";

const logos = [
  { src: "/images/brands/51-labs.jpg", alt: "Logo 1", width: 110, height: 85 },
  {
    src: "/images/brands/Cedex-logo.png",
    alt: "Logo 2",
    width: 120,
    height: 80,
  },
  {
    src: "/images/brands/cleantech.png",
    alt: "Logo 3",
    width: 100,
    height: 60,
  },
  {
    src: "/images/brands/collision.png",
    alt: "Logo 4",
    width: 130,
    height: 90,
  },
  {
    src: "/images/brands/instituto-eduardo-torroja.png",
    alt: "Logo 5",
    width: 80,
    height: 60,
  },
  {
    src: "/images/brands/Logo_uni-costa.png",
    alt: "Logo 6",
    width: 140,
    height: 95,
  },
  {
    src: "/images/brands/Logo_uninorte_colombia.jpg",
    alt: "Logo 7",
    width: 125,
    height: 85,
  },
  {
    src: "/images/brands/madrid-innovation.png",
    alt: "Logo 8",
    width: 115,
    height: 75,
  },
  { src: "/images/brands/secot.jpg", alt: "Logo 9", width: 135, height: 88 },
  {
    src: "/images/brands/uni-nac-colombia.png",
    alt: "Logo 10",
    width: 105,
    height: 65,
  },
];

const BrandSlider = () => {
  return (
    <div flex justify-between items-center mb-10>
      <Title
        text="NUESTROS ALIADOS"
        className="text-left text-3xl md:text-4xl xl:text-5xl"
      />

      <Marquee direction="left" speed={100} delay={5} pauseOnHover={true}>
        {logos.map((logo, index) => (
          <div key={index} className="my-10 p-2 md:p-4">
            <LogoImage
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

const LogoImage = ({ src, alt, width, height }) => (
  <div className="image_wrapper">
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="object-contain object-center transform scale-100 hover:scale-110 transition-transform duration-300"
    />
  </div>
);

export default BrandSlider;
