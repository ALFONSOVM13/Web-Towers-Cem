import React from "react";
import SectionHeader from "@/components/newsPage/SectionHeader.jsx";
import NewsCard from "@/components/newsPage/NewsCard.jsx";
import SmallNewsCard from "@/components/newsPage/SmallNewsCard.jsx";
import ContrastBar from "@/components/header/ContrastBar";
import "./styles.scss";
import NewsletterSection from "../../../components/newsletter/NewsletterSection";
import NewsletterCard from "@/components/newsletter/NewsletterCard";
import newsJson from "@/../public/tempData/news.json";

function NewsSection() {
  const { news: newsData } = newsJson;
  return (
    <section className="relative flex flex-col justify-center z-0">
      <div className="flex justify-center items-center px-16 py-20 w-full text-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-6 w-full max-w-[1216px] mb-[50px] max-md:mb-10 max-md:max-w-full">
          <SectionHeader title="NOTICIAS" />
          <div className="flex flex-col max-md:mt-10 max-md:max-w-full text-left mt-2">
            Towers Cem y el Mundo
          </div>
          <div className="mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-10 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                <NewsCard {...newsData[0]} />
              </div>
              <div className="relative flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full z-[0]">
                <div className="noticias flex flex-col max-md:mt-8 max-md:max-w-full max-h-[800px] overflow-y-auto pr-5">
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
          <SectionHeader title="NEWSLETTER" className="mt-32 max-md:mt-10" />
          <div className="flex flex-col max-md:max-w-full">
            <div className="flex flex-col max-md:mt-10 max-md:max-w-full text-left mt-2">
              Nuestros Avances
            </div>
            <div className="mt-12 grid gap-10 grid-col-1 md:grid-cols-2 xl:grid-cols-3  mb-20">
              {newsData.map((news, index) => (
                <NewsletterCard {...news} key={index} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
