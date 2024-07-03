"use client";

import React, { useState } from "react";
import Menu from "@/components/menu/Menu";
import Header from "@/components/header/Header";

const RootLayout = ({ children }) => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  const closeMenu = () => {
    setActive(false);
  };

  return (
    <div className={`container_sass ${active ? "active overflow-hidden" : ""}`}>
      <Header active={active} toggleMenu={toggleMenu} setActive={setActive}/>
      <Menu active={active} setActive={setActive} />
      <div onClick={closeMenu}>{children}</div>
    </div>
  );
};

export default RootLayout;
