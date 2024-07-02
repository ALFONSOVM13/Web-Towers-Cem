"use client";

import React from "react";
import Collapsible from "../ui/Collapsible";

function Collapsable() {
  return (
    <div className="bg-complementary-200 p-8">
      <h1 className="text-primary-100 font-title font-semibold text-2xl mb-8">
        Conoce nuestra campaña
      </h1>

      <div className="space-y-4">
        <Collapsible title="¿Qué haremos?">
          <div className="text-primary-100 font-content bg-complementary-100 p-4">
            <p className="text-justify text-complementary-300">
              Incrementamos nuestra capacidad productiva realizando así la
              producción de nuestro primer lote. Cerraremos intenciones de
              ventas, nos expandiremos a más productores y puntos de
              distribución, todo esto aumentará nuestras ventas y empezará a
              posicionarnos en el mercado. Por otro lado, culminaremos nuestros
              procesos de certificaciones de calidad y producción, cumpliendo
              con todos los estándares establecidos por el mercado del cemento.
              Finalmente, con esta inversión podremos apalancarnos y poder
              realizar los siguientes pedidos, reinvirtiendo todas las
              ganancias.
            </p>
          </div>
        </Collapsible>
        <Collapsible title="¿Porqué confiar en nuestro proyecto?">
          <div className="text-primary-100 font-content bg-complementary-100 p-4">
            <p className="text-justify ">
              Confiar en TOWERS CEM significa apostar por una tecnología
              innovadora que no solo ofrece beneficios ambientales
              significativos, sino que también ventajas en términos de
              durabilidad, sostenibilidad y calidad de construcción. Nuestra
              tecnología cuenta con años de investigación y desarrollo con el
              objetivo de crear un producto mejorado y que brinde mejores
              resultados finales. Finalmente, contamos con un proceso de
              patente, lo cual nos da exclusividad para explotar esta tecnología
              por los siguientes 20 años.
            </p>
          </div>
        </Collapsible>
        <Collapsible title="¿Cómo lo haremos realidad?">
          <div className="text-primary-100 font-content bg-complementary-100 p-4">
            <p className="text-justify">
              Esta producción inicial de 500 toneladas nos permitirá tener
              suficiente inventario para satisfacer la demanda inicial de
              nuestros clientes y comenzar a posicionar nuestra marca en el
              mercado, asegurando un flujo de caja constante de ingresos para
              nuestros primeros meses de operación. Con estos pasos, podremos
              llevar a cabo nuestro plan para posicionar TOWERS CEM como un
              jugador importante en el sector de la construcción, aumentar
              nuestras ventas y expandir nuestra capacidad instalada para
              satisfacer la creciente demanda de nuestro producto.
            </p>
          </div>
        </Collapsible>
        <Collapsible title="Algunos riesgos">
          <div className="text-primary-100 font-content bg-complementary-100 p-4">
            <p className="text-justify">
              Aunque TOWERS CEM tiene muchos beneficios, también puede enfrentar
              algunos riesgos potenciales:
            </p>
            <ul className="text-justify">
              <li>
                &bull; <strong>Factores de mercado: </strong> Los cambios en la demanda del
                mercado de la construcción podrían afectar la aceptación y
                viabilidad comercial de nuestra tecnología. Por lo cual estamos
                abarcando e investigando suplir a un mercado primario, para así
                impactar en el proceso de sostenibilidad de otras empresas.
              </li>
              <li>
                &bull; <strong>Regulaciones y políticas:</strong> Cambios en las regulaciones
                gubernamentales relacionado con las emisiones de CO₂, la
                construcción sostenible o los estándares de calidad podrían
                impactar la capacidad de TOWERS CEM para operar y comercializar
                su tecnología.
              </li>
              <li>
                &bull; <strong>Percepción del consumidor:  </strong>A pesar de los beneficios
                ambientales y del rendimiento, nuestra tecnología XCEM podría
                enfrentar desafíos en términos de aceptación por parte de los
                consumidores.
              </li>
            </ul>
          </div>
        </Collapsible>
        <Collapsible title="Algunas ventajas">
          <div className="text-primary-100 font-content bg-complementary-100 p-4">
            <ul className="text-justify">
              <li>
                &bull; <strong>Diferencia competitiva:</strong> Nuestra
                tecnología XCEM ofrece ventajas únicas en términos de
                purificación del aire urbano y reducción de emisiones de CO₂.
                Esta diferenciación puede permitir a la empresa destacarse en un
                mercado altamente competitivo, captar la atención de los
                consumidores preocupados por el medio ambiente y ganar cuota de
                mercado frente a competidores que ofrecen productos
                convencionales.
              </li>
              <li>
                &bull; <strong>Ahorro de costos a largo plazo:</strong> Las
                propiedades mejoradas de durabilidad y bajo mantenimiento de
                nuestro cemento significan que las estructuras construidas con
                este material requieren menos intervenciones de mantenimiento a
                lo largo de su vida útil. Esto se traduce en ahorros
                significativos para las empresas constructoras y los
                propietarios de proyectos, ya que reducen los costos asociados
                con reparaciones y mantenimiento continuo.
              </li>
              <li>
                &bull; <strong>Mejora de la imagen corporativa:</strong>{" "}
                Utilizar nuestro cemento puede ayudar a las empresas
                constructoras a mejorar su imagen corporativa al demostrar un
                compromiso con la innovación y la sostenibilidad ambiental. Esto
                puede ser un factor diferenciador importante al competir por
                contratos y proyectos, así como al atraer a clientes que valoran
                la responsabilidad ambiental.
              </li>
            </ul>
          </div>
        </Collapsible>
        <Collapsible title="Impacto positivo de nuestro proyecto ">
          <div className="text-primary-100 font-content bg-complementary-100 p-4">
            <p className="font-title font-bold">Social</p>
            <ul className="text-justify">
              <li className="pl-6">&bull; Generación de empleo</li>
              <li className="pl-6">&bull; Mejora de la salud pública</li>
              <li className="pl-6">
                &bull; Fomento de la educación y la innovación
              </li>
            </ul>
            <p className="font-title font-bold">Sostenibilidad</p>
            <ul className="text-justify">
              <li className="pl-6">&bull; Reducción de emisiones de CO2</li>
              <li className="pl-6">
                &bull; Construcciones verdes y sostenibles
              </li>
              <li className="pl-6">&bull; Conservación de recursos</li>
            </ul>
            <p className="font-title font-bold">Financiero</p>
            <ul className="text-justify">
              <li className="pl-6">
                &bull; Generación de ingresos a nuestro país
              </li>
              <li className="pl-6">&bull; Atracción de inversiones</li>
              <li className="pl-6">
                &bull; Mejora en la rentabilidad de los proyectos de
                construcción
              </li>
            </ul>
          </div>
        </Collapsible>
      </div>
    </div>
  );
}

export default Collapsable;
