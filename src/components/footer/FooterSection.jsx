"use client";
import Image from "next/image";
import { useState } from "react";
import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { FiCheckSquare } from "react-icons/fi";
import { MdOutlineCropSquare } from "react-icons/md";
import axios from "axios";

const FooterSection = () => {
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [message, setMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      setMessage("Debe aceptar los términos y condiciones.");
      return;
    }

    try {
      const response = await axios.post("/api/subscribeNewsletter", { email });
      setMessage(response.data.message);

      setEmail("");
      setIsSubscribed(true); // Cambia el estado del botón a
      setTermsAccepted(false); // Reinicia el estado del checkbox
    } catch (error) {
      setMessage("Error al suscribirse.");
    }
  };
  return (
    <section className="pt-16 pb-7 bg-complementary-300 px-2 sm:px-20">
      <div className="mx-auto max-w-full ">
        <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-gray-500 gap-8">
          <a href="/" className="">
            <Image
              src="/logo.png"
              alt="Pagedone"
              title="Logo de Pagedone"
              width={150}
              height={150}
            />
          </a>
          <div className="flex items-center gap-4">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/towerscem"
              className="w-[3rem] h-[3rem] rounded-sm bg-complementary-200 flex justify-center items-center overflow-hidden relative shadow-md text-[1.5rem] transition-all duration-200 hover:scale-125 hover:text-complementary-200 before:bg-instagram-gradient before:content-[''] before:absolute before:w-[130%] before:h-[130%] before:left-[-110%] before:top-[80%] before:rotate-45 hover:before:animate-slide group"
              title="Instagram"
            >
              <FaInstagram
                size={20}
                className="text-[#ee2a7b] text-[1.5rem] transition-all duration-200 z-10 group-hover:text-complementary-200"
              />
            </a>

            <a
              href="https://www.linkedin.com/company/towerscem/"
              className="w-[3rem] h-[3rem] rounded-sm bg-complementary-200 flex justify-center items-center overflow-hidden relative shadow-md text-[1.5rem] transition-all duration-200 hover:scale-125 hover:text-complementary-200 before:bg-[#0077b5] before:content-[''] before:absolute before:w-[130%] before:h-[130%] before:left-[-110%] before:top-[80%] before:rotate-45 hover:before:animate-slide group"
              title="Linkedin"
            >
              <FaLinkedinIn
                size={20}
                className="text-primary-200 text-[1.5rem] transition-all duration-200 z-10 group-hover:text-complementary-200"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tiktok.com/@towerscemento"
              className="w-[3rem] h-[3rem] rounded-sm bg-complementary-200 flex justify-center items-center overflow-hidden relative shadow-md text-[1.5rem] transition-all duration-200 hover:scale-125 hover:text-complementary-200 before:bg-[#333] before:content-[''] before:absolute before:w-[130%] before:h-[130%] before:left-[-110%] before:top-[80%] before:rotate-45 hover:before:animate-slide group"
              title="TikTok"
            >
              <FaTiktok
                size={20}
                className="text-complementary-300 text-[1.5rem] transition-all duration-200 z-10 group-hover:text-complementary-200"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/@towerscemento?sub_confirmation=1"
              className="w-[3rem] h-[3rem] rounded-sm bg-complementary-200 flex justify-center items-center overflow-hidden relative shadow-md text-[1.5rem] transition-all duration-200 hover:scale-125 hover:text-complementary-200 before:bg-[#ff0000] before:content-[''] before:absolute before:w-[130%] before:h-[130%] before:left-[-110%] before:top-[80%] before:rotate-45 hover:before:animate-slide group"
              title="YouTube"
            >
              <FaYoutube
                size={20}
                className="text-[#ff0000] text-[1.5rem] transition-all duration-200 z-10 group-hover:text-complementary-200"
              />
            </a>
          </div>
        </div>
        <div className="py-10 flex flex-col md:flex-col lg:flex-row justify-between gap-8 border-b border-gray-500 ">
          <div className="w-full max-lg:mx-auto flex flex-col sm:flex-row max-lg:items-center max-lg:justify-between gap-4 md:gap-8 lg:gap-8 xl:gap-52">
            <div className="/sobre-towers-cem">
              <h2 className="text-lg font-bold text-white mb-7 max-lg:text-center font-title">
                Sobre Towers Cem
              </h2>
              <ul className="flex flex-col max-lg:items-center gap-4">
                <li>
                  <a
                    href="/equipo-towers-cem"
                    className="text-base font-normal max-lg:text-center text-complementary-400 whitespace-nowrap transition-all duration-300 hover:text-secondary-200 focus-within:outline-0 focus-within:text-complementary-400"
                  >
                    Nuestro Equipo
                  </a>
                </li>
                <li>
                  <a
                    href="/crowdfunding"
                    className="text-base font-normal max-lg:text-center text-complementary-400 whitespace-nowrap transition-all duration-300 hover:text-secondary-200 focus-within:outline-0 focus-within:text-complementary-400"
                  >
                    Crowdfunding
                  </a>
                </li>
                <li>
                  <a
                    href="/terminos-y-condiciones"
                    className="text-base font-normal max-lg:text-center text-complementary-400 whitespace-nowrap transition-all duration-300 hover:text-secondary-200 focus-within:outline-0 focus-within:text-complementary-400"
                  >
                    Terminos y Condiciones
                  </a>
                </li>
                <li>
                  <a
                    href="/politicas-de-privacidad"
                    className="text-base font-normal max-lg:text-center text-complementary-400 whitespace-nowrap transition-all duration-300 hover:text-secondary-200 focus-within:outline-0 focus-within:text-complementary-400"
                  >
                    Politicas de privacidad
                  </a>
                </li>
              </ul>
            </div>
            <div className="/productos">
              <h2 className="text-lg  text-white mb-7 max-lg:text-center font-title font-bold">
                Soluciones TC
              </h2>
              <ul className="flex flex-col gap-4 max-lg:items-center">
                <li>
                  <a
                    href="/productos/uso-general"
                    className="text-base font-normal text-complementary-400 whitespace-nowrap transition-all duration-300 hover:text-secondary-200 focus-within:outline-0 focus-within:text-complementary-400"
                  >
                    Cemento uso general
                  </a>
                </li>
                <li>
                  <a
                    href="/productos/uso-estructural"
                    className="text-base font-normal text-complementary-400 whitespace-nowrap transition-all duration-300 hover:text-secondary-200 focus-within:outline-0 focus-within:text-complementary-400"
                  >
                    Cemento uso estructural
                  </a>
                </li>
                <li>
                  <a
                    href="/sostenibilidad"
                    className="text-base font-normal text-complementary-400 whitespace-nowrap transition-all duration-300 hover:text-secondary-200 focus-within:outline-0 focus-within:text-complementary-400"
                  >
                    Sostenibilidad
                  </a>
                </li>
                <li>
                  <a
                    href="/contacto"
                    className="text-base font-normal text-complementary-400 whitespace-nowrap transition-all duration-300 hover:text-secondary-200 focus-within:outline-0 focus-within:text-complementary-400"
                  >
                    Contactenos
                  </a>
                </li>
              </ul>
            </div>
            <div className="/recursos">
              <h2 className="text-lg  text-white mb-7 max-lg:text-center font-title font-bold">
                Medios
              </h2>
              <ul className="flex flex-col gap-4 max-lg:items-center">
                <li>
                  <a
                    href="/faq"
                    className="text-base font-normal text-complementary-400 whitespace-nowrap transition-all duration-300 hover:text-secondary-200 focus-within:outline-0 focus-within:text-complementary-400"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="/noticias"
                    className="text-base font-normal text-complementary-400 whitespace-nowrap transition-all duration-300 hover:text-secondary-200 focus-within:outline-0 focus-within:text-complementary-400"
                  >
                    Noticias
                  </a>
                </li>
                <li>
                  <a
                    href="/documentacion"
                    className="text-base font-normal text-complementary-400 whitespace-nowrap transition-all duration-300 hover:text-secondary-200 focus-within:outline-0 focus-within:text-complementary-400"
                  >
                    Documentación
                  </a>
                </li>
                <li>
                  <a
                    href="/contacto"
                    className="text-base font-normal text-complementary-400 whitespace-nowrap transition-all duration-300 hover:text-secondary-200 focus-within:outline-0 focus-within:text-complementary-400"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:max-w-md mx-auto">
            <h2 className="text-lg text-center md:text-left font-medium text-white mb-7">
              Newsletter
            </h2>
            <div className="bg-zinc-800 rounded-sm p-5">
              <form action="#" className="flex flex-col gap-5">
                <div className="relative">
                  <label className="flex items-center mb-2 text-complementary-400 text-base font-medium">
                    Correo Electrónico
                  </label>
                  <input
                    type="text"
                    id="default-search"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full px-5 py-3 text-lg font-normal shadow-xs text-white bg-transparent border border-complementary-400 rounded-sm placeholder-complementary-400 focus:outline-none leading-relaxed focus:border-gray-300"
                    placeholder="Ingrese su correo electrónico"
                    required
                  />
                </div>
                <div className="flex flex-col min-[540px]:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={termsAccepted}
                      onChange={() => setTermsAccepted(!termsAccepted)}
                      className="hidden"
                    />
                    <label htmlFor="terms" className="cursor-pointer">
                      {termsAccepted ? (
                        <FiCheckSquare className="text-secondary-200 w-7 h-7" />
                      ) : (
                        <MdOutlineCropSquare className="text-gray-50 w-7 h-7" />
                      )}
                    </label>
                    <label
                      htmlFor="terms"
                      className="text-sm font-normal cursor-pointer text-complementary-400"
                    >
                      Acepto los{" "}
                      <a href="" className="text-complementary-200">
                        Términos y Condiciones
                      </a>{" "}
                      y las{" "}
                      <a href="" className="text-complementary-200">
                        Políticas de Privacidad
                      </a>
                    </label>
                  </div>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className={`w-full text-white text-base font-semibold py-3 px-6 flex items-center justify-center cursor-pointer ${
                      isSubscribed
                        ? "bg-primary-200 hover:bg-primary-300"
                        : "bg-secondary-200 hover:bg-secondary-300"
                    } focus:outline-none focus:ring-2 focus:ring-primary-100 transition-all duration-300 ${animationClass}`}
                  >
                    {isSubscribed && (
                      <FiCheckSquare className="text-secondary-200 w-7 h-7 mr-2" />
                    )}{" "}
                    {isSubscribed ? "Suscrito" : "Suscribirse"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-5 pt-7">
          <span className="text-sm font-normal text-complementary-400">
            <a href="/" className="">
              ©Towers Cem
            </a>{" "}
            2024, Todos los derechos reservados.
          </span>
          <div className="relative  text-gray-500 focus-within:text-gray-900 ">
            <div className="absolute inset-y-0 right-6 flex items-center pl-3 pointer-events-none ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M16.8192 5.15193L17.3925 4.59395L17.3836 4.58478L17.3743 4.5759L16.8192 5.15193ZM19.25 10.9796L20.0499 10.9904L20.0501 10.9776L20.0499 10.9648L19.25 10.9796ZM16.8481 16.8192L17.4061 17.3925L17.4152 17.3836L17.4241 17.3743L16.8481 16.8192ZM11.0204 19.25L11.0096 20.0499L11.0224 20.0501L11.0352 20.0499L11.0204 19.25ZM5.1808 16.8481L4.60752 17.4061L4.61645 17.4152L4.62566 17.4241L5.1808 16.8481ZM2.75 11.0204L1.95007 11.0096L1.9499 11.0224L1.95014 11.0352L2.75 11.0204ZM5.15193 5.1808L4.59395 4.60752L4.58478 4.61645L4.5759 4.62566L5.15193 5.1808ZM10.9796 2.75L10.9904 1.95007L10.9776 1.9499L10.9648 1.95014L10.9796 2.75ZM6.46726 3.90057L5.90927 3.32729L5.90927 3.32729L6.46726 3.90057ZM9.1444 2.78389L9.15917 3.58376L9.1444 2.78389ZM2.77481 9.18508L1.97488 9.17427L2.77481 9.18508ZM3.87823 6.50244L3.30219 5.9473L3.87823 6.50244ZM3.90057 15.5327L4.47385 14.9748L4.47385 14.9748L3.90057 15.5327ZM2.78389 12.8556L3.58376 12.8408L2.78389 12.8556ZM9.18508 19.2252L9.17427 20.0251L9.17427 20.0251L9.18508 19.2252ZM6.50244 18.1218L7.05759 17.5457L7.05759 17.5457L6.50244 18.1218ZM15.5327 18.0994L14.9748 17.5262L14.9748 17.5262L15.5327 18.0994ZM12.8556 19.2161L12.8704 20.016L12.8704 20.016L12.8556 19.2161ZM19.2252 12.8149L20.0251 12.8257L20.0251 12.8257L19.2252 12.8149ZM18.1218 15.4976L17.5457 14.9424L17.5457 14.9424L18.1218 15.4976ZM18.0994 6.46726L18.6727 5.90927L18.6727 5.90927L18.0994 6.46726ZM19.2161 9.1444L20.016 9.12963L20.016 9.12963L19.2161 9.1444ZM15.4976 3.87823L16.0527 3.30219L16.0527 3.30219L15.4976 3.87823ZM12.8149 2.77481L12.8257 1.97488L12.8149 2.77481ZM7.47127 8.25477C7.47127 8.69659 7.82944 9.05477 8.27127 9.05477C8.7131 9.05477 9.07127 8.69659 9.07127 8.25477H7.47127ZM10.4489 13.3571C10.4489 13.7989 10.807 14.1571 11.2489 14.1571C11.6907 14.1571 12.0489 13.7989 12.0489 13.3571H10.4489ZM10.9753 15.6237C10.5335 15.6237 10.1753 15.9819 10.1753 16.4237C10.1753 16.8656 10.5335 17.2237 10.9753 17.2237V15.6237ZM11.0246 17.2237C11.4664 17.2237 11.8246 16.8656 11.8246 16.4237C11.8246 15.9819 11.4664 15.6237 11.0246 15.6237V17.2237ZM14.9424 4.45426L16.2641 5.72797L17.3743 4.5759L16.0527 3.30219L14.9424 4.45426ZM16.2459 5.70992L17.5262 7.02524L18.6727 5.90927L17.3925 4.59395L16.2459 5.70992ZM18.4162 9.15917L18.4501 10.9944L20.0499 10.9648L20.016 9.12963L18.4162 9.15917ZM18.4501 10.9688L18.4253 12.8041L20.0251 12.8257L20.0499 10.9904L18.4501 10.9688ZM17.5457 14.9424L16.272 16.2641L17.4241 17.3743L18.6978 16.0527L17.5457 14.9424ZM16.2901 16.2459L14.9748 17.5262L16.0907 18.6727L17.4061 17.3925L16.2901 16.2459ZM12.8408 18.4162L11.0056 18.4501L11.0352 20.0499L12.8704 20.016L12.8408 18.4162ZM11.0312 18.4501L9.19589 18.4253L9.17427 20.0251L11.0096 20.0499L11.0312 18.4501ZM7.05759 17.5457L5.73595 16.272L4.62566 17.4241L5.9473 18.6978L7.05759 17.5457ZM5.75408 16.2901L4.47385 14.9748L3.32729 16.0907L4.60752 17.4061L5.75408 16.2901ZM3.58376 12.8408L3.54986 11.0056L1.95014 11.0352L1.98403 12.8704L3.58376 12.8408ZM3.54993 11.0312L3.57474 9.19589L1.97488 9.17427L1.95007 11.0096L3.54993 11.0312ZM4.45426 7.05759L5.72797 5.73595L4.5759 4.62566L3.30219 5.9473L4.45426 7.05759ZM5.70992 5.75408L7.02524 4.47385L5.90927 3.32729L4.59395 4.60752L5.70992 5.75408ZM9.15917 3.58376L10.9944 3.54986L10.9648 1.95014L9.12963 1.98403L9.15917 3.58376ZM10.9688 3.54993L12.8041 3.57474L12.8257 1.97488L10.9904 1.95007L10.9688 3.54993ZM7.02524 4.47385C7.62182 3.89319 7.77674 3.76056 7.95015 3.68823L7.3342 2.21154C6.814 2.42853 6.41685 2.83325 5.90927 3.32729L7.02524 4.47385ZM9.12963 1.98403C8.42143 1.99711 7.8544 1.99456 7.3342 2.21154L7.95015 3.68823C8.12355 3.6159 8.32681 3.59913 9.15917 3.58376L9.12963 1.98403ZM3.57474 9.19589C3.58599 8.36346 3.60176 8.16013 3.67323 7.98637L2.19351 7.37774C1.97911 7.899 1.98446 8.46601 1.97488 9.17427L3.57474 9.19589ZM3.30219 5.9473C2.81067 6.45732 2.40792 6.85647 2.19351 7.37774L3.67323 7.98637C3.7447 7.81261 3.87656 7.65703 4.45426 7.05759L3.30219 5.9473ZM4.47385 14.9748C3.89319 14.3782 3.76056 14.2233 3.68823 14.0499L2.21154 14.6658C2.42853 15.186 2.83325 15.5831 3.32729 16.0907L4.47385 14.9748ZM1.98403 12.8704C1.99711 13.5786 1.99456 14.1456 2.21154 14.6658L3.68823 14.0499C3.6159 13.8764 3.59913 13.6732 3.58376 12.8408L1.98403 12.8704ZM9.19589 18.4253C8.36346 18.414 8.16013 18.3982 7.98637 18.3268L7.37774 19.8065C7.899 20.0209 8.46601 20.0155 9.17427 20.0251L9.19589 18.4253ZM5.9473 18.6978C6.45732 19.1893 6.85647 19.5921 7.37774 19.8065L7.98637 18.3268C7.81261 18.2553 7.65703 18.1234 7.05759 17.5457L5.9473 18.6978ZM14.9748 17.5262C14.3782 18.1068 14.2233 18.2394 14.0499 18.3118L14.6658 19.7885C15.186 19.5715 15.5831 19.1668 16.0907 18.6727L14.9748 17.5262ZM12.8704 20.016C13.5786 20.0029 14.1456 20.0054 14.6658 19.7885L14.0499 18.3118C13.8764 18.3841 13.6732 18.4009 12.8408 18.4162L12.8704 20.016ZM18.4253 12.8041C18.414 13.6365 18.3982 13.8399 18.3268 14.0136L19.8065 14.6223C20.0209 14.101 20.0155 13.534 20.0251 12.8257L18.4253 12.8041ZM18.6978 16.0527C19.1893 15.5427 19.5921 15.1435 19.8065 14.6223L18.3268 14.0136C18.2553 14.1874 18.1234 14.343 17.5457 14.9424L18.6978 16.0527ZM17.5262 7.02524C18.1068 7.62182 18.2394 7.77674 18.3118 7.95015L19.7885 7.3342C19.5715 6.814 19.1668 6.41685 18.6727 5.90927L17.5262 7.02524ZM20.016 9.12963C20.0029 8.42143 20.0054 7.8544 19.7885 7.3342L18.3118 7.95015C18.3841 8.12355 18.4009 8.32681 18.4162 9.15917L20.016 9.12963ZM16.0527 3.30219C15.5427 2.81067 15.1435 2.40792 14.6223 2.19351L14.0136 3.67323C14.1874 3.7447 14.343 3.87656 14.9424 4.45426L16.0527 3.30219ZM12.8041 3.57474C13.6365 3.58599 13.8399 3.60176 14.0136 3.67323L14.6223 2.19351C14.101 1.97911 13.534 1.98446 12.8257 1.97488L12.8041 3.57474ZM9.07127 8.25477C9.07127 7.5843 9.31892 7.13758 9.64994 6.84876C9.99678 6.54614 10.4843 6.37635 11 6.37635C11.5156 6.37635 12.0031 6.54614 12.35 6.84876C12.681 7.13758 12.9286 7.5843 12.9286 8.25477H14.5286C14.5286 7.13963 14.0941 6.24714 13.4019 5.64315C12.7255 5.05296 11.8486 4.77635 11 4.77635C10.1513 4.77635 9.27445 5.05296 8.59803 5.64315C7.90579 6.24714 7.47127 7.13963 7.47127 8.25477H9.07127ZM12.9286 8.25477C12.9286 8.74708 12.8136 9.04092 12.6698 9.26294C12.5041 9.51866 12.2833 9.71487 11.9452 10.0281C11.629 10.3209 11.2348 10.6979 10.9354 11.2419C10.6292 11.7985 10.4489 12.4766 10.4489 13.3571H12.0489C12.0489 12.7074 12.1785 12.3016 12.3372 12.0132C12.5029 11.7122 12.7286 11.4833 13.0324 11.202C13.3141 10.941 13.7133 10.5949 14.0126 10.1329C14.3337 9.63724 14.5286 9.03802 14.5286 8.25477H12.9286ZM10.9753 17.2237H11.0246V15.6237H10.9753V17.2237Z"
                  fill="#6B7280"
                />
              </svg>
            </div>
            <button
              type="button"
              id="default-search"
              onClick={() => (window.location.href = "/contacto")}
              className="block w-full lg:min-w-[448px] pr-12 pl-6 py-3 text-base font-normal shadow-xs text-gray-50 bg-transparent border border-gray-700 rounded-sm placeholder-complementary-400 focus:outline-none leading-relaxed transition-all duration-500 "
            >
              Tiene alguna pregunta? Contactenos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
