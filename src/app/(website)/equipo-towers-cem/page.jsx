import React from "react";
import { TeamSection } from "@/components/team/TeamSection";

export const metadata = {
  title: "Equipo - Towers Cem",
  description: "Somos una cementera innovadora dedicada a la producción de cementos verdes, enfocados en la sostenibilidad y la reducción del impacto ambiental. Utilizando tecnologías avanzadas como X-CEM, donde incorporamos materiales reciclados y propiedades inteligentes en nuestros productos, permitiendo la absorción de CO₂ y contribuyendo a la lucha contra el cambio climático.",
  image: "/logo.png",
  favicon: "/src/app/icon.ico",
  color: "#000000",
  lang: "es",
  type: "website",
  url: "https://towerscem.com",
  siteName: "Towers Cem",
  keywords: "towerscem, equipo towers cem, cemento, construcción, infraestructuras, sostenibilidad, calidad",
};

const page = () => {
  return (
    <TeamSection />
  );
};

export default page;
