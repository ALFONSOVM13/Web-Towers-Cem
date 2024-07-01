import React from "react";
import Card from "../ui/Card";
import Card2 from "../ui/Card2";

const WhatWeDo = () => {
  return (
    <section className="bg-primary-900 h-screen bg-slate-300 text-primary-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          ¡CONÓCENOS!
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-complementary-300 leading-relaxed">
          En Towers Cem, desarrollamos cementos inteligentes y sostenibles que
          purifican el aire eliminando hasta un 23% de CO₂. Nos enfocamos en
          ofrecer soluciones que no solo son duraderas y de alta calidad, sino
          también amigables con el medio ambiente.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
          {/* <Card title="Prefabricados" bgImage="/images/prefabricados.jpg" />
          <Card title="Bloqueras" bgImage="/images/bloqueras.webp" />
          <Card title="Constructoras" bgImage="/images/constructoras.jpg" /> */}
          <Card2  title="CONSTRUCTORAS" bgImage="/images/constructoras.jpg"/>
          <Card2  title="PREFABRICADOS" bgImage="/images/prefabricados.jpg"/>
          <Card2  title="BLOQUERAS" bgImage="/images/bloqueras.webp"/>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
