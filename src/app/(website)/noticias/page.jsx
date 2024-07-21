import React from "react";
import SectionHeader from "@/components/newsPage/SectionHeader.jsx";
import NewsCard from "@/components/newsPage/NewsCard.jsx";
import SmallNewsCard from "@/components/newsPage/SmallNewsCard.jsx";
import "./styles.scss";
import NewsletterCard from "@/components/newsletter/NewsletterCard";
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
    <section className="relative flex flex-col justify-center z-0">
      <div className="flex justify-center items-center px-16 py-20 w-full text-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-6 w-full mb-5 max-md:mb-5 max-md:max-w-full">
          <SectionHeader title="NOTICIAS" />
          <div className="flex flex-col  max-md:max-w-full text-left mt-2">
            Towers Cem y el Mundo
          </div>
          <div className="mt-10 max-md:max-w-full">
            <div className="flex gap-10 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-2/3 max-md:ml-0 max-md:w-full">
                <NewsCard {...newsData[0]} />
              </div>
              <div className="relative flex flex-col ml-5 w-1/3 max-md:ml-0 max-md:w-full z-[0]">
                <div className="noticias flex flex-col max-md:mt-8 max-md:max-w-full max-h-[800px] overflow-y-auto pr-5 w-full">
                  {newsData.slice(1).map((news, index) => (
                    <SmallNewsCard key={index} {...news} index={index} />
                  ))}
                  {newsData.slice(1).length > 4 && (
                    <div className="block max-md:hidden mt-[310px] bg-[#1f1f1f]"></div>
                  )}
                  <div className="absolute h-40 w-full bottom-0 degradado z-[10] max-md:hidden"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
