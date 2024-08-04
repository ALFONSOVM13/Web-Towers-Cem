import Image from "next/image";
import Link from "next/link";
import H3 from "../ui/H3";
import Button from "../ui/Button";

const ProductCard = ({ imageSrc, title, description, link }) => (
  <div className="w-full md:w-1/2 h-1/2 md:h-screen relative group">
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <Image
        src={imageSrc}
        alt={`Imagen de ${title}`}
        width={1920}
        height={1080}
        className="transition-transform w-full h-full duration-300 group-hover:scale-125 object-cover object-center"
      />
    </div>
    <div className="flex flex-col items-center gap-5 justify-center bg-primary-100 bg-opacity-40 text-white h-full absolute top-0 left-0 w-full group-hover:bg-opacity-85 p-4">
      <H3 text={title} className="!text-2xl md:!text-5xl" />
      <p className="!text-base md:!text-xl xl:!text-2xl italic w-full md:w-3/4 lg:w-7/12 opacity-0 group-hover:opacity-100 text-center">
        {description}
      </p>
      <Link href={link}>
        <Button text="Ver más" className="mt-4 opacity-0 group-hover:opacity-100">
          Ver producto
        </Button>
      </Link>
    </div>
  </div>
);

export default function Products() {
  return (
    <div className="flex flex-wrap h-screen">
      <ProductCard
        imageSrc="/images/products/bg1.jpg"
        title="Cemento Uso General"
        description="Explora los beneficios y usos de nuestro cemento X-cem Tipo 1."
        link="/productos/uso-general"
      />
      <ProductCard
        imageSrc="/images/products/bg2.jpg"
        title="Cemento Uso Estructural"
        description="Explora los usos y agregados para tus obras de nuestro cemento X-cem Tipo 3."
        link="/productos/uso-estructural"
      />
    </div>
  );
}
