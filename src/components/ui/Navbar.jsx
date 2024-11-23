"use client";
import { toggleSideMenu } from "@/store/ui";
import { BiMenu } from "react-icons/bi";
import { useDispatch } from "react-redux";

export const Navbar = () => {
  const dispatch = useDispatch();
  const name = "Carlos Torres"
  const photo = "/images/team/Carlos.png"
  return (
    <header className="sticky top-0 z-10 flex justify-between items-center bg-white py-3 px-5 shadow">
      <button
        onClick={() => dispatch(toggleSideMenu())}
        className="flex justify-center items-center bg-slate-100 hover:bg-primary-100 rounded-md px-1 active:scale-95"
      >
        <BiMenu size={25} className="text-slate-700 hover:text-white" />
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
  )
}
