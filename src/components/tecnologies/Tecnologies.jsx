import React, { useState } from "react";
import Image from "next/image";
import Title from "../ui/Title";
import BentoGrid from "../ui/BentoGrid";

const Tecnologies = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const menuItems = ["Roadmap", "News", "Nuestros Proyectos", "Pruebas"];

  return (
    <div >

      <BentoGrid />
    </div>
  );
};

export default Tecnologies;
