"use client";
import React from "react";
import "../styles.scss";
import { useParams } from "next/navigation";
import newsJson from "@/../public/tempData/news.json";
import NewsHeader from "@/components/newsPage/NewsHeader";
import SmallNewsCard from "@/components/newsPage/SmallNewsCard";

const Page = () => {
  const { slug } = useParams();
  const { news } = newsJson;
  const newData = news.find((n) => n.slug === slug);
  const relatedNews = news.filter((n) => {
    console.log(
      "first",
      n.slug &&
        n.slug !== slug &&
        newData.tags?.find((tag) => n.tags?.includes(tag) !== undefined)
    );
    if (n.slug !== undefined)
      return (
        n.slug &&
        n.slug !== slug &&
        newData.tags?.find((tag) => n.tags?.includes(tag) !== undefined)
      );
    return false;
  });
  const otherNews = news.filter(
    (n) =>
      !n.slug ||
      (n.slug !== slug && !relatedNews.find((n2) => n.slug === n2.slug))
  );
  return (
    <section className="relative flex flex-col justify-center z-0">
      <div className="flex justify-center items-center px-16 py-28 w-full text-white max-md:px-5 ">
        <div className="flex flex-col space-y-10 py-5">
          <div className="w-full flex flex-col lg:flex-row gap-10">
            <div className="flex flex-col max-md:justify-center max-md:items-center gap-5 md:gap-10 w-full lg:w-2/3">
              <NewsHeader title={newData.title} className="w-full text-left" />
              <div
                className="mx-auto overflow-hidden rounded-md border h-[500px] md:h-[600px] border-zinc-200/50 w-[90%] bg-no-repeat bg-center bg-cover"
                style={{ backgroundImage: `url('${newData.image}')` }}
              ></div>
              <div className="pl-5 flex gap-3 font-bold items-center">
                Tags:{" "}
                {newData.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="tag justify-center px-2 py-0.5 bg-white rounded-3xl border border-gray-300 border-solid"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <article className="w-full space-y-10 text-xl">
                {newData.content.map((parrafo, index) => (
                  <p
                    key={"parrafo" + index}
                    className="tracking-wide text-left indent-4 inline-block w-full"
                  >
                    {parrafo}
                  </p>
                ))}
              </article>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col gap-5 divide-yellow-100 divide-y-2 space-y-5">
              {relatedNews.length > 0 && (
                <div>
                  <div className="text-3xl">Noticias Relacionadas</div>
                  {relatedNews.map((otherNew, index) => (
                    <SmallNewsCard key={"otherNew" + index} {...otherNew} />
                  ))}
                </div>
              )}
              {otherNews.length > 0 && (
                <div>
                  <div className="text-3xl py-5">Otras noticias</div>
                  {otherNews.map((otherNew, index) => (
                    <SmallNewsCard key={"otherNew" + index} {...otherNew} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
