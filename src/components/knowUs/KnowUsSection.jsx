import Image from "next/image";
import Title from "../ui/Title";

const KnowUsSection = () => {
  return (
    <section className="min-h-screen bg-complementary-200 text-white py-20 px-5 flex justify-center">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left flex gap-5 flex-col">
          <Title text="¿Qué hacemos?" size="large" className="text-primary-100" />
          <p className="md:max-w-[75rem] text-complementary-300 font-title text-2xl text-justify leading-8">
            Somos una cementera innovadora dedicada a la producción de cementos
            verdes, enfocados en la sostenibilidad y la reducción del impacto
            ambiental. Utilizando tecnologías avanzadas como{" "}
            <strong className="text-primary-100">X-CEM</strong>, donde
            incorporamos materiales reciclados y propiedades inteligentes en
            nuestros productos, permitiendo la absorción de{" "}
            <strong className="text-primary-100">CO₂</strong> y contribuyendo a
            la lucha contra el cambio climático.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
        <Image
            src="/images/header.png" 
            alt="Imagen de la empresa"
            layout="responsive"
            width={250} 
            height={250} 
            className="object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default KnowUsSection;
