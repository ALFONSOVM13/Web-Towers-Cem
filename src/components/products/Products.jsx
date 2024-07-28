import Image from "next/image";
import H3 from "../ui/H3";
import Button from "../ui/Button";

export default function Products() {
  return (
    <div className="flex flex-wrap h-screen">
      {/* Tarjeta con imagen de fondo */}
      <div className="w-full md:w-1/2 h-1/2 md:h-screen relative group">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <Image
            src="/images/products/bg1.jpg"
            alt="Imagen de productos"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-125"
          />
        </div>
        <div className="flex flex-col items-center gap-5 justify-center bg-primary-100 bg-opacity-40 text-white h-full absolute top-0 left-0 w-full group-hover:bg-opacity-85 p-4">
          <h2 className="w-full text-center text-lg md:text-3xl xl:text-3xl font-title mt-5">
              Nuestros cementos
          </h2>
          <H3 text="Cemento Uso General" className="!text-2xl md:!text-5xl" />
          <p
            className="!text-base md:!text-xl xl:!text-2xl italic w-full md:w-3/4 lg:w-2/4 opacity-0 group-hover:opacity-100 text-center"
          >
            Explora los beneficios y usos que tiene de nuestro cemento X-cem Tipo 1.
          </p>
          <Button
            text="Ver más"
            className="mt-4 opacity-0 group-hover:opacity-100"
            onClick={() => (window.location.href = "/productos/uso-general")}
          >
            Ver producto
          </Button>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-screen relative group">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <Image
            src="/images/products/bg2.jpg"
            alt="Imagen de productos"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-125"
          />
        </div>
        <div className="flex flex-col items-center gap-5 justify-center bg-primary-100 bg-opacity-40 text-white h-full absolute top-0 left-0 w-full group-hover:bg-opacity-85 p-4">
          <span className="w-full text-center">
            <span className="text-lg md:text-3xl xl:text-3xl font-title">
              Nuestros cementos
            </span>
          </span>
          <H3 text="Cemento Uso Estructural" className="!text-2xl md:!text-5xl" />
          <p
            className="!text-base md:!text-xl xl:!text-2xl italic w-full md:w-3/4 lg:w-2/4 opacity-0 group-hover:opacity-100 text-center"
          >
            Explora los usos y agregados para tus obras de nuestro cemento X-CEM Tipo 3.
          </p>
          <Button
            text="Ver más"
            className="mt-4 opacity-0 group-hover:opacity-100"
            onClick={() => (window.location.href = "/productos/uso-estructural")}
          >
            Ver producto
          </Button>
        </div>
      </div>
    </div>
  );
}
