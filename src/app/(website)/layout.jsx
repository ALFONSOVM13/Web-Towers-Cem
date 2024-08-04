"use client";

import React, { useState } from "react";
import styles from "./styles.css";
import Menu from "@/components/menu/Menu";
import Header from "@/components/header/Header";
import FooterSection from "@/components/footer/FooterSection";
import RightSideButton from "@/components/ui/RightSideButton";

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
      <Header active={active} toggleMenu={toggleMenu}/>
      <Menu active={active} setActive={setActive} />
      <RightSideButton />
      <div onClick={closeMenu}>{children}</div>
      <FooterSection className="min-h-screen"/>
    </div>
  );
};

export default RootLayout;


