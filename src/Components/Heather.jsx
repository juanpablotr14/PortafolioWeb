import React from 'react';
import './heather.css';

const Heather = () => {

  return (

    <div className = "contenedor-header">

      <header>

        <div className = "logo">
          <a href = "#">Juan Pablo</a>
        </div>

        <nav id="nav">

          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#sobremi">Sobre Mi</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#curriculum">Curriculum</a></li>
            <li><a href="#portafolio">Portafolio</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>

        </nav>

        <div className="nav-responsive">

          <i className="fa-solid fa-bars"></i>

        </div>

      </header>

    </div>

  );

};

export default Heather;