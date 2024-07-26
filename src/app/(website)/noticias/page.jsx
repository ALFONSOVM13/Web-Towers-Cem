import SectionHeader from "@/components/newsPage/SectionHeader.jsx";
import NewsCard from "@/components/newsPage/NewsCard.jsx";
import SmallNewsCard from "@/components/newsPage/SmallNewsCard.jsx";
import "./styles.scss";
import newsJson from "@/../public/tempData/news.json";

export const metadata = {
  title: "Noticias - Towers Cem",
  description:
    "Somos una cementera innovadora dedicada a la producción de cementos verdes, enfocados en la sostenibilidad y la reducción del impacto ambiental. Utilizando tecnologías avanzadas como X-CEM, donde incorporamos materiales reciclados y propiedades inteligentes en nuestros productos, permitiendo la absorción de CO₂ y contribuyendo a la lucha contra el cambio climático.",
  image: "/logo.png",
  favicon: "/src/app/icon.ico",
  color: "#000000",
  lang: "es",
  type: "website",
  url: "https://towerscem.com",
  siteName: "Towers Cem",
  keywords:
    "towerscem, noticias, cemento, construcción, infraestructuras, sostenibilidad, calidad",
};

function NewsSection() {
  const { news: newsData } = newsJson;
  return (
    <section className="noticias-section py-20 md:py-24 xl:py-28">
      <div className="container mx-auto px-5 text-complementary-200">
        <SectionHeader title="Noticias" />
        <div className="mt-5 md:mt-10 flex flex-col xl:flex-row gap-20 xl:gap-16">
          <div className="flex flex-col xl:w-2/3">
            <NewsCard {...newsData[0]} />
          </div>
          <div className="relative xl:max-h-[50rem] flex xl:w-1/3">
            <div className="noticias grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-1 auto-rows-min gap-16 sm:gap-11 xl:overflow-y-auto xl:pb-32 px-2">
              {newsData.slice(1).map( news => (
                <SmallNewsCard key={news.slug} {...news} />
              ))}
            </div>
            <div className="hidden xl:block absolute h-40 w-full bottom-0 degradado z-[10]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
