"use client";

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
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

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
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
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Tienes preguntas o comentarios?</h2>
      <p className="text-lg text-gray-600 mb-6">
      Estamos para ayudarte, envía tu mensaje a través de el siguiente formulario.      </p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre"
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Asunto"
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <PhoneInput
          country={"co"}
          value={formData.phone}
          onChange={handlePhoneChange}
          inputStyle={{
            width: "100%",
            height: "3rem",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
            outline: "none",
            transition: "all 0.3s",
          }}
          inputClass="focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Mensaje"
          rows="6"
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <div className="flex justify-center">
          <Button
            type="submit"
          >
            ENVIAR
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
