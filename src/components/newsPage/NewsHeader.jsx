import React from "react";

function NewsHeader({ title, className = "" }) {
  return (
    <header
      className={`flex gap-5 justify-between text-zinc-900 max-md:flex-wrap max-md:max-w-full ${className}`}
    >
      <h2 className="text-4xl font-normal tracking-wide leading-[68.2px] max-md:text-4xl text-white">
        {title}
      </h2>
      {/* <button className="flex flex-col justify-center px-6 py-4 my-auto text-lg tracking-normal leading-6 border border-solid border-emerald-950 rounded-[200px] max-md:px-5">
        <div className="flex gap-2">
          <span>Ver Más</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd25340f38da1041e591437ae0489ec89d8a2e1afe7a770b971118a4d7553804?apiKey=a388e25d634c4683ada4dcefcdb81b2e&"
            alt=""
            className="shrink-0 my-auto w-5 aspect-square"
          />
        </div>
      </button> */}
    </header>
  );
}

export default NewsHeader;
