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
    <>
      {active && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setActive(false)}
        ></div>
      )}
      <ul
        className={`fixed font-title font-bold top-0 right-0 z-40 py-28 inset-y-0 w-full sm:w-1/3 bg-black text-white p-4 transform transition-transform duration-500 ease-in-out ${
          active ? "translate-x-0" : "translate-x-full"
        } ${active ? "visible" : "invisible"} flex flex-col items-center`} // Removed justify-center as we're now using flex-col
      >
        <li className="mb-4">
          <Link
            href="/"
            className="text-complementary-200 hover:text-complementary-400 transition-colors hover:underline"
          >
            Inicio
          </Link>
        </li>
        <li className="mb-4">
          <Link
            href="/products"
            className="text-complementary-200 hover:text-complementary-400 transition-colors hover:underline"
          >
            Nuestro Cemento
          </Link>
        </li>
        <li className="mb-4">
          <Link
            href="/team"
            className="text-complementary-200 hover:text-complementary-400 transition-colors hover:underline"
          >
            Nuestro Equipo
          </Link>
        </li>
        <li className="mb-4">
          <Link
            href="/contacto"
            className="text-complementary-200 hover:text-complementary-400 transition-colors hover:underline"
          >
            Contacto
          </Link>
        </li>
        <li className="mb-4">
          <Link
            href="/noticias"
            className="text-complementary-200 hover:text-complementary-400 transition-colors hover:underline"
          >
            Noticias
          </Link>
        </li>
        <li className="mb-4">
          <Link
            href="/newsletter"
            className="text-complementary-200 hover:text-complementary-400 transition-colors hover:underline"
          >
            Newsletter
          </Link>
        </li>
        <li className="mb-4">
          <Link
            href="/crowdfunding"
            className="text-complementary-200 hover:text-complementary-400 transition-colors hover:underline"
          >
            Crowdfunding
          </Link>
        </li>
        <li className="mb-4">
          <Link
            href="/"
            className="text-complementary-200 hover:text-complementary-400 transition-colors hover:underline flex items-center"
          >
            <Image
              src="/logo.png"
              alt="Icono de usuario"
              width={150}
              height={150}
            />
          </Link>
        </li>

        <div className="flex gap-4">
          <Link
            href="/login"
            className="text-complementary-200 hover:text-complementary-100 transition-colors hover:underline"
          >
            <Image
              src="/IconoUsa.png"
              alt="Icono de usuario"
              width={44}
              height={44}
            />
          </Link>
          <Link
            href="/login"
            className="text-complementary-200 hover:text-complementary-100 transition-colors hover:underline"
          >
            <Image
              src="/IconoSpain.png"
              alt="Icono de usuario"
              width={44}
              height={44}
            />
          </Link>
        </div>
      </ul>
    </>
  );
};

export default Menu;
