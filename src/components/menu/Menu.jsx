import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Menu = ({ active, setActive }) => {
  const pathname = usePathname();

  // Close menu when pathname changes
  useEffect(() => {
    setActive(false);
  }, [pathname]);

  useEffect(() => {
    // Toggle body overflow based on active state
    if (active) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");

      // Ensure smooth closing animation
      const timeout = setTimeout(() => {
        document.body.classList.remove("overflow-hidden");
      }, 500); // Adjust timeout to match transition duration

      return () => clearTimeout(timeout);
    }
  }, [active]);

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
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={150}
            />
          </Link>
        </li>
        <div className="flex gap-4">
          <Link
            href="/"
           
            className="text-complementary-200 hover:text-complementary-100 transition-colors hover:underline"
          >
            <Image
              src="/images/icons/IconoUSA.png"
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
