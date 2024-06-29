"use client";

import React, { useState } from "react";
import Menu from "@/components/menu/Menu";
import "./main-layout.scss";
import Header from "@/components/header/Header";

const RootLayout = ({ children }) => {
  const [active, setActive] = useState(false);
  const toggleMenu = () => {
    if (active) {
      setActive(false);
    }
  };

  return (
    <div className={`container_sass ${active  ? "active"  : ""} ` }>
      <Header active={active} setActive={setActive} />
      <div className="main-container">
        <div className="main">
          <div className="content" >
            <div className="overlay" onClick={toggleMenu}>{children}</div>
          </div>
        </div>
      </div>
      <Menu active={active} setActive={setActive} />
    </div>
  );
};

export default RootLayout;
