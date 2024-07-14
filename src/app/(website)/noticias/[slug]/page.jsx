"use client";
import React from "react";
import "../styles.scss";
import { useParams } from "next/navigation";
import newsJson from "@/../public/tempData/news.json";
import NewsHeader from "@/components/newsPage/NewsHeader";

const page = () => {
  const { slug } = useParams();
  const { news } = newsJson;
  const newData = news.find((n) => n.slug === slug);

  return (
    <section className="relative flex flex-col justify-center z-0">
      <div className="flex justify-center items-center px-16 py-20 w-full text-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col space-y-10 py-5 ">
          <NewsHeader title={newData.title} className="w-full" />
          <div className="flex flex-col md:flex-row max-md:justify-center max-md:items-center max-md:px-5 gap-5">
            <div className="w-full md:w-1/2 h-[500px] overflow-hidden rounded-md border border-zinc-200/50 md:max-w-[800px]">
              <img src={newData.image} alt={slug} className=" w-full" />
            </div>
            <article className="w-1/2">
              {newData.content.map((parrafo) => (
                <p className="tracking-wide">{parrafo}</p>
              ))}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
