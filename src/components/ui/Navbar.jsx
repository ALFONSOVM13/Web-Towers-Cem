import React from "react";
import { BiMenu } from "react-icons/bi";

export const Navbar = () => {
  const name = "Usuario";
  const photo = "https://randomuser.me/api/port";
  return (
    <header className="sticky top-0 z-10 flex justify-between items-center bg-white py-3 px-5 shadow">
      <button
        // onClick={() => dispatch(toggleSideMenu())}
        className="flex justify-center items-center bg-slate-100 hover:bg-slate-200 rounded-md px-1 active:scale-95"
      >
        <BiMenu size={20} className="text-slate-700" />
      </button>
      <p className="text-slate-700 font-semibold flex items-center gap-2">
        {name}
        {photo ? (
          <picture className="relative bg-slate-100 w-9 h-9 rounded-full overflow-hidden">
            <img
              src={photo}
              alt={name ?? "Usuario"}
              title={name ?? "Usuario"}
              className="bg-slate-100 w-9 h-9 rounded-full object-cover object-center"
            />
          </picture>
        ) : (
          <span className="bg-slate-700 text-slate-100 w-9 h-9 flex justify-center items-center rounded-full">
            {name?.slice(0, 1)}
          </span>
        )}
      </p>
    </header>
  );
};
