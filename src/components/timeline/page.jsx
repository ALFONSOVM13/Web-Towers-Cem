"use client";
import React, { useEffect, useRef } from "react";
import $ from "jquery";
import Image from "next/image";
import "./style.scss";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

const Timeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    (function ($) {
      $.fn.timeline = function () {
        var selectors = {
          id: $(this),
          item: $(this).find(".timeline-item"),
          activeClass: "timeline-item--active",
          img: ".timeline__img",
        };
        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css(
          "background-image",
          "url(" + selectors.item.first().find(selectors.img).attr("src") + ")"
        );
        var itemLength = selectors.item.length;
        $(window).scroll(function () {
          var max, min;
          var pos = $(this).scrollTop() + 250;
          selectors.item.each(function (i) {
            min = $(this).offset().top;
            max = $(this).height() + $(this).offset().top;
            if (i === itemLength - 2 && pos > min + $(this).height() / 2) {
              selectors.item.removeClass(selectors.activeClass);
              selectors.id.css(
                "background-image",
                "url(" +
                  selectors.item.last().find(selectors.img).attr("src") +
                  ")"
              );
              selectors.item.last().addClass(selectors.activeClass);
            } else if (pos <= max - 40 && pos >= min) {
              selectors.id.css(
                "background-image",
                "url(" + $(this).find(selectors.img).attr("src") + ")"
              );
              selectors.item.removeClass(selectors.activeClass);
              $(this).addClass(selectors.activeClass);
            }
          });
        });
      };
    })($);

    // Inicializa el timeline
    $("#timeline-1").timeline();

    // Cleanup function
    return () => {
      $(window).off("scroll");
    };
  }, []);

  const handleYearClick = (index) => {
    if (timelineRef.current) {
      const item =
        timelineRef.current.querySelectorAll(".timeline-item")[index];
      item.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollTo = (direction) => {
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll(".timeline-item");
      const activeIndex = Array.from(items).findIndex((item) =>
        item.classList.contains("timeline-item--active")
      );

      let newIndex = direction === "up" ? activeIndex - 1 : activeIndex + 1;
      newIndex = Math.max(0, Math.min(newIndex, items.length - 1));

      items[newIndex].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="timeline-page">
      <div className="fixed inset-y-1/2 left-10 flex flex-col items-center z-50">
        <button
          onClick={() => scrollTo("up")}
          className="mb-2 p-2  text-white rounded-full shadow-md hover:bg-slate-500 focus:outline-none"
        >
          <FaArrowUp className="w-6 h-6" />
        </button>
        <button
          onClick={() => scrollTo("down")}
          className="p-2  text-white rounded-full shadow-md hover:bg-slate-500 focus:outline-none"
        >
          <FaArrowDown className="w-6 h-6" />
        </button>
      </div>
      <div id="timeline-1" className="timeline-container" ref={timelineRef}>
        <div className="timeline-header">
          <h2 className="timeline-header__title">Towers Cem</h2>
          <h3 className="timeline-header__subtitle text-2xl">
            CONSTRUYENDO CIUDADES QUE RESPIRAN
          </h3>
        </div>
        <div className="timeline">
          <div className="timeline-item" data-text="Un niño soñador">
            <div className="timeline__content">
              <Image
                src="/images/timeline/carlosTorres.jpg"
                alt="1881"
                width={400}
                height={185}
                className="timeline__img filter"
              />
              <h2 className="timeline__content-title">1999</h2>
              <p className="timeline__content-desc">
                En el corazón de Barranquilla, Colombia, nació el 9 de febrero
                de 1999 un visionario que se convertiría en sinónimo de
                innovación y sostenibilidad en la construcción: Carlos Torres.
                Desde joven, mostró una pasión inquebrantable por transformar su
                entorno y construir un futuro más verde y saludable.
              </p>
            </div>
          </div>
          <div
            className="timeline-item"
            data-text="El Nacimiento de una Pasión"
          >
            <div className="timeline__content">
              <Image
                src="/images/timeline/pruebas.svg"

                alt="1893"
                width={400}
                height={185}
                className="timeline__img filter"
              />
              <h2 className="timeline__content-title">2017</h2>
              <p className="timeline__content-desc">
                En 2017, Carlos Torres empezó a explorar su profundo interés por
                la ciencia y los materiales. Su curiosidad y entusiasmo por
                entender cómo funcionan los materiales sentaron las bases para
                lo que más tarde se convertiría en Towers Cem, marcando el
                comienzo de su camino hacia la innovación en la construcción.
              </p>
            </div>
          </div>
          <div
            className="timeline-item"
            data-text="Forjando un perfil científico"
          >
            <div className="timeline__content">
              <Image
                src="/images/timeline/2017.svg"
                alt="1905"
                width={400}
                height={185}
                className="timeline__img filter"
              />
              <h2 className="timeline__content-title">2019</h2>
              <p className="timeline__content-desc">
                A inicios de este año nuestro fundador participó en un concurso
                regional gracias a su investigación y su gran desempeño supero
                la primera fase del concurso hasta llegar a la fase nacional.
                Pero este mismo año llegó la pandemia y todo tuvo un giro
                inesperado.
              </p>
            </div>
          </div>
          <div
            className="timeline-item"
            data-text="Un Reto en la Gran Industria del Cemento"
          >
            <div className="timeline__content">
              <Image
                src="/images/timeline/Historia-del-cemento.webp"
                alt="1908"
                width={400}
                height={185}
                className="timeline__img filter"
              />
              <h2 className="timeline__content-title">2020</h2>
              <p className="timeline__content-desc">
                Durante su paso por una de las principales cementeras de
                Colombia, nuestro fundador detecta importantes áreas de mejora y
                sugiere la creación de cementos inteligentes para diferenciarse
                en el mercado. A pesar del rechazo a su propuesta y la no
                renovación de su contrato, esta experiencia impulsa su
                determinación para lanzar su propio proyecto innovador.
              </p>
            </div>
          </div>
          <div className="timeline-item" data-text="Nacimiento de Towers Cem">
            <div className="timeline__content">
              <Image
                src="/images/timeline/xcem.svg"
                alt="1908"
                width={400}
                height={185}
                className="timeline__img filter"
              />
              <h2 className="timeline__content-title">2021</h2>
              <p className="timeline__content-desc">
                Luego de años e investigación nuestro fundador decide seguir a
                cabo con su idea y formar un equipo para crear una nueva
                cementera que produzca nuevas tecnologías de cementos. Decidió
                incorporar nuevas tecnologías y materiales a este mundo del
                cemento que tenía poca innovación hasta entonces. Decidió formar
                un equipo que creyera en su visión y que tuvieran habilidades
                complementarias.
              </p>
            </div>
          </div>
          <div
            className="timeline-item"
            data-text="Un Año de Innovación y Desafíos"
          >
            <div className="timeline__content">
              <Image
                src="/images/timeline/2021.svg"
                alt="1908"
                width={400}
                height={185}
                className="timeline__img filter"
              />
              <h2 className="timeline__content-title">2022</h2>
              <p className="timeline__content-desc">
                Este año, la idea de negocio recibió un programa intensivo de
                dos semanas y avanzó a una incubación de tres meses con capital
                semilla para prototipos. El fundador desarrolló y validó los
                primeros prototipos con resultados prometedores y comenzó el
                proceso de patente en Medellín. Lamentablemente, el 9 de
                octubre, el padre del fundador falleció, afectando
                emocionalmente el crecimiento de la empresa.
              </p>
            </div>
          </div>
          <div
            className="timeline-item"
            data-text="Ganadores del Prix French Tech"
          >
            <div className="timeline__content">
              <Image
                src="/images/timeline/2023- Ganadores de la Prix French Tech.svg"
                alt="1908"
                width={400}
                height={185}
                className="timeline__img filter"
              />
              <h2 className="timeline__content-title">2023</h2>
              <p className="timeline__content-desc">
              Este año, Towers Cem ganó el Prix French Tech Bogotá 2023, un premio que reconoce emprendimientos tecnológicos enfocados en mejorar la calidad de vida y la sostenibilidad. En 2023, el premio amplió su alcance para incluir más start-ups y proyectos. 

              </p>
            </div>
          </div>
          <div
            className="timeline-item"
            data-text="Nuestro Camino hacia la Innovación en Cemento"
          >
            <div className="timeline__content">
              <Image
                src="/images/timeline/Emprende Uninorte 2023.jpg"
                alt="1908"
                width={400}
                height={185}
                className="timeline__img filter"
              />
              <h2 className="timeline__content-title">2023</h2>
              <p className="timeline__content-desc">
                Ganamos el Emprende Uninorte Startup Competition 2023 por
                nuestra innovadora tecnología de cemento que utiliza radiación
                solar para descontaminar gases. El premio nos otorgó capital
                semilla para avanzar en nuestro proyecto de construcciones
                sostenibles. También fuimos ganadores de la SUP23 Uninorte,
                recibiendo capital semilla y mentorías. ¡Llegó Miley, la pieza
                faltante, y ahora somos un equipo de cinco!
              </p>
            </div>
          </div>
          <div
            className="timeline-item"
            data-text="Embajador Puentes de Talento"
          >
            <div className="timeline__content">
              <Image
                src="/images/timeline/PuentesTalento.svg"
                alt="1908"
                width={400}
                height={185}
                className="timeline__img filter"
              />
              <h2 className="timeline__content-title">2024</h2>
              <p className="timeline__content-desc">
                Carlos, uno de los fundadores, fue seleccionado como Embajador
                en el programa Puentes de Talento Madrid, un reconocimiento
                otorgado a solo 10 jóvenes de toda Latinoamérica. Este
                prestigioso programa le permitió validar nuestro mercado
                internacional y expandir nuestras conexiones y oportunidades a
                nivel global.
              </p>
            </div>
          </div>
          <div
            className="timeline-item"
            data-text="La mejor tecnologia con Mentor"
          >
            <div className="timeline__content">
              <Image
                src="/images/timeline/2024.svg"
                alt="1908"
                width={400}
                height={185}
                className="timeline__img filter"
              />
              <h2 className="timeline__content-title">2024</h2>
              <p className="timeline__content-desc">
                En 2024, nuestro equipo fue galardonado con el premio a la Mejor
                Tecnología en el programa de mentoría de la Universidad
                Nacional. Este reconocimiento destaca nuestra innovadora
                tecnología y nos proporcionó valiosa orientación y apoyo de
                expertos en el campo. En este año, culminamos el proceso de
                registro de nuestra patente y estamos en el proceso de levantar
                capital para la puesta en marcha de nuestra primera planta
                piloto. Este paso es crucial para llevar nuestra tecnología al
                mercado y avanzar hacia la implementación a gran escala.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
