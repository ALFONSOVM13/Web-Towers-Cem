import React, { useState, useEffect } from "react";
import "./header.scss";

const Header = ({ active, setActive }) => {
  const [hideLogo, setHideLogo] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        setHideLogo(true);
      } else {
        setHideLogo(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <div className={`header ${hideLogo ? "header--hide-logo" : ""}`}>
      <div className="header__content">
        <div className="logo flex items-center justify-center">
          <img
            src="/logo.png"
            alt="Logo"
            className={`w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain mt-12 ${hideLogo ? "hidden" : ""}`}
          />
        </div>
        <div className="p-0.1 ">
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
