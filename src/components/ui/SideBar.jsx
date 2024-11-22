"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiX } from "react-icons/bi";
import { FaCalendarCheck, FaNewspaper, FaUserGroup } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";

const SideBar = () => {
  const [toggleSideMenu, setToggleSideMenu] = useState(true);
  return (
    <>
      <div
        className={`relative z-30 min-h-screen ${
          toggleSideMenu
            ? "translate-x-0 sm:min-w-[240px]"
            : " -translate-x-full sm:translate-x-0 sm:w-[60px]"
        }`}
      ></div>

      <div
        className={`fixed left-0 top-0 bottom-0 z-30 min-h-screen py-4 bg-slate-800 transition-all duration-500 ${
          toggleSideMenu
            ? "w-[260px] translate-x-0 sm:w-[240px]"
            : "w-[270px] -translate-x-full sm:translate-x-0 sm:w-[60px]"
        } animate-fade`}
      >
        <nav
          className={`fixed top-0 bottom-0 h-full group flex flex-col bg-slate-800 py-4 px-1 transition-all duration-500 overflow-hidden z-40 ${
            toggleSideMenu
              ? "sm:w-[240px]"
              : "w-[252px] sm:w-[60px] sm:hover:w-[240px]"
          }`}
        >
          <div className="flex items-center gap-2">
            <Link
              href={"/admin"}
              className="flex gap-2 text-white text-lg p-2 rounded-md"
            >
              <Image
                src="/logoContraido.svg"
                alt="Logo"
                width={500}
                height={500}
                className="w-40 h-auto mx-auto"
              />
              <span
                className={`min-w-[150px] transition-all duration-500 text-[1.1rem] font-light ${
                  toggleSideMenu
                    ? "opacity-100"
                    : "sm:opacity-0 group-hover:opacity-100"
                }`}
              >
                {/* <strong className="font-semibold">Dev</strong>Manager */}
              </span>
            </Link>
            <button
              onClick={() => setToggleSideMenu(!toggleSideMenu)}
              className="flex sm:hidden justify-center items-center bg-slate-700 hover:bg-slate-600 rounded-md px-1 active:scale-95"
            >
              <BiX size={20} className="text-secondary-200" />
            </button>
          </div>
          <ul className="flex-1 mt-16 flex flex-col gap-1">
            <li>
              <Link
                href={"/admin/noticias"}
                className={`flex items-center gap-5 text-white px-4 py-2 rounded-md hover:bg-slate-700`}
              >
                <FaNewspaper size={20} className="text-lg text-slate-400" />
                <span
                  className={`min-w-[150px] transition-all duration-500 ${
                    toggleSideMenu
                      ? "opacity-100"
                      : "sm:opacity-0 group-hover:opacity-100"
                  }`}
                >
                  Noticias
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={"/proyectos"}
                className={`flex items-center gap-5 text-white px-4 py-2 rounded-md hover:bg-slate-700`}
              >
                <FaCalendarCheck size={20} className="text-lg text-slate-400" />
                <span
                  className={`min-w-[150px] transition-all duration-500 ${
                    toggleSideMenu
                      ? "opacity-100"
                      : "sm:opacity-0 group-hover:opacity-100"
                  }`}
                >
                  Eventos
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={"/proyectos"}
                className={`flex items-center gap-5 text-white px-4 py-2 rounded-md hover:bg-slate-700`}
              >
                <FaUserGroup size={20} className="text-lg text-slate-400" />
                <span
                  className={`min-w-[150px] transition-all duration-500 ${
                    toggleSideMenu
                      ? "opacity-100"
                      : "sm:opacity-0 group-hover:opacity-100"
                  }`}
                >
                  Usuarios
                </span>
              </Link>
            </li>
          </ul>
          <div className="border-t border-t-slate-700 py-2">
            <button
              //   onClick={() => dispatch(startLogout())}
              className="flex items-center w-full gap-5 text-white px-4 py-2 rounded-md hover:bg-slate-700 mb-2"
            >
              <CiLogout size={20} className="text-lg text-white" />
              <span
                className={`text-left min-w-[150px] transition-all duration-500 ${
                  toggleSideMenu
                    ? "opacity-100"
                    : "sm:opacity-0 group-hover:opacity-100"
                }`}
              >
                Cerrar Sesión
              </span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
