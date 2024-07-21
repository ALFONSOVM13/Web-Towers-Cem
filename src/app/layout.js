import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Towers Cem",
  description: "Somos una cementera innovadora dedicada a la producción de cementos verdes, enfocados en la sostenibilidad y la reducción del impacto ambiental. Utilizando tecnologías avanzadas como X-CEM, donde incorporamos materiales reciclados y propiedades inteligentes en nuestros productos, permitiendo la absorción de CO₂ y contribuyendo a la lucha contra el cambio climático.",
  image: "/logo.png",
  favicon: "/src/app/icon.ico",
  color: "#000000",
  lang: "es",
  type: "website",
  url: "https://towerscem.com",
  siteName: "Towers Cem",
  keywords: "cemento, construcción, infraestructuras, sostenibilidad, calidad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Analytics/>
        {children}</body>     
    </html>
  );
}
