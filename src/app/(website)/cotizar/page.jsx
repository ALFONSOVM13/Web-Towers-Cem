import QuoteSection from '@/components/quotesection/QuoteSection';

export const metadata = {
  title: "Contacto - Towers Cem",
  description: "Somos una cementera innovadora dedicada a la producción de cementos verdes, enfocados en la sostenibilidad y la reducción del impacto ambiental. Utilizando tecnologías avanzadas como X-CEM, donde incorporamos materiales reciclados y propiedades inteligentes en nuestros productos, permitiendo la descomposición de CO₂ y contribuyendo a la lucha contra el cambio climático.",
  image: "/logo.png",
  favicon: "/src/app/icon.ico",
  color: "#000000",
  lang: "es",
  type: "website",
  url: "https://towerscem.com",
  siteName: "Towers Cem",
  keywords: "towerscem, contacto, cemento, construcción, infraestructuras, sostenibilidad, calidad",
};

const page = () => {
  return (
    <div className="">
      <QuoteSection/>
    </div>
  )
}

export default page