"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

const RightSideButton = () => {
  const [isOpenContainer, setIsOpenContainer] = useState(false);

  const handleClick = () => {
    setIsOpenContainer(!isOpenContainer);
  };

  useEffect(() => {
    if (isOpenContainer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenContainer]);

  const navigateToConctact = () => {
    window.location.href = "/contacto";
    setIsOpenContainer(false);
  };

  return (
    <div className="fixed right-4 bottom-4 z-[1000]">
      <button
        className="bg-white border-none p-2 cursor-pointer flex items-center justify-center relative z-[1]"
        onClick={handleClick}
      >
        {!isOpenContainer ? (
          <Image
            src="/images/icons/contacto.svg"
            alt="Contacto"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 stroke-[#270089]"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        )}
      </button>
      {isOpenContainer && (
        <>
          <div
            className={classNames(
              "fixed top-0 left-0 w-full h-full bg-[#2c2e63] opacity-95 z-[-10] backdrop-blur-md",
              {
                "animate-fadeIn": isOpenContainer,
                "animate-fadeOut": !isOpenContainer,
              }
            )}
            onClick={handleClick}
          ></div>
          <div
            className={classNames(
              "absolute bottom-20 gap-4 right-0 z-[0] flex flex-col items-center w-96 transition-transform duration-300",
              {
                "transform translate-x-full": !isOpenContainer,
                "transform translate-x-0": isOpenContainer,
              }
            )}
          >
            <div className="flex flex-row items-center justify-end gap-3 w-full">
              <p className="text-complementary-200 font-title text-xl md:text-2xl">
                Solicitar una cotización
              </p>
              <button
                onClick={navigateToConctact}
                className="bg-white border-none p-2 cursor-pointer flex items-center justify-center"
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 stroke-[#270089]"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                    <path d="M9 7l1 0" />
                    <path d="M9 13l6 0" />
                    <path d="M13 17l2 0" />
                  </svg>
                </div>
              </button>
            </div>
            <div className="flex flex-row items-center justify-end gap-2 w-full">
              <p className="text-complementary-200 font-title text-xl md:text-2xl">
                Hablemos por WhatsApp
              </p>
              <button
                className="bg-white border-none p-2 cursor-pointer flex items-center justify-center"
                onClick={() =>
                  window.open("https://wa.me/+573225098967", "_blank")
                }
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 stroke-[#270089]"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RightSideButton;
