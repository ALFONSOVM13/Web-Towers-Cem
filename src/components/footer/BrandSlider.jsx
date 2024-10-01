import Image from "next/image";
import Marquee from "react-fast-marquee";
import Title from "../ui/Title";

const logos = [
  {
    src: "/images/brands/51-labs.png",
    alt: "51/-labs",
    width: 110,
    height: 85,
  },
  {
    src: "/images/brands/Cedex-logo.png",
    alt: "cedex",
    width: 170,
    height: 80,
  },
  {
    src: "/images/brands/cleantech.png",
    alt: "cleantech",
    width: 220,
    height: 60,
  },
  {
    src: "/images/brands/collision.png",
    alt: "collision",
    width: 220,
    height: 90,
  },
  {
    src: "/images/brands/instituto-eduardo-torroja.png",
    alt: "instituto-eduardo-torroja",
    width: 100,
    height: 60,
  },
  {
    src: "/images/brands/Logo_uni-costa.png",
    alt: "unicosta",
    width: 220,
    height: 95,
  },
  {
    src: "/images/brands/Logo_uninorte_colombia.jpg",
    alt: "uninorte-colombia",
    width: 220,
    height: 85,
  },
  {
    src: "/images/brands/madrid-innovation.png",
    alt: "madrid-innovation",
    width: 220,
    height: 75,
  },
  {
    src: "/images/brands/secot.jpg",
    alt: "secot",
    width: 220,
    height: 88,
  },
  {
    src: "/images/brands/uni-nac-colombia.png",
    alt: "uni-nac-colombia",
    width: 220,
    height: 125,
  },
  {
    src: "/images/brands/mentor.png",
    alt: "mentor",
    width: 220,
    height: 80,
  },
];

const BrandSlider = () => {
  return (
    <section className="flex flex-col h-full bg-complementary-200 my-8">
      <div className="flex justify-between items-center mx-12 sm:mx-20 my-2 sm:my-8">
        <Title
          text="Nuestros aliados"
          className="text-left text-3xl md:text-4xl xl:text-5xl"
        />
      </div>

      <Marquee direction="left" speed={150} delay={5} pauseOnHover={true}>
        {logos.map((logo, index) => (
          <div key={index} className="mx-6 overflow-hidden ">
            <LogoImage
              src={logo.src}
              alt={logo.alt}
              title={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

const LogoImage = ({ src, alt, width, height }) => (
  <div className="image_wrapper">
    <Image
      src={src}
      alt={alt}
      title={alt}
      width={width}
      height={height}
      className="object-contain object-center transform scale-100 hover:scale-105 transition-transform duration-300 w-36 h-auto"
    />
  </div>
);

export default BrandSlider;
