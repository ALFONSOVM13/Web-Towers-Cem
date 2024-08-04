import Image from "next/image";
import Title from "../ui/Title";

const KnowUsSection = () => {
  return (
    <section className="min-h-screen bg-complementary-200 text-white pb-20 px-5 flex items-center">
      <div className="container mx-auto grid grid-cols-1 grid-rows-2 gap-3 lg:gap-10 lg:grid-cols-2 lg:grid-rows-1 items-center justify-items-center h-auto md:min-h-[500px] w-full">
        <div className="relative flex flex-col gap-5">
          <Title
            text="¡Desarrollamos con innovación y tecnología cementos inteligentes!"
            size="large"
            className="text-primary-100 !text-left"
          />
          <p className="text-complementary-300 font-title text-lg md:text-xl lg:text-2xl text-left leading-8 md:max-w-[85%]">
            Somos una cementera innovadora dedicada a la producción de cementos verdes. Utilizando tecnologías avanzadas como <span className="font-bold">X-CEM</span>, incorporamos materiales reciclados y propiedades inteligentes en nuestros productos, permitiendo la absorción de CO₂ y contribuyendo a la lucha contra el cambio climático.
          </p>
        </div>
        <div className="min-h-[400px] h-full flex items-center justify-center px-4 w-full">
          <div className="relative w-[260px] h-[200px] sm:w-[350px] lg:w-[420px] 2xl:w-[500px] sm:h-[300px] lg:h-[340px] xl:h-[400px]">
            <figure className="absolute -top-32 sm:top-0 left-0 w-full h-full rounded-[80px] overflow-hidden">
              <Image
                src="/images/header.png"
                alt="Imagen de la empresa"
                width={450}
                height={450}
                className="object-cover object-center w-full h-full shadow-lg"
              />
            </figure>
            <figure className="w-20 h-20 absolute -top-36 -right-5 sm:-top-5 sm:-right-5 ">
              <Image
                  src="/images/about-us/towerscem_icon-round.png"
                  alt="TowerCem logo"
                  width={140}
                  height={140}
                  className="w-full h-full object-cover object-center"
                />
            </figure>
            <figure className="absolute bottom-0 left-[50%] -translate-x-[50%] right-auto sm:translate-x-0 sm:left-auto sm:-right-[40%] xl:-right-[32%] 2xl:-right-[25%] border-8 border-y-complementary-400 rounded-[45px] w-[200px] lg:w-[250px]">
              <Image
                src="/images/about-us/TC-CREATIVOS-1.png"
                alt="TowerCem creativos"
                width={250}
                height={250}
                className="rounded-[35px] overflow-hidden object-cover object-center"
              />
              <figcaption className="text-primary-200 absolute -bottom-9 text-xl lg:text-2xl font-content  text-center w-full font-bold italic">#towerevolution</figcaption>
            </figure>
            <div className="absolute -bottom-[160px] sm:-bottom-20 sm:-left-40 bg-secondary-100 rounded-[24px] sm:rounded-[40px] px-6 py-4 xl:px-8 lg:py-5">
              <div className="flex gap-2 sm:gap-0 sm:flex-col">
                <span className="text-2xl md:text-3xl xl:text-5xl font-bold">173KG</span>
                <span className="text-lg md:text-xl xl:text-3xl font-bold">de CO2</span>
              </div>
              <p className="md:text-lg xl:text-2xl">por cada tonelada de X-cem</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowUsSection;
