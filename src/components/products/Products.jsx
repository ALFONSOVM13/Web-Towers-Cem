import Image from "next/image";
import Title from "../ui/Title";
import H3 from "../ui/H3";
import Button from "../ui/Button";

export default function Products() {
  return (
    <div className="flex flex-wrap h-screen">
      {/* Tarjeta con imagen de fondo */}
      <div className="w-full md:w-1/2 h-1/2 md:h-[100vh] relative group">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <Image
            src="/images/products/bg1.jpg"
            alt="Imagen de productos"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-125"
          />
        </div>
        <div className="flex flex-col items-center gap-5 justify-center bg-primary-100 bg-opacity-40 text-white h-full absolute top-0 left-0 w-full  group-hover:bg-opacity-85">
          <p>
            <span className="text-2xl md:text-3xl xl:text-3xl font-title">
              Nuestros cementos
            </span>
          </p>
          <Title text="Cemento Uso General" className={"!text-5xl"} />
          <H3
            text="Explora los beneficios y usos que tiene de nuestro cemento X-cem Tipo 1."
            className="!text-xl md:text-xl xl:text-2xl italic w-2/4 opacity-0 group-hover:opacity-100"
          />

          <Button
            text="Ver más"
            className="mt-4 opacity-0 group-hover:opacity-100"
            onClick={() => (window.location.href = "/products")}
          >
            Ver producto
          </Button>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-[100vh] relative group">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <Image
            src="/images/products/bg2.jpg"
            alt="Imagen de productos"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-125"
          />
        </div>
        <div className="flex flex-col items-center gap-5 justify-center bg-primary-100 bg-opacity-40 text-white h-full absolute top-0 left-0 w-full  group-hover:bg-opacity-85">
          <p>
            <span className="text-2xl md:text-3xl xl:text-3xl font-title">
              Nuestros cementos
            </span>
          </p>
          <Title text="Cemento Uso Estructural" className={"!text-5xl"} />
          <H3
            text="Explora los usos y agregados para tus obras de nuestro cemento X-CEM Tipo 3."
            className="!text-xl md:text-xl xl:text-2xl italic  w-2/4 opacity-0 group-hover:opacity-100"
          />

          <Button
            text="Ver más"
            className="mt-4 opacity-0 group-hover:opacity-100"
            onClick={() => (window.location.href = "/products")}
          >
            Ver producto
          </Button>
        </div>
      </div>
    </div>
  );
}
