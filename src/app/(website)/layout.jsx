"use client";

import FooterSection from "@/components/footer/FooterSection";
import Header from "@/components/header/Header";
import Menu from "@/components/menu/Menu";
import RightSideButton from "@/components/ui/RightSideButton";
import { useState } from "react";
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
      <Header active={active} toggleMenu={toggleMenu} setActive={setActive} />
      <Menu active={active} setActive={setActive} />
      <RightSideButton />
      <div onClick={closeMenu}>{children}</div>
      <FooterSection className="min-h-screen"/>
    </div>
  );
};

export default RootLayout;


