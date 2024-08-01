import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";
import Image from "next/image";
import "./style.css";

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
    logo: "/logo.png",
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
    "cemento, construcción, cemento colombia, sostenibilidad, calidad, innovación, tecnología, X-CEM, Towers Cem",
};

export default function RootLayout({ children }) {
  const isMaintenanceMode = true; // Cambia esto a `false` cuando salgas del modo de mantenimiento

  return (
    <html lang="es">
      <body className={inter.className}>
      <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-431529618`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-431529618', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Analytics />
        {isMaintenanceMode ? (
          <div className="relative h-screen bg-cover bg-center">
            <Image
              src="/images/coming-soon.png"
              alt="Descripción de la imagen"
              layout="fill"
              objectFit="cover"
              priority
              className="w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-50 pb-24">
              <div className="loader">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
              <h1 className="text-3xl font-title font-bold text-white text-center md:text-3xl lg:text-4xl mb-4">
                ¡Estamos creando contenido valioso para ti, espéralo pronto!
              </h1>
            </div>
          </div>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
