import React from "react";
import Link from "next/link";

function SmallNewsCard({ image, title, author, readTime, index, slug = "" }) {
  return (
    <Link href={"/noticias/" + slug} alt={slug}>
      <article
        className={`flex w-full p-2 gap-2 rounded-md flex-col max-md:gap-0 mb-4 ${
          index === 0 ? "" : "mt-4"
        } max-md:max-w-full transition-all duration-200 border-transparent hover:border-white border-b`}
      >
        <div className="flex w-full max-md:ml-0 max-lg:w-full gap-4 items-center">
          <img
            loading="lazy"
            src={image}
            alt={title}
            className="aspect-square max-md:mt-8 rounded-md border border-zinc-200/70 w-2/5 h-[100px]"
          />
          <h3 className="text-lg font-normal tracking-tight leading-9 text-left">
            {title}
          </h3>
        </div>
        <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
          <div className="flex gap-4 justify-between mt-6 text-md font-medium tracking-normal leading-5 items-center">
            <div className="flex gap-2 justify-start items-center">
              <img
                loading="lazy"
                src={author.avatar}
                alt={author.name}
                className="shrink-0 w-8 rounded-full aspect-square"
              />
              <span className=" text-sm capitalize text-left">
                {author.name}
              </span>
            </div>
            <span className="">{readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default SmallNewsCard;
