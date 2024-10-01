"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import classNames from "classnames";
import { IoMdClose } from "react-icons/io";
import { FiFileText } from "react-icons/fi";
import Button from "./Button";
import "./RightSideButton.scss";
import Swal from "sweetalert2";
import { FiCheckSquare } from "react-icons/fi";
import { MdOutlineCropSquare } from "react-icons/md";

const QuoteModal = ({ isOpen, onClose }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [formData, setFormData] = useState({
    clientType: "",
    name: "",
    lastName: "",
    email: "",
    telephone: "",
    requestType: "",
    details: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      Swal.fire({
        title: "Error",
        text: "Debes aceptar los términos y condiciones para continuar.",
        icon: "error",
        confirmButtonText: "Entendido",
        backdrop: `rgba(0,0,0,0.3)`,
        customClass: {
          container: "my-swal-container",
          title: "my-swal-title",
          text: "my-swal-text",
        },
      });
      return;
    }

    try {
      const response = await fetch("/api/sendCotizacion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: "¡Correo enviado!",
          text: "Tu mensaje ha sido enviado correctamente.",
          icon: "success",
          confirmButtonText: "¡Genial!",
          backdrop: `rgba(0,0,0,0.3)`,
          customClass: {
            container: "my-swal-container",
            title: "my-swal-title",
            text: "my-swal-text",
          },
        });
        // Limpia el formulario y cierra el modal o formulario
        setFormData({
          clientType: "",
          name: "",
          lastName: "",
          email: "",
          telephone: "",
          requestType: "",
          details: "",
        });
        onClose();
      } else {
        const errorData = await response.json();
        Swal.fire({
          title: "Error",
          text: `Error enviando el correo: ${errorData.message}`,
          icon: "error",
          confirmButtonText: "Entendido",
          backdrop: `rgba(0,0,0,0.3)`,
          customClass: {
            container: "my-swal-container",
            title: "my-swal-title",
            text: "my-swal-text",
          },
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: `Hubo un problema al enviar el correo: ${error.message}`,
        icon: "error",
        confirmButtonText: "Entendido",
        backdrop: `rgba(0,0,0,0.3)`,
        customClass: {
          container: "my-swal-container",
          title: "my-swal-title",
          text: "my-swal-text",
        },
      });
    }
  };

  return (
    <div
    className={`fixed -bottom-20 -right-2 shadow-lg w-full z-[1000] ${
      isOpen ? 'animate-jump-in' : 'animate-jump-out'
    }`}
  >
      <div className="bg-white   shadow-lg max-w-sm w-full h-full">
        <div className="flex bg-customGreen items-center justify-between p-2 gap-4">
          <FiFileText className="text-complementary-200 w-8 h-8" />
          <h2 className="text-sm text-complementary-200 font-bold">
            Solicitar una Cotización
          </h2>
          <button onClick={onClose}>
            <IoMdClose className="w-8 h-8 text-complementary-200" />
          </button>
        </div>

        <form className="p-4">
          <div className="mb-2">
            <select
              id="clientType"
              className="w-full border border-gray-300 p-2 select-placeholder"
              defaultValue=""
              onChange={(e) =>
                setFormData({ ...formData, clientType: e.target.value })
              }
            >
              <option value="" disabled className="placeholder-option">
                Soy un cliente:
              </option>
              <option value="Prefabricados en concreto">
                Prefabricados en concreto
              </option>
              <option value="Constructora">Constructora</option>
              <option value="Distribuidor de materiales de construcción">
                Distribuidor de materiales de construcción
              </option>
              <option value="Concretera">Concretera</option>
            </select>
          </div>

          <div className="mb-2">
            <div className="flex flex-row gap-4">
              <input
                id="name"
                type="text"
                className="w-full border border-gray-300  p-2"
                placeholder="Nombre"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="text"
                className="w-full border border-gray-300  p-2"
                placeholder="Apellido"
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
          </div>
          <div className="mb-2">
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300  p-2"
              placeholder="Correo Electrónico"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <input
              id="telephone"
              type="tel"
              className="w-full border border-gray-300  p-2"
              placeholder="Teléfono"
              onChange={(e) =>
                setFormData({ ...formData, telephone: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <select
              id="tipoSolicitud"
              className="w-full border text-complementary-300 border-gray-300 p-2 select-placeholder"
              defaultValue=""
              onChange={(e) =>
                setFormData({ ...formData, requestType: e.target.value })
              }
            >
              <option value="" disabled className="placeholder-option">
                Tipo de Solicitud:
              </option>
              <option value="Proyectos">Proyectos </option>
              <option value="Cotización de Productos">
                Cotización de Productos
              </option>
              <option value="Información de Productos">
                {" "}
                Información de Productos
              </option>
            </select>
          </div>
          <div className="mb-2">
            <textarea
              id="details"
              className="w-full border border-gray-300  p-2"
              rows="4"
              placeholder="Ingrese los detalles de la cotización"
              onChange={(e) =>
                setFormData({ ...formData, details: e.target.value })
              }
            />
          </div>

          <div className="flex items-center gap-2 mb-2  ">
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
                <MdOutlineCropSquare className="text-complementary-300 w-7 h-7" />
              )}
            </label>
            <label
              htmlFor="terms"
              className="text-sm font-normal cursor-pointer text-complementary-300"
            >
              He leido y acepto el{" "}
              <a
                href="/terminos-y-condiciones"
                target="_blank"
                className="text-secondary-200"
              >
                tratamiento de mis datos personales
              </a>
            </label>
          </div>

          <div className="flex items-center justify-center">
            <Button onClick={handleSubmit} type="submit">
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const RightSideButton = () => {
  const [isOpenContainer, setIsOpenContainer] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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

  //abre la modal del formulario de cotizacion y cierra el menu, tienes que hacer la modal de cotizacion
  const openContact = () => {
    setModalOpen(true);
  };

  return (
    <div className="fixed right-4 bottom-4 z-[40]">
      <button
        className="bg-white border-none p-2 cursor-pointer flex items-center justify-center relative z-[30]"
        onClick={handleClick}
      >
        {!isOpenContainer ? (
          <Image
            src="/images/icons/contacto.svg"
            alt="Contacto"
            title="Contacto"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 stroke-[#000000]"
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
              "fixed top-0 left-0 w-full h-full bg-[#000000] opacity-80 z-[-10] backdrop-blur-md",
              {
                "animate-fadeIn animate-duration-1000": isOpenContainer,
                "animate-fadeOut": !isOpenContainer,
              }
            )}
            onClick={handleClick}
          ></div>
          <div
            className={classNames(
              "absolute bottom-20 gap-4 right-0 z-[30] flex flex-col items-center w-96 transition-transform duration-300",
              {
                "animate-fade-down": !isOpenContainer,
                "animate-fade-up animate-duration-[1500ms] animate-ease-out": isOpenContainer,
              }
            )}
          >
            <div className="flex flex-row items-center justify-end gap-3 w-full">
              <p className="text-complementary-200 font-title text-xl md:text-2xl">
                Solicitar una cotización
              </p>
              <button
                onClick={openContact}
                className="bg-white border-none p-2 cursor-pointer flex items-center justify-center"
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 stroke-[#000000]"
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

            <QuoteModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
            />

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
                    className="w-12 h-12 stroke-[#000000]"
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
