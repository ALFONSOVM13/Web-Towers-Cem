"use client";
import { useState } from "react";
import { FiCheckSquare, FiFileText } from "react-icons/fi";
import { MdOutlineCropSquare } from "react-icons/md";
import Button from "../ui/Button";
import Swal from "sweetalert2"; // Asegúrate de que esta línea esté presente si usas Swal

const QuoteSection = () => {
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
        setFormData({
          clientType: "",
          name: "",
          lastName: "",
          email: "",
          telephone: "",
          requestType: "",
          details: "",
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="bg-white rounded-3xl w-full max-w-md flex flex-col items-center shadow-lg  my-20 mx-4">
        <div className="flex w-full rounded-t-xl bg-customGreen text-white p-4  mb-4 items-center gap-2">
          <FiFileText className="text-complementary-200 w-8 h-8" />
          <h2 className="text-sm text-complementary-200 font-bold">
            Solicitar una Cotización
          </h2>
        </div>

        <form className="w-full p-2 md:p-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <select
              id="clientType"
              className="w-full border border-gray-300 p-2 rounded-md"
              defaultValue=""
              onChange={(e) =>
                setFormData({ ...formData, clientType: e.target.value })
              }
            >
              <option value="" disabled>
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

          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              id="name"
              type="text"
              className="border border-gray-300 p-2 w-full rounded-md"
              placeholder="Nombre"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="text"
              className="border border-gray-300 p-2 w-full rounded-md"
              placeholder="Apellido"
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <input
              id="email"
              type="email"
              className="border border-gray-300 p-2 w-full rounded-md"
              placeholder="Correo Electrónico"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <input
              id="telephone"
              type="tel"
              className="border border-gray-300 p-2 w-full rounded-md"
              placeholder="Teléfono"
              onChange={(e) =>
                setFormData({ ...formData, telephone: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <select
              id="tipoSolicitud"
              className="w-full border border-gray-300 p-2 rounded-md"
              defaultValue=""
              onChange={(e) =>
                setFormData({ ...formData, requestType: e.target.value })
              }
            >
              <option value="" disabled>
                Tipo de Solicitud:
              </option>
              <option value="Proyectos">Proyectos</option>
              <option value="Cotización de Productos">
                Cotización de Productos
              </option>
              <option value="Información de Productos">
                Información de Productos
              </option>
            </select>
          </div>

          <div className="mb-4">
            <textarea
              id="details"
              className="border border-gray-300 p-2 w-full rounded-md"
              rows="4"
              placeholder="Ingrese los detalles de la cotización"
              onChange={(e) =>
                setFormData({ ...formData, details: e.target.value })
              }
            />
          </div>

          <div className="flex items-center gap-2 mb-4">
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
              He leído y acepto el{" "}
              <a
                href="/politica-de-datos"
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

export default QuoteSection;
