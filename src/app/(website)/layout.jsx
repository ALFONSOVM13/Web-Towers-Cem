"use client";

import React, { useState } from "react";
import Menu from "@/components/menu/Menu";
import Header from "@/components/header/Header";
import FooterSection from "@/components/footer/FooterSection";
import styles from "./styles.css";

const RootLayout = ({ children }) => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  const closeMenu = () => {
    setActive(false);
  };

  return (
    <div className={`${styles.rootContainer}`}>
      <Header active={active} toggleMenu={toggleMenu} setActive={setActive}/>
      <Menu active={active} setActive={setActive} />
      <div onClick={closeMenu}>{children}</div>
      <FooterSection />
    </div>
  );
};

export default RootLayout;
