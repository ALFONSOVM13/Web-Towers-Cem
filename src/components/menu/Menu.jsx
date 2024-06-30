"use client"; // Include this directive at the top

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./styles.scss"

const Menu = ({ active, setActive }) => {
  const pathname = usePathname();
  useEffect(() => {
    setActive(false);
  }, [pathname]);

  return (
    <ul className={`menu ${active ? "active" : ""}`}>
      <li>
        <Link href="/" className="text-complementary-200">Inicio</Link>
      </li>
      <li>
        <Link href="/" className="text-complementary-200">Contacto</Link>
      </li>
      <li>
        <Link href="/" className="text-complementary-200">Noticias</Link>
      </li>
    </ul>
  );
};

export default Menu;
