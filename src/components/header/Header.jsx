"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = ({ active, setActive }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logo, setLogo] = useState("/logoContraido.svg");
  const [menu, setMenu] = useState("/images/icons/menú.svg");
  const pathname = usePathname();

  useEffect(() => {
    if (
      !isScrolled &&
      (pathname === "/productos/uso-general" ||
        pathname === "/cotizar" ||
        pathname === "/productos/uso-estructural" ||
        pathname.includes("/newsletter"))
    ) {
      setLogo("/logoContraido2.svg");
      setMenu("/images/icons/menú2.svg");
    } else {
      setLogo("/logoContraido.svg");
      setMenu("/images/icons/menú.svg");
    }
  }, [isScrolled, pathname]);

  const toggleMenu = () => {
    setActive(!active);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-50
        bg-opacity-95 transition-all duration-300 
        ${isScrolled ? "bg-black shadow-md py-4" : "bg-transparent py-4"}
      `}
    >
      <div className="flex justify-between items-center ">
        <div className="logo flex items-center px-12 sm:px-20">
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              title="Logo"
              className={`
              transition-all duration-300
              ${isScrolled ? "w-32" : "w-32"}
            `}
            />
          </a>
        </div>

        <div className="flex items-center">
          <div
            className={`cursor-pointer px-6 md:px-8 lg:px-16 ${
              active ? "active" : ""
            }`}
            onClick={toggleMenu}
          >
            {active ? (
              <Image
                src="/images/icons/close.svg"
                alt="Close"
                title="Close"
                width={40}
                height={40}
                className="w-10 h-10 mr-3 mt-2 "
              />
            ) : (
              <Image
                src={menu}
                alt="Menu"
                title="Menu"
                width={45}
                height={45}
                className="w-full h-full"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
