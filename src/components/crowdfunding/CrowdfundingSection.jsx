import React from "react";
import CrowdVideo from "./CrowdVideo";
import Collapsable from "./Collapsable";
import Carrusel from "./Carrusel";
import Title from "../ui/Title";

const CrowdfundingSection = () => {
  return (
    <>
      <CrowdVideo />
      <div className="flex flex-col items-center gap-8 p-8 bg-gray-100">

        <Title
          text="La Vaki TOWERS CEM"
          className="text-center text-3xl md:text-4xl lg:text-5xl"
        />
        <p className="text-center text-lg md:text-xl lg:text-2xl">
          ¡Ayúdanos a construir el futuro!
        </p>
      <iframe
        id="vakiIframe"
        title="Construyendo el Futuro con X-Cem: Ayúdanos a Hacerlo Realidad"
        src="https://vaki.co/iframe/Oz8xpMtjZTxmk1b25kYJ"
        className="w-full max-w-3xl h-[600px] border-none rounded-lg shadow-lg md:w-4/5 lg:w-3/5"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </div>

      <Collapsable />
      <Carrusel />
    </>
  );
};

export default CrowdfundingSection;
