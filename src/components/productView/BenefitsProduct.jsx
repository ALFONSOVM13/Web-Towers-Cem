

const BenefitsProduct = () => {
   return (
      <section className="px-10 py-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-title font-bold text-primary-100 pb-6">BENEFICIOS DE X-CEM</h2>
          <p className="text-lg font-content text-complementary-300 mt-2">Descubre cómo X-Cem puede transformar tus proyectos de construcción.</p>
        </div>
        <div className="flex flex-wrap justify-around items-center">
          <div className="flex-1 max-w-md p-4">
            <img src="/images/products/1TC_PACK_BLANCO_FRONTAL.png" alt="X-Cem Image" className="w-full" />
          </div>
          <div className="flex-1 max-w-md p-4">
            <ul className=" list-inside font-content text-primary-100 text-lg list-none">
              <li>Propiedades inteligentes</li>
              <li>Alta resistencia en menor tiempo.</li>
              <li>Nuevos materiales de fabricación</li>
              <li>Cuenta con propiedades auto limpiantes</li>
              <li>Altos niveles de durabilidad y sostenibilidad</li>
              <li>Ayuda a reducir las emisiones de CO₂</li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
export default BenefitsProduct