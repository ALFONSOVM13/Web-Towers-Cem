// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="bg-white text-gray-500 py-6 mt-8 border-t border-gray-700">
//       <div className="bg-primary-100 py-24 text-white px-4 mx-5 mt-32 rounded-3xl">
//         <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
//           <p className="mb-4 text-2xl font-content md:mb-0 md:mr-4 leading-loose">
//             Suscribete a nuestro newsletter para recibir articulos tecnicos y{" "}
//             <br />
//             novedades del sector de la construccion y la sostenibilidad.
//           </p>
//           <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
//             <input
//               type="email"
//               placeholder="Tu correo electrónico"
//               className="w-full sm:w-auto px-4 py-2 rounded-full text-gray-800 md:mr-2"
//             />
//             <button className="w-full sm:w-auto px-4 py-2 bg-primary-300 hover:bg-blue-700 rounded-full text-white md:mr-2">
//               Suscribirse
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between mt-24">
//         <div className="logo flex items-center justify-center mb-6 md:mb-0 md:justify-start">
//           <img
//             src="/isologotipo-footer.png"
//             alt="Logo"
//             className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
//           />
//         </div>
//         <div className="links flex flex-col md:flex-row md:space-x-16">
//           <ul className="flex flex-col space-y-2 mb-4 md:mb-0">
//             <li>
//               <Link href="/">
//                 <p className="cursor-pointer hover:text-gray-400">Inicio</p>
//               </Link>
//             </li>
//             <li>
//               <Link href="/our-cement">
//                 <p className="cursor-pointer hover:text-gray-400">
//                   Nuestro Cemento
//                 </p>
//               </Link>
//             </li>
//             <li>
//               <Link href="/partners">
//                 <p className="cursor-pointer hover:text-gray-400">Aliados</p>
//               </Link>
//             </li>
//             <li>
//               <Link href="/where-to-buy">
//                 <p className="cursor-pointer hover:text-gray-400">
//                   Donde Comprar
//                 </p>
//               </Link>
//             </li>
//           </ul>
//           <ul className="flex flex-col space-y-2 mb-4 md:mb-0">
//             <li>
//               <Link href="/company">
//                 <p className="cursor-pointer hover:text-gray-400">Compañía</p>
//               </Link>
//             </li>
//             <li>
//               <Link href="/about-us">
//                 <p className="cursor-pointer hover:text-gray-400">Nosotros</p>
//               </Link>
//             </li>
//             <li>
//               <Link href="/our-mission">
//                 <p className="cursor-pointer hover:text-gray-400">
//                   Nuestra Misión
//                 </p>
//               </Link>
//             </li>
//             <li>
//               <Link href="/team">
//                 <p className="cursor-pointer hover:text-gray-400">Equipo</p>
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact">
//                 <p className="cursor-pointer hover:text-gray-400">Contacto</p>
//               </Link>
//             </li>
//           </ul>
//           <ul className="flex flex-col space-y-2">
//             <li>
//               <Link href="/resources">
//                 <p className="cursor-pointer hover:text-gray-400">Recursos</p>
//               </Link>
//             </li>
//             <li>
//               <Link href="/news">
//                 <p className="cursor-pointer hover:text-gray-400">Noticias</p>
//               </Link>
//             </li>
//             <li>
//               <Link href="/sustainability">
//                 <p className="cursor-pointer hover:text-gray-400">
//                   Sostenibilidad
//                 </p>
//               </Link>
//             </li>
//             <li>
//               <Link href="/gallery">
//                 <p className="cursor-pointer hover:text-gray-400">Galería</p>
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="social-links flex flex-col space-y-4 mt-6 md:mt-0 md:ml-8">
//           <Link href="https://www.facebook.com" passHref>
//             <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
//               <img src="/facebook.png" alt="Facebook" className="w-6 h-6" />
//               <span>Síguenos en Facebook</span>
//             </div>
//           </Link>
//           <Link href="https://www.instagram.com" passHref>
//             <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
//               <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
//               <span>Síguenos en Instagram</span>
//             </div>
//           </Link>
//           <Link href="https://www.linkedin.com" passHref>
//             <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
//               <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
//               <span>Síguenos en LinkedIn</span>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import Link from "next/link";
// import { motion } from "framer-motion";

