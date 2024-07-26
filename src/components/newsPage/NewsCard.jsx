import Link from "next/link";
import React from "react";

function NewsCard({
  image,
  tags,
  title,
  content,
  author,
  readTime,
  slug = "",
}) {
  return (
    <article className="relative flex flex-col grow text-sm font-normal tracking-normal leading-5 text-zinc-100 max-md:mt-3 max-md:max-w-full">
      <div className="flex gap-4 justify-between self-start my-5 font-medium">
        <div className="flex gap-4">
          <img
            loading="lazy"
            src={author.avatar}
            alt={author.name}
            className="shrink-0 w-10 rounded-full aspect-square"
          />
          <span className="my-auto">{author.name}</span>
        </div>
        <span className="my-auto">{readTime}</span>
      </div>
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="w-full aspect-[1.52] max-md:max-w-full"
      />
      <div className="flex gap-2 self-start mt-8 text-center">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="tag justify-center px-2 py-0.5 bg-white rounded-3xl border border-gray-300 border-solid"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mt-6 text-3xl tracking-tight leading-10 max-md:max-w-full">
        {title}
      </h3>
      <p className="mt-4 text-lg tracking-normal font-light leading-7 text-ellipsis text-neutral-100 max-md:max-w-full">
        {content}
      </p>
      <Link href={slug} alt={slug} className="mt-10 self-end">
        <button className=" bottom-0 right-7 text-md font-medium text-zinc-100 hover:text-zinc-300 hover:border-zinc-300/50 border rounded-3xl border-zinc-200/50 h-12 w-36">
          Leer Más {"->"}
        </button>
      </Link>
    </article>
  );
}

export default NewsCard;
