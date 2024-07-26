"use client";
import React, { useState, useEffect } from "react";
import "./header.scss";
import { usePathname } from "next/navigation";

const Header = ({ active, setActive }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logo, setLogo] = useState("/logoContraido.svg")
  const pathname = usePathname();
  console.log(pathname);

  useEffect(() => {
    if (!isScrolled && (pathname === "/productos/uso-general" || pathname === "/productos/uso-estructural")) {
      setLogo("/logoContraido2.svg");
    } else {
      setLogo("/logoContraido.svg");
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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-50
        bg-opacity-90 transition-all duration-300 
        ${isScrolled ? 'bg-black shadow-md py-0.5' : 'bg-transparent py-0.5'}
      `}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo flex items-center pl-10">
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className={`
              w-32
              transition-all duration-300
              ${isScrolled ? 'w-24' : 'w-32 '}
            `}
            />
          </a>
        </div>

        <div className="pr-10">
          <div
            className={`hamburger-menu  ${active ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