// const Footer = () => {

//     const slides = [
//       { icon: <img src="/51-labs.jpg"></img> },
//       { icon: <img src="/Cedex-logo.png"></img> },
//       { icon: <img src="/cleantech.png"></img> },
//       { icon: <img src="/collision.png"></img> },
//       { icon: <img src="/instituto-eduardo-torroja.png"></img> },
//       { icon: <img src="/Logo_uni-costa.png"></img> },
//       { icon: <img src="/Logo_uninorte_colombia.jpg"></img> },
//       { icon: <img src="/madrid-innovation-png"></img> },
//       { icon: <img src="/secot-jpg"></img> },
//     ];

//     const duplicatedSlides = [...slides, ...slides];

//   return (
//     <footer className="bg-white text-gray-500 py-6 mt-8 border-t border-gray-700">
//       <div className="bg-primary-100 py-20 text-white px-4 mx-5 mt-32 rounded-3xl">
//         <div className="container ml-16 flex flex-col md:flex-row items-center justify-between">
//           <p className="mb-4 text-2xl font-content md:mb-0 leading-loose">
//             Suscribete a nuestro newsletter para recibir articulos tecnicos y{" "}
//             <br />
//             novedades del sector de la construccion y la sostenibilidad.
//           </p>
//           <div className="flex flex-col sm:flex-row items-center mr-36 space-y-2 sm:space-y-0 sm:space-x-1 w-full md:w-auto">
//             <input
//               type="email"
//               placeholder="Tu correo electrónico"
//               className="w-full sm:w-auto px-4 py-2 rounded-full text-gray-800"
//             />
//             <button className="w-full sm:w-auto px-4 py-2 bg-primary-300 hover:bg-blue-700 rounded-full text-white">
//               Suscribirse
//             </button>
//           </div>
//         </div>
//       </div>
//       <div>
//         <motion.div
//           className="flex"
//           animate={{
//             x: ["0%", "-100%"],
//             transition: {
//               ease: "linear",
//               duration: 15,
//               repeat: Infinity,
//             },
//           }}
//         >
//           {duplicatedSlides.map((slide, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0"
//               style={{ width: `${100 / slides.length}%` }}
//             >
//               <div className="flex items-center justify-center h-full">
//                 {slide.icon}
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between mt-14">
//         <div className="logo flex items-center justify-center ml-14 mb-6 md:mb-0 md:justify-start">
//           <img
//             src="/isologotipo-footer.png"
//             alt="Logo"
//             className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
//           />
//         </div>
//         <div className="links flex flex-col md:flex-row md:space-x-16">
//           <ul className="flex flex-col space-y-2 mb-4 md:mb-0">
//             <li>
//               <Link href="/">
//                 <p className="cursor-pointer hover:text-gray-400">Inicio</p>
//               </Link>
//             </li>
//             <li>
//               <Link href="/our-cement">
//                 <p className="cursor-pointer hover:text-gray-400">
//                   Nuestro Cemento
//                 </p>
//               </Link>
//             </li>
//             <li>
//               <Link href="/partners">
//                 <p className="cursor-pointer hover:text-gray-400">Aliados</p>
//               </Link>
//             </li>
//             <li>
//               <Link href="/where-to-buy">
//                 <p className="cursor-pointer hover:text-gray-400">
//                   Donde Comprar
//                 </p>
//               </Link>
//             </li>
//           </ul>
//           <ul className="flex flex-col space-y-2 mb-4 md:mb-0">
//             <li>
//               <Link href="/company">
//                 <p className="cursor-pointer hover:text-gray-400">Compañía</p>
//               </Link>
//             </li>
//             <li>
//               <Link href="/about-us">
//                 <p className="cursor-pointer hover:text-gray-400">Nosotros</p>
//               </Link>
//             </li>
//             <li>
//               <Link href="/our-mission">
//                 <p className="cursor-pointer hover:text-gray-400">
//                   Nuestra Misión
//                 </p>
//               </Link>
//             </li>
//             <li>
//               <Link href="/team">
//                 <p className="cursor-pointer hover:text-gray-400">Equipo</p>
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact">
//                 <p className="cursor-pointer hover:text-gray-400">Contacto</p>
//               </Link>
//             </li>
//           </ul>
//           <ul className="flex flex-col space-y-2">
//             <li>
//               <Link href="/resources">
//                 <p className="cursor-pointer hover:text-gray-400">Recursos</p>
//               </Link>
//             </li>
//             <li>
//               <Link href="/news">
//                 <p className="cursor-pointer hover:text-gray-400">Noticias</p>
//               </Link>
//             </li>
//             <li>
//               <Link href="/sustainability">
//                 <p className="cursor-pointer hover:text-gray-400">
//                   Sostenibilidad
//                 </p>
//               </Link>
//             </li>
//             <li>
//               <Link href="/gallery">
//                 <p className="cursor-pointer hover:text-gray-400">Galería</p>
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="social-links flex flex-col space-y-4 mr-8 mt-6 md:mt-0 md:ml-8">
//           <Link href="https://www.facebook.com" passHref>
//             <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
//               <img
//                 src="/facebook.png"
//                 alt="Facebook"
//                 className="w-8 h-8 md:w-10 md:h-10"
//               />
//               <span>Síguenos en Facebook</span>
//             </div>
//           </Link>
//           <Link href="https://www.instagram.com" passHref>
//             <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
//               <img
//                 src="/instagram.png"
//                 alt="Instagram"
//                 className="w-8 h-8 md:w-10 md:h-10"
//               />
//               <span>Síguenos en Instagram</span>
//             </div>
//           </Link>
//           <Link href="https://www.linkedin.com" passHref>
//             <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
//               <img
//                 src="/linkedin.png"
//                 alt="LinkedIn"
//                 className="w-8 h-8 md:w-10 md:h-10"
//               />
//               <span>Síguenos en LinkedIn</span>
//             </div>
//           </Link>
//         </div>
//       </div>
//       <div className="mb-8"></div>
//     </footer>
//   );
// };

// export default Footer;

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const slides = [
    {
      icon: (
        <img
          src="/51-labs.jpg"
          alt="Logo 1"
          className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16"
        />
      ),
    },
    {
      icon: (
        <img
          src="/Cedex-logo.png"
          alt="Logo 2"
          className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16"
        />
      ),
    },
    {
      icon: (
        <img
          src="/cleantech.png"
          alt="Logo 3"
          className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16"
        />
      ),
    },
    {
      icon: (
        <img
          src="/collision.png"
          alt="Logo 4"
          className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16"
        />
      ),
    },
    {
      icon: (
        <img
          src="/instituto-eduardo-torroja.png"
          alt="Logo 5"
          className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16"
        />
      ),
    },
    {
      icon: (
        <img
          src="/Logo_uni-costa.png"
          alt="Logo 6"
          className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16"
        />
      ),
    },
    {
      icon: (
        <img
          src="/Logo_uninorte_colombia.jpg"
          alt="Logo 7"
          className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16"
        />
      ),
    },
  ];

  const duplicatedSlides = [...slides, ...slides];

  return (
    <footer className="bg-white text-gray-500 py-6 mt-8 border-t border-gray-700">
      <div className="bg-primary-100 py-20 text-white px-4 mx-5 mt-28 rounded-3xl">
        <div className="container ml-16 flex flex-col md:flex-row items-center justify-between">
          <p className="mb-4 text-2xl font-content md:mb-0 leading-loose">
            Suscribete a nuestro newsletter para recibir articulos tecnicos y{" "}
            <br />
            novedades del sector de la construccion y la sostenibilidad.
          </p>
          <div className="flex flex-col sm:flex-row items-center mr-36 space-y-2 sm:space-y-0 sm:space-x-1 w-full md:w-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="w-full sm:w-auto px-4 py-2 rounded-full text-gray-800"
            />
            <button className="w-full sm:w-auto px-4 py-2 bg-primary-300 hover:bg-blue-700 rounded-full text-white">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-hidden h-20 mt-8">
        {" "}
        {/* Contenedor reducido */}
        <motion.div
          className="flex"
          animate={{
            x: ["0%", "-100%"],
            transition: {
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedSlides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / slides.length}%` }}
            >
              <div className="flex items-center justify-center h-full">
                {slide.icon}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="logo flex items-center justify-center ml-14 mb-6 md:mb-0 md:justify-start">
          <img
            src="/isologotipo-footer.png"
            alt="Logo"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
          />
        </div>
        <div className="links flex flex-col md:flex-row md:space-x-16">
          <ul className="flex flex-col space-y-2 mb-4 md:mb-0">
            <li>
              <Link href="/">
                <p className="cursor-pointer text-title text-primary-100">
                  Inicio
                </p>
              </Link>
            </li>
            <li>
              <Link href="/our-cement">
                <p className="cursor-pointer hover:text-gray-400">
                  Nuestro Cemento
                </p>
              </Link>
            </li>
            <li>
              <Link href="/partners">
                <p className="cursor-pointer hover:text-gray-400">Aliados</p>
              </Link>
            </li>
            <li>
              <Link href="/where-to-buy">
                <p className="cursor-pointer hover:text-gray-400">
                  Donde Comprar
                </p>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col space-y-2 mb-4 md:mb-0">
            <li>
              <Link href="/company">
                <p className="cursor-pointer text-title text-primary-100">
                  Compañía
                </p>
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <p className="cursor-pointer hover:text-gray-400">Nosotros</p>
              </Link>
            </li>
            <li>
              <Link href="/our-mission">
                <p className="cursor-pointer hover:text-gray-400">
                  Nuestra Misión
                </p>
              </Link>
            </li>
            <li>
              <Link href="/team">
                <p className="cursor-pointer hover:text-gray-400">Equipo</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="cursor-pointer hover:text-gray-400">Contacto</p>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/resources">
                <p className="cursor-pointer text-title text-primary-100">
                  Recursos
                </p>
              </Link>
            </li>
            <li>
              <Link href="/news">
                <p className="cursor-pointer hover:text-gray-400">Noticias</p>
              </Link>
            </li>
            <li>
              <Link href="/sustainability">
                <p className="cursor-pointer hover:text-gray-400">
                  Sostenibilidad
                </p>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <p className="cursor-pointer hover:text-gray-400">Galería</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="social-links flex flex-col space-y-4 mr-8 mt-6 md:mt-0 md:ml-8">
          <Link href="https://www.facebook.com" passHref>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
              <img
                src="/facebook.png"
                alt="Facebook"
                className="w-8 h-8 md:w-10 md:h-10"
              />
              <span>Síguenos en Facebook</span>
            </div>
          </Link>
          <Link href="https://www.instagram.com" passHref>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
              <img
                src="/instagram.png"
                alt="Instagram"
                className="w-8 h-8 md:w-10 md:h-10"
              />
              <span>Síguenos en Instagram</span>
            </div>
          </Link>
          <Link href="https://www.linkedin.com" passHref>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
              <img
                src="/linkedin.png"
                alt="LinkedIn"
                className="w-8 h-8 md:w-10 md:h-10"
              />
              <span>Síguenos en LinkedIn</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="mb-8"></div>
    </footer>
  );
};

export default Footer;
