import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import Image from "next/image";
import "./globals.css";
import "./style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Towers Cem | Cemento Sostenible para Ciudades que Respiran",
  description:
    "Líder en cementos ecológicos con tecnología X-CEM. En Towers Cem fabricamos cementos verdes que descomponen CO₂ y usamos materiales reciclados para edificaciones sostenibles. Construimos el futuro con soluciones que mejoran la calidad del aire urbano.",
  color: "#000000",
  lang: "es",
  type: "website",
  url: "https://towerscem.com",
  author: "Equipo Towers Cem",
  robots: "index, follow",
  siteName: "Towers Cem",
  keywords:
    "cemento, construcción, cemento ecológico, sostenibilidad, tecnología X-CEM, cemento verde, Towers Cem, innovación en construcción",
  openGraph: {
    title: "Towers Cem | Construyendo ciudades que respiran",
    description:
      "Somos una cementera innovadora líderes en innovación sostenible, fabricamos cementos verdes que redefinen la construcción.",
    url: "https://towerscem.com",
    type: "website",
    images: [
      {
        url: "https://towerscem.com/images/OG.PNG",
        width: 1200,
        height: 630,
        alt: "Towers Cem Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Towers Cem | Construyendo ciudades que respiran",
    description:
      "Somos una cementera innovadora líderes en innovación sostenible, fabricamos cementos verdes que redefinen la construcción.",
    images: ["https://towerscem.com/images/OG.PNG"],
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Towers Cem",
    url: "https://towerscem.com",
    logo: "https://towerscem.com/images/OG.PNG", // Asegúrate de que la URL sea absoluta
    description:
      "Líderes en innovación sostenible,fabricamos cementos verdes que redefinen la construcción.Nuestra tecnología X-CEM incorpora materiales reciclados y propiedades inteligentes, permitiendo la descomposición de CO₂ y creando edificaciones más sostenibles.",
    sameAs: [
      "https://www.instagram.com/towerscem",
      "https://www.linkedin.com/company/towerscem",
      "https://www.youtube.com/@towerscemento",
    ],
  },
};

export default function RootLayout({ children }) {
  const isMaintenanceMode = false;
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://towerscem.com" />
      </head>

      <body className={inter.className}>
        <Script
          async
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-9866W71ET0`}
        />
        <Script
          async
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9866W71ET0', {
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
