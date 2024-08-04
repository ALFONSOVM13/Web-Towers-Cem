import Image from "next/image";

const advantages = [
  {
    id: 1,
    background: "/images/fondo-cementos.png",
    icon: "/images/icons/SOSTENIBILIDAD_COLOR.svg",
    header: "Descontaminamos",
    title: "173KG de CO2 por cada tonelada de X-cem",
    content:
      "Nuestro cemento es capaz de descomponer hasta 173 kg de CO2 por cada tonelada producida. Esta innovadora tecnología no solo fortalece nuestras construcciones, sino que también actúa como un agente descontaminante, ayudando a crear ciudades más limpias y sostenibles.",
  },
];

const Advantages = () => {
  return (
    <div className="bg-complementary-300 text-white mt-20">
      {advantages.map((advantage) => (
        <article
          key={advantage.id}
          className="relative flex flex-col md:flex-row items-center justify-center gap-10 px-5 md:px-10 py-10"
        >
          {/* Imagen de fondo */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 z-0">
            <Image
              src={advantage.background}
              alt="Imagen de fondo"
              width={1920}
              height={1080}
              className=" object-center object-fill"
            />
          </div>

          {/* Contenido sobre la imagen */}
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 text-center">
            <div className="flex items-center mb-5 md:mb-0">
              <img
                src={advantage.icon}
                alt={advantage.header}
                className="w-32 h-32 md:w-48 md:h-48"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-title">{advantage.header}</h2>
              <h3 className="text-2xl md:text-3xl font-title font-bold mt-2">
                {advantage.title}
              </h3>
              <p className="mt-5 w-full  text-xl md:text-2xl font-title text-justify leading-6 md:leading-8">
                {advantage.content}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Advantages;
