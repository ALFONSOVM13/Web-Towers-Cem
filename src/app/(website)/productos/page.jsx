import ProductSection from '@/components/productView/ProductSection';
import { products } from '@/services/products'

export const metadata = {
  title: "Nuestro Cemento - Towers Cem",
  description: "Somos una cementera innovadora dedicada a la producción de cementos verdes, enfocados en la sostenibilidad y la reducción del impacto ambiental. Utilizando tecnologías avanzadas como X-CEM, donde incorporamos materiales reciclados y propiedades inteligentes en nuestros productos, permitiendo la absorción de CO₂ y contribuyendo a la lucha contra el cambio climático.",
  image: "/logo.png",
  favicon: "/src/app/icon.ico",
  color: "#000000",
  lang: "es",
  type: "website",
  url: "https://towerscem.com",
  siteName: "Towers Cem",
  keywords: "towerscem, cemento, construcción, infraestructuras, sostenibilidad, calidad",
};

const page = () => {
   return (
     <ProductSection
     products={products}
     />
   )
}
export default page
