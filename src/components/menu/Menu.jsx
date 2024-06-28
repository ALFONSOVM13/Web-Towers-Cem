"use client"; // Include this directive at the top

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./Menu.scss";

const Menu = ({ active, setActive }) => {
  const pathname = usePathname();
  useEffect(() => {
    setActive(false);
  }, [pathname]);

  return (
    <ul className={`menu ${active ? "active" : ""}`}>
      <li>
        <Link href="/">Inicio</Link>
      </li>
      <li>
        <Link href="/">Contacto</Link>
      </li>
      <li>
        <Link href="/">Noticias</Link>
      </li>
    </ul>
  );
};

export default Menu;
