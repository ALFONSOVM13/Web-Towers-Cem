import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Towers Cem | Construyendo ciudades que respiran",
  description:
    "Líderes en innovación sostenible, fabricamos cementos verdes que redefinen la construcción. Nuestra tecnología X-CEM incorpora materiales reciclados y propiedades inteligentes, permitiendo la absorción de CO₂ y creando edificaciones más sostenibles. Contribuimos a un futuro más verde, construyendo un mundo mejor.",
  image: "/logo.png",
  favicon: "/src/app/icon.ico",
  color: "#000000",
  lang: "es",
  type: "website",
  url: "https://towerscem.com",
  author: "Equipo Towers Cem",
  robots: "index, follow",
  schema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Towers Cem",
    url: "https://towerscem.com",
    logo: "https://towerscem.com/logo.png",
    description:
      "Líderes en innovación sostenible, fabricamos cementos verdes que redefinen la construcción. Nuestra tecnología X-CEM incorpora materiales reciclados y propiedades inteligentes, permitiendo la absorción de CO₂ y creando edificaciones más sostenibles. Contribuimos a un futuro más verde, construyendo un mundo mejor.",
    sameAs: [
      "https://www.facebook.com/towerscem",
      "https://www.instagram.com/towerscem",
      "https://www.linkedin.com/company/towerscem",
      "https://twitter.com/towerscem",
      "https://www.youtube.com/channel/UCvzWZ8H1p5gZ3eY2QJv8j8Q",
    ],
  },
  siteName: "Towers Cem",
  keywords:
    "cemento, construcción, infraestructuras, sostenibilidad, calidad, innovación, tecnología, X-CEM, Towers Cem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
