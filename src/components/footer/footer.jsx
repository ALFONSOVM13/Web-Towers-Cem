import Link from "next/link";
import Image from "next/image";
import BrandSlider from "./BrandSlider";
import NewsletterSection from "../newsletter/NewsletterSection";

const LinkSection = ({ section }) => (
  <ul className="flex flex-col space-y-2 mb-4 lg:mb-0">
    {section.links.map((link, linkIdx) => (
      <li key={linkIdx}>
        <Link href={link.href}>
          <p
            className={`cursor-pointer ${
              link.extraClass || "hover:text-primary-100"
            }`}
          >
            {link.text}
          </p>
        </Link>
      </li>
    ))}
  </ul>
);

const SocialLink = ({ href, src, alt, text }) => (
  <Link href={href} passHref>
    <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
      <Image src={src} alt={alt} width={34} height={34} priority />
      <span>{text}</span>
    </div>
  </Link>
);

const Footer = () => (
  <footer className="bg-white text-gray-500 py-40 ">
    {/* Newsletter Section */}
    <NewsletterSection />
    {/* Logo Carousel */}
    <BrandSlider />

    {/* Link Sections */}
    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
      <div className="logo flex items-center justify-center mb-6 lg:mb-0 lg:justify-start">
        <img
          src="/isologotipo-footer.png"
          alt="Logo"
          className="w-32 h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 object-contain"
        />
      </div>
      <div className="links text-2xl flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
        {[
          {
            title: "Inicio",
            links: [
              { href: "/", text: "Inicio", extraClass: "text-primary-100" },
              { href: "/our-cement", text: "Nuestro Cemento" },
              { href: "/partners", text: "Aliados" },
              { href: "/where-to-buy", text: "Donde Comprar" },
            ],
          },
          {
            title: "Compañía",
            links: [
              {
                href: "/company",
                text: "Compañía",
                extraClass: "text-primary-100",
              },
              { href: "/about-us", text: "Nosotros" },
              { href: "/our-mission", text: "Nuestra Misión" },
              { href: "/team", text: "Equipo" },
              { href: "/contact", text: "Contacto" },
            ],
          },
          {
            title: "Recursos",
            links: [
              {
                href: "/resources",
                text: "Recursos",
                extraClass: "text-primary-100",
              },
              { href: "/news", text: "Noticias" },
              { href: "/sustainability", text: "Sostenibilidad" },
              { href: "/gallery", text: "Galería" },
            ],
          },
        ].map((section, idx) => (
          <LinkSection key={idx} section={section} />
        ))}
      </div>
      <div className=" text-2xl social-links flex flex-col space-y-4 mt-6 lg:mt-0 lg:ml-4">
        {[
          {
            href: "https://www.facebook.com",
            src: "/images/footer/facebook.png",
            alt: "Facebook",
            text: "Síguenos en Facebook",
          },
          {
            href: "https://www.instagram.com",
            src: "/images/footer/instagram.png",
            alt: "Instagram",
            text: "Síguenos en Instagram",
          },
          {
            href: "https://www.linkedin.com",
            src: "/images/footer/linkedin.png",
            alt: "LinkedIn",
            text: "Síguenos en LinkedIn",
          },
        ].map((social, idx) => (
          <SocialLink key={idx} {...social} />
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
