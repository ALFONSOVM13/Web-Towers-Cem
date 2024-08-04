"use client";

import React, { useState, useEffect } from "react";
import Menu from "@/components/menu/Menu";
import Header from "@/components/header/Header";
import FooterSection from "@/components/footer/FooterSection";
import RightSideButton from "@/components/ui/RightSideButton";
import 'tailwindcss/tailwind.css'; // Asegúrate de que Tailwind esté importado en tu proyecto

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#0d0d0d] overflow-hidden font-['Roboto']">
      <div className="relative text-center w-[200px]">
        <p className="text-[40px] font-light text-secondary-100"></p>
        <h1 className="text-[60px] text-white mt-[-10px]">{progress}%</h1>
        <hr
          className="bg-secondary-100 border-none h-[1px] mt-2"
          style={{ width: `${progress}%` }}
        />
        <div
          className="absolute top-0 w-full h-[1px] bg-secondary-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

const RootLayout = ({ children }) => {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula la carga de datos o cualquier otra operación
    const timer = setTimeout(() => {
      setLoading(false); // Cambia el estado a false cuando la carga se complete
    }
    , 2100);

    return () => clearTimeout(timer); // Limpia el temporizador en caso de desmontaje
  }, []);

  const toggleMenu = () => {
    setActive(!active);
  };

  const closeMenu = () => {
    setActive(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Header active={active} toggleMenu={toggleMenu}/>
          <Menu active={active} setActive={setActive} />
          <RightSideButton />
          <div onClick={closeMenu}>{children}</div>
          <FooterSection className="min-h-screen"/>
        </>
      )}
    </div>
  );
};

export default RootLayout;
