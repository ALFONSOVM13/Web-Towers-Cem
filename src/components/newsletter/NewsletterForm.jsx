"use client";
import { useState } from "react";
import CustomButton from "../ui/CustomButton";
import CustomImput from "../ui/CustomImput";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (email.trim() === "") {
      return console.log("Correo no válido");
    }

    // Validar que sea un correo válido

    // Enviar email
    console.log(email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-x-3 gap-y-4 text-pretty flex-1"
    >
      <CustomImput
        placeholder="Tu correo electrónico"
        className="flex-1 py-3"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <CustomButton className="bg-primary-300 rounded-3xl px-7 py-3">
        SUSCRIBIRME
      </CustomButton>
    </form>
  );
};

export default NewsletterForm;
