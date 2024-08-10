"use client";

import React, { useState } from "react";
import Button from "../ui/Button";
import Swal from "sweetalert2";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: "Correo enviado",
          text: "Tu mensaje ha sido enviado correctamente",
          icon: "success",
          confirmButtonText: "OK",
          backdrop: `
            rgba(0,0,0,0.4)
          `,
        });

        setFormData({
          name: "",
          subject: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        Swal.fire({
          title: "Error",
          text: `Error enviando el correo: ${errorData.message}`,
          icon: "error",
          confirmButtonText: "OK",
          backdrop: `
            rgba(0,0,0,0.4)
          `,
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: `Hubo un problema al enviar el correo: ${error.message}`,
        icon: "error",
        confirmButtonText: "OK",
        backdrop: `
          rgba(0,0,0,0.4)
        `,
      });
    }
  };

  return (
    <div className="flex flex-col w-7/12 max-md:ml-0 max-md:w-full bg-complementary-300 border-2 border-solid border-slate-600">
      <div className="flex flex-col grow p-10 max-md:px-5 max-md:mt-10 max-md:max-w-full bg">
        <div className="flex flex-col text-white max-md:max-w-full">
          <h2 className="text-3xl font-semibold tracking-tight max-md:max-w-full">
            Contáctanos
          </h2>
          <p className="mt-2 text-base tracking-normal max-md:max-w-full">
            Podemos hacer de cada tonelada de cemento una contribución
            significativa hacia un mundo más saludable y resiliente.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col mt-10 text-base font-medium tracking-normal text-white text-opacity-60 max-md:mt-10 max-md:max-w-full"
        >
          <div className="flex gap-3.5 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="flex-1 justify-center items-start px-3.5 py-3 border border-solid bg-white bg-opacity-10 border-white border-opacity-20 max-md:pr-5"
              placeholder="Nombre"
              aria-label="Nombre"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="flex-1 justify-center items-start px-3.5 py-3 border border-solid bg-white bg-opacity-10 border-white border-opacity-20 max-md:pr-5"
              placeholder="Asunto"
              aria-label="Asunto"
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="justify-center items-start px-3.5 py-3 mt-3.5 whitespace-nowrap border border-solid bg-white bg-opacity-10 border-white border-opacity-20 max-md:pr-5 max-md:max-w-full"
            placeholder="Email"
            aria-label="Email"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="justify-center items-start px-3.5 py-3 mt-3.5 border border-solid bg-white bg-opacity-10 border-white border-opacity-20 max-md:pr-5 max-md:max-w-full"
            placeholder="Telefono"
            aria-label="Telefono"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="justify-center items-start px-3.5 py-3 mt-3.5 whitespace-nowrap border border-solid bg-white bg-opacity-10 border-white border-opacity-20 max-md:pr-5 max-md:max-w-full"
            placeholder="Mensaje"
            aria-label="Mensaje"
          ></textarea>
          <div className="flex justify-center items-center mt-3.5">
            <Button
              type="submit"
              className="px-2.5 py-3 text-white whitespace-nowrap rounded-md max-md:px-5 max-md:max-w-full"
            >
              ENVIAR
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
