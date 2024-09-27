import QuoteSection from '@/components/quotesection/QuoteSection';

export const metadata = {
    title: "Cotizar - Towers Cem | Cementos verdes para un futuro sostenible",
    description: "Somos una cementera innovadora dedicada a la producción de cementos verdes y sostenibles. Solicita una cotización para productos que integran materiales reciclados y ayudan a reducir el CO₂ en el ambiente.",
    image: "/logo.png",
    favicon: "/src/app/icon.ico",
    color: "#000000",
    lang: "es",
    type: "website",
    url: "https://towerscem.com/cotizar",
    siteName: "Towers Cem",
    keywords: "towerscem, contacto, cemento, construcción, infraestructuras, sostenibilidad, cotización, calidad, materiales reciclados",
  };

const page = () => {
  return (
    <div className="">
      <QuoteSection/>
    </div>
  )
}

export default page