import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { TiArrowSortedDown } from "react-icons/ti";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import { BiSolidDownArrowSquare } from "react-icons/bi";

const Menu = ({ active, setActive }) => {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (!active) {
      setDropdownOpen(false);
    }
  }, [active]);

  useEffect(() => {
    setActive(false);
  }, [pathname]);

  useEffect(() => {
    if (active) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");

      const timeout = setTimeout(() => {
        document.body.classList.remove("overflow-hidden");
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [active]);


//   <li className="mb-4 relative">
//   <button
//     onClick={handleDropdownToggle}
//     className="text-complementary-200 hover:text-complementary-400 transition-colors hover:underline flex justify-between items-center w-full"
//   >
//     Nuestro Cemento
//     <i className={ml-2 transition-transform duration-300 text-complementary-200 ${dropdownOpen ? "rotate-180" : ""}}><TiArrowSortedDown /> <HiOutlineArrowSmDown /> <BiSolidDownArrowSquare /></i>
//   </button>
//   <ul
//     className={`absolute left-0 top-full mt-2 w-full bg-complementary-100 text-primary-100 overflow-hidden rounded-lg shadow-lg transition-opacity duration-300 ease-in-out ${
//       dropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
//     }`}
//   >
//     <li className="px-4 py-2 hover:bg-complementary-400">
//       <Link href="/productos/uso-general" className="block">
//         Uso General
//       </Link>
//     </li>
//     <li className="px-4 py-2 hover:bg-complementary-400">
//       <Link href="/productos/uso-estructural" className="block">
//         Uso Estructural
//       </Link>
//     </li>
//   </ul>
// </li>

  return (
    <nav>
      {active && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setActive(false)}
        ></div>
      )}
      <ul
        className={`fixed font-title font-bold top-0 right-0 z-40 py-28 inset-y-0 w-full sm:w-1/3 bg-black text-white p-4 transform transition-transform duration-500 ease-in-out ${
          active ? "translate-x-0" : "translate-x-full"
        } ${active ? "visible" : "invisible"} flex flex-col items-center`}
      >
        {[
          { href: "/", label: "Inicio" },
          { href: "/crowdfunding", label: "Crowdfunding" },
          { href: "/historia", label: "Quienes Somos" },
          { href: "/products", label: "Nuestro Cemento" },
          { href: "/equipo-towers-cem", label: "Nuestro Equipo" },
          { href: "/contacto", label: "Contacto" },
          { href: "/noticias", label: "Noticias" },
        ].map((item, index) => (
          <li key={index} className="mb-4">
            <Link
              href={item.href}
              className="text-complementary-200 hover:text-complementary-400 transition-colors hover:underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li className="mb-4">
          <Link
            href="/"
            className="text-complementary-200 hover:text-complementary-400 transition-colors hover:underline flex items-center"
          >
            <Image src="/logo.png" alt="Logo" width={150} height={150} />
          </Link>
        </li>
        <div className="flex gap-4">
          <Link
            href="/"
            className="text-complementary-200 hover:text-complementary-100 transition-colors hover:underline"
          >
            <Image
              src="/images/icons/IconoUsa.png"
              alt="Icono USA"
              width={44}
              height={44}
            />
          </Link>
          <Link
            href="/"
            className="text-complementary-200 hover:text-complementary-100 transition-colors hover:underline"
          >
            <Image
              src="/images/icons/IconoSpain.png"
              alt="Icono Spain"
              width={44}
              height={44}
            />
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Menu;
