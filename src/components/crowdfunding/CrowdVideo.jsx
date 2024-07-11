import React from "react";
import CustomButton from "../ui/CustomButton";
import Title from "../ui/Title";

const CrowdVideo = ({ onClickButton }) => {
  return (
    <section className="h-screen flex flex-col items-center justify-center p-4 bg-complementary-300">
      <Title text="NUESTRA CAMPAÑA DE CROWDFUNDING" size="large" className="text-complementary-200 p-10"/>
      
      <div className="w-full md:w-2/3 lg:w-1/2 h-3/4">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8D6RajGHWyM?si=6V-oxig4DWJFtk4M"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      
      
      <div className="bg-complementary-200 flex flex-col md:flex-row items-center justify-center p-6 w-full md:w-2/3 lg:w-1/2 space-y-4 md:space-y-0 md:space-x-10">
        <h1 className="text-3xl text-primary-100 font-bold text-center md:text-left">
          Ayúdanos a construir un mundo mejor
        </h1>
        <CustomButton
          type="primary"
          onClick={onClickButton}
          bgColor="#879e66"
          width="240px" // Ancho personalizado
          height="60px" // Alto personalizado
          textColor="#ffffff" // Color de texto personalizado
          textSize="1.7rem" // Personalizo tamaño de texto
          className="hover:bg-secondary-100"
        >
          Donar
        </CustomButton>
      </div>
    </section>
  );
};

export default CrowdVideo;