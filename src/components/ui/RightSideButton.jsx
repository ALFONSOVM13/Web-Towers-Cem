import React from "react";
import "./RightSideButton.scss";

const RightSideButton = () => {
  const handleClick = () => {
    // Aquí colocas el enlace a WhatsApp
    const whatsappUrl = "https://wa.me/+573225098967"; // Reemplaza con tu número de WhatsApp
    window.open(whatsappUrl, "_blank"); // Abre el enlace en una nueva pestaña
  };
  return (
    <button className="sticky-container" onClick={handleClick}>
      <ul className="sticky">
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-whatsapp icon-whatsapp"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
          </svg>
          <p>Whatsapp</p>
        </li>
      </ul>
    </button>
  );
};

export default RightSideButton;
