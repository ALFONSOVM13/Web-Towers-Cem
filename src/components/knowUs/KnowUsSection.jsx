import Image from "next/image";
import Title from "../ui/Title"

const knowUsCardsData = [
    {
        title: "Constructoras",
        bgImage: "/images/constructoras.jpg",
    },
    {
        title: "Prefabricados",
        bgImage: "/images/prefabricados.jpg",
    },
    {
        title: "Bloqueras",
        bgImage: "/images/bloqueras.webp",
    },

];


const knowUsSection = () => {
    return (
        <section className="min-h-screen py-10 px-5 md:px-10">
            <div className="text-center flex flex-col items-center gap-y-10 mb-10 sm:mb-20">
                <Title text="¡CONÓCENOS!" size="large" />
                <p className="md:max-w-[75rem] text-complementary-300 font-title text-xl text-pretty leading-8">¡En <strong>Towers Cem</strong>, desarrollamos cementos inteligentes y sostenibles que purifican el aire eliminando hasta un 23% de CO₂. Nos enfocamos en ofrecer soluciones que no solo son <strong>duraderas y de alta calidad</strong>, sino también amigables con el medio ambiente.!</p>
            </div>
            <div className="grid justify-center grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 place-items-center max-w-[82rem] mx-auto">
                {
                    knowUsCardsData.map( knowUsCard => (
                        <article key={knowUsCard.title} className="relative group w-full h-[10rem] md:h-[36rem] overflow-hidden md:first:-translate-y-12 md:last-of-type:translate-y-12 cursor-pointer">
                            <figure className="w-full h-full">
                                <Image
                                    src={knowUsCard.bgImage}
                                    alt={ knowUsCard.title }
                                    width={900}
                                    height={700}
                                    className="h-full w-full object-cover object-center group-hover:scale-110 transition duration-500"
                                />
                            </figure>
                            <div className="absolute grid place-content-center inset-0 bg-black/50 group-hover:bg-black/0 transition-colors duration-500">
                                <h3 className="font-semibold uppercase text-complementary-200 text-2xl group-hover:-translate-y-5 transition duration-500  group-hover:text-shadow">{ knowUsCard.title }</h3>
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

export default knowUsSection