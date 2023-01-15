import React from 'react';
import './inicio.css';

const Inicio = () => {

  return (

    <section id="inicio" className="inicio">

        <div className="contenido-banner">

            <div className="contenedor-img">

                <img src="./img/FotoPerfil.jpg" alt="img.png"></img>
                <h1>Juan Pablo Tascon</h1>
                <h2>Ing.Sistemas - Desarrollo de Software</h2>

                <div className="redes">

                  <a href="https://www.instagram.com/juanp51403/"><i class="fa-brands fa-instagram"></i></a>
                  <a href="https://twitter.com/juanpablotr14"><i class="fa-brands fa-twitter"></i></a>
                  <a href="https://www.facebook.com/juanpablo.tasconroldan.7/"><i class="fa-brands fa-facebook"></i></a>
                  <a href="https://www.linkedin.com/in/juan-pablo-tascon-roldán-7b0698251/"><i class="fa-brands fa-linkedin"></i></a>
                  <a href="https://github.com/juanpablotr14"><i class="fa-brands fa-github"></i></a>

                </div>

            </div>

        </div>

    </section>

  );

};

export default Inicio;