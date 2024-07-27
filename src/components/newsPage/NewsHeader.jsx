import React from "react";
import Avatar from "../ui/Avatar";
import { timeSince } from "@/utils/timeSince";

function NewsHeader({ title, author, readTime, publishedAt }) {
  return (
    <header className="mb-8 px-2 md:px-0">
      <h1 className="text-4xl font-title leading-10 xl:leading-[68.2px] xl:text-5xl text-complementary-200 mb-4">
        {title}
      </h1>
      <div className="flex items-center flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <Avatar image={author.avatar} title={author.name} />
          <p className="font-semibold text-complementary-200">{author.name}</p>
        </div>
        <div className="flex items-center gap-2 text-complementary-200">
          <span>{readTime}</span> - 
          <span className="text-complementary-400">Publicado hace { timeSince(publishedAt) }</span>
        </div>
      </div>
    </header>
  );
}

export default NewsHeader;
