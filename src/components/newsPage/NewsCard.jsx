import Link from "next/link";
import React from "react";
import Avatar from "../ui/Avatar";
import Image from "next/image";

function NewsCard({
  image,
  title,
  summary,
  author,
  readTime,
  slug,
}) {
  return (
    <article className="relative flex flex-col grow text-sm font-normal tracking-normal leading-5 max-md:mt-3 max-md:max-w-full">
      <Link href={`/noticias/${slug}`} className="group">
        <figure className="relative rounded-md overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={980}
            height={650}
            className="w-full aspect-[1.52] max-md:max-w-full transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
          />
        </figure>
      </Link>
      <Link href={`/noticias/${slug}`} className="mt-6">
        <h3 className="text-complementary-200 text-3xl font-content leading-10 text-pretty">
          {title}
        </h3>
      </Link>
      <div className="mt-4 text-complementary-100 font-title text-[17.946px] leading-[28.7136px] text-pretty md:text-justify" dangerouslySetInnerHTML={{ __html: summary }}></div>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center justify-between mt-5 sm:mt-7">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Avatar image={author.avatar} title={author.name} />
            <p className="font-semibold">{author.name}</p>
          </div>
          <span>{readTime}</span>
        </div>
        <Link href={`/noticias/${slug}`} alt={slug} className="hidden sm:block">
          <button className="text-md font-medium text-zinc-100 hover:text-zinc-300 hover:border-zinc-300/50 border rounded-3xl border-zinc-200/50 h-12 w-36">
            Leer Más {"->"}
          </button>
        </Link>
      </div>
    </article>
  );
}

export default NewsCard;
