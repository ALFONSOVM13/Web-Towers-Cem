import React from "react";
import Link from "next/link";

function SmallNewsCard({ image, title, author, readTime, index, slug = "" }) {
  return (
    <Link href={"/noticias/" + slug} alt={slug}>
      <article
        className={`flex p-2 gap-5 rounded-md max-lg:flex-col max-md:gap-0 mb-4 ${
          index === 0 ? "" : "mt-4"
        } max-md:max-w-full transition-all duration-200 border-transparent hover:border-white  border-b`}
      >
        <div className="flex flex-col w-[39%] max-md:ml-0 max-lg:w-full">
          <img
            loading="lazy"
            src={image}
            alt={title}
            className="shrink-0 max-w-full aspect-square  max-md:mt-8 rounded-md border border-zinc-200/70"
          />
        </div>
        <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-zinc-100 max-md:mt-10">
            <h3 className="text-xl font-normal tracking-tight leading-9 text-left">
              {title}
            </h3>
            <div className="flex gap-4 justify-between mt-6 text-sm font-medium tracking-normal leading-5">
              <div className="flex gap-4">
                <img
                  loading="lazy"
                  src={author.avatar}
                  alt={author.name}
                  className="shrink-0 w-8 rounded-full aspect-square"
                />
                <span className="my-auto">{author.name}</span>
              </div>
              <span className="my-auto">{readTime}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default SmallNewsCard;
