import React from "react";

const AutorPublicacion = ({ author }) => {
  return (
    <span className="flex self-end max-md:self-start items-center gap-2">
      <img src={author.avatar} className="rounded-full aspect-square w-8" />
      {author.name}
    </span>
  );
};

export default AutorPublicacion;
