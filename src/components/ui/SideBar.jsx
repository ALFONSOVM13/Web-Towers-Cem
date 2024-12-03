"use client";

import { startToggleSideMenu } from "@/store/ui";
import Image from "next/image";
import Link from "next/link";
import { BiX, BiChevronDown } from "react-icons/bi";
import { FaCalendarCheck, FaNewspaper, FaUserGroup } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from 'react';

const SIDEBAR_FULL_WIDTH = "w-[280px] sm:w-[240px]";
const SIDEBAR_COLLAPSED_WIDTH = "w-[280px] sm:w-[60px]";

const menuItems = [
  { href: "/admin/noticias", icon: FaNewspaper, text: "Noticias" },
  {
    href: "",
    icon: FaCalendarCheck,
    text: "Eventos",
    subcategories: [
      { href: "/admin/eventos", text: "Crear Evento" },
      { href: "/admin/lista-eventos", text: "Lista de Eventos" },
    ],
  }
];

const MenuItem = ({ href, icon: Icon, text, isExpanded, subcategories }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <li>
      <div className="flex flex-col">
        <Link
          href={href}
          className={`flex text-lg items-center gap-5 text-white px-4 py-2 rounded-md hover:bg-primary-200`}
          onClick={subcategories ? handleDropdownToggle : null}
        >
          <Icon size={25} className="text-white" />
          {isExpanded && (
            <span className="min-w-[150px] transition-all duration-500 flex items-center">
              {text}
              {subcategories && (
                <BiChevronDown
                  size={25}
                  className={`ml-2 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              )}
            </span>
          )}
        </Link>
        {subcategories && isDropdownOpen && (
          <ul className="ml-8 mt-2">
            {subcategories.map((sub) => (
              <li key={sub.href}>
                <Link
                  href={sub.href}
                  className="flex text-lg items-center gap-5 text-white px-4 py-2 rounded-md hover:bg-primary-200"
                >
                  {isExpanded && (
                    <span className="min-w-[150px] transition-all duration-500">
                      {sub.text}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};

const SideBar = () => {
  const dispatch = useDispatch();
  const toggleSideMenuState = useSelector((state) => state.ui.toggleSideMenu);

  const handleToggleSideMenu = useCallback(() => {
    dispatch(startToggleSideMenu());
  }, [dispatch]);

  const handleLogout = useCallback(() => {
    // Implement logout logic here
    // dispatch(startLogout());
  }, []);

  return (
    <>
      <div
        className={`relative z-30 min-h-screen ${
          toggleSideMenuState
            ? "translate-x-0 sm:min-w-[240px]"
            : "-translate-x-full sm:translate-x-0 sm:w-[60px]"
        }`}
      />

      <div
        className={`fixed left-0 top-0 bottom-0 z-30 min-h-screen py-4 transition-all duration-1000 ${
          toggleSideMenuState
            ? SIDEBAR_FULL_WIDTH
            : `${SIDEBAR_COLLAPSED_WIDTH} -translate-x-full sm:translate-x-0`
        } animate-fade`}
      >
        <nav
          className={`fixed top-0 bottom-0 h-full group flex flex-col bg-primary-100 py-4 px-1 transition-all duration-500 overflow-hidden z-40 ${
            toggleSideMenuState ? SIDEBAR_FULL_WIDTH : SIDEBAR_COLLAPSED_WIDTH
          }`}
        >
          <div className="flex items-center gap-4 mx-auto">
            <Link
              href="/admin"
              className="flex gap-2 text-white text-lg p-2 rounded-md"
            >
              <Image
                src={
                  toggleSideMenuState
                    ? "/images/logos/TC_TIPO_BLANCO_SF.webp"
                    : "/images/logos/TC_ICON_BLANCO_SF.webp"
                }
                alt="Logo"
                width={500}
                height={500}
                className={`${
                  toggleSideMenuState ? "w-40" : "w-10"
                } h-auto mx-auto`}
              />
            </Link>
            <button
              onClick={handleToggleSideMenu}
              className="flex sm:hidden justify-center items-center hover:bg-complementary-100 rounded-md transition-all duration-300 ease-in-out transform active:scale-95 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-customGreen"
            >
              <BiX
                size={30}
                className="text-customGreen transition-colors duration-300 ease-in-out hover:text-customGreen"
              />
            </button>
          </div>
          <ul className="flex-1 mt-16 flex flex-col gap-1">
            {menuItems.map((item) => (
              <MenuItem key={item.href} {...item} isExpanded={toggleSideMenuState} />
            ))}
          </ul>
          <div className="border-t border-t-slate-500 py-2">
            <button
              onClick={handleLogout}
              className="flex hover:font-semibold text-lg items-center w-full gap-5 text-white px-4 py-2 rounded-md hover:bg-customGreen mb-2"
            >
              <MdLogout size={25} className="text-white" />
              {toggleSideMenuState && (
                <span className="text-left min-w-[150px] transition-all duration-500">
                  Cerrar Sesión
                </span>
              )}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
