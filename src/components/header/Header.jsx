import React, { useState, useEffect } from "react";
import "./header.scss";

const Header = ({ active, setActive }) => {
  const [hideLogo, setHideLogo] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHideLogo(true);
      } else {
        setHideLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-40
        bg-opacity-90  transition-all duration-300 
        ${hideLogo ? "bg-black shadow-md py-1" : "bg-none py-0"} 
      `}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo flex items-center pl-10">
          <a href="/">
            <img
              src={hideLogo ? "/logoContraido.svg" : "/logo.png"}
              alt="Logo"
              className={`
              w-32 
              transition-all duration-300
              ${hideLogo ? "mt-0" : "mt-0"} 
            `}
            />
          </a>
        </div>

        <div className="pr-10 ">
          <div
            className={`hamburger-menu  ${active ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
