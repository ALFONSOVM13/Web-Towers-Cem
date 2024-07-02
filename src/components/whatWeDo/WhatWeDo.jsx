import * as React from "react";
import Title from "../ui/Title";
import Card from "../ui/Card";


function WhatWeDo() {
 
  const cardsData = [
    {
      title: "Constructoras",
      bgImage: "/images/constructoras.jpg",
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacus erat, ornare vitae lacinia quis'
     
    },
    {
      title: "Prefabricados",
      bgImage: "/images/prefabricados.jpg",
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacus erat, ornare vitae lacinia quis'
    },
    {
      title: "Bloqueras",
      bgImage: "/images/bloqueras.webp",
     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacus erat, ornare vitae lacinia quis'
    }
  ];

  return (
    <main className="flex flex-col px-5">
   <header className="text-complementary-300 font-title text-xl px-4 md:px-0 max-w-7xl mx-auto mt-10">
    ¡En Towers Cem, desarrollamos cementos inteligentes y sostenibles que purifican el aire eliminando hasta un 23% de CO₂. 
    Nos enfocamos en ofrecer soluciones que no solo son duraderas y de alta calidad, sino también amigables con el medio ambiente.!
</header>

      <section className="mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-xl text-gray-500 max-md:mt-10 max-md:max-w-full ">
            <Title text="¡CONÓCENOS!" size="large" className='ml-96'/>
            <div className="gap-8 mt-8 ml-80 ">
            
            {cardsData.map((card, index) => (
            <Card key={index} title={card.title} bgImage={card.bgImage} />
          ))}
            </div>
            </div>
          </article>
          <aside className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a340c6e6820c138dd15cfb5067c78ccbd9ec58a52decb7eba462ded239579926?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
                className="grow mt-2 w-1/2  shadow-lg max-md:mt-10 max-md:max-w-full ml-32 rounded-2xl"
                alt="Descriptive image of our product or service"
                />

          </aside>
        </div>
      </section>
    </main>
  );
}

export default WhatWeDo;
