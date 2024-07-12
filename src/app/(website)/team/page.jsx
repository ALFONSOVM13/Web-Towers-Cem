import React from "react";
import "./styles.scss";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const page = () => {
  return (
    <section>
      <span>CONOCENOS</span>
      <h2 className="font-title">Nuestro Equipo</h2>
      <p>
        Somos un grupo de trabajo interdisciplinario comprometido con la
        creación de un futuro mucho más verde para nuestras próximas
        generaciones, apuntándoles a los objetivos de desarrollo sostenible,
        innovación e infraestructura, creación de ciudades sostenibles y acción
        por el clima.
      </p>
      <span className="bg-watermark">Equipo</span>
      <div className="cards">
        <div className="card">
          <img src="/images/team/Miley.png" alt="Miley Velásquez" />
          <div className="card-content">
            <h3>Miley Velásquez </h3>
            <p>Dir. Operaciones </p>
            <ul>
              <li>
                <a href="#">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <img src="/images/team/Carlos.png" alt="Carlos Torres" />
          <div className="card-content">
            <h3>Carlos Torres</h3>
            <p>CEO & Founder de TOWERS CEM</p>
            <ul>
              <li>
                <a href="#">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <img src="/images/team/Ivan.png" alt="Ivan Torres" />
          <div className="card-content">
            <h3>Ivan Torres</h3>
            <p>Dir. de proyectos</p>
            <ul>
              <li>
                <a href="#">
                  <FaInstagram id="red" className="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn id="red" className="fa-brands fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
