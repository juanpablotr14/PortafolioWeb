import React from 'react';
import './Portafolio.css';

const Portafolio = () => {

  return (

    <section id="portafolio" className="portafolio">

        <div className="contenido-seccion">

            <h2>Portafolio</h2>

            <div className="galeria">

                <div className="proyecto">

                    <img className="p1" src="./img/p1.jpg" alt="img.jpg"></img>

                    <div className="overlay">
                        <h3>Diseño Creativo</h3>
                        <p>Fotografia</p>
                    </div>

                </div>

                <div className="proyecto">

                    <img className="p1" src="./img/bombillo.jpg" alt="img.jpg"></img>

                    <div className="overlay">
                        <h3>Diseño Creativo</h3>
                        <p>Fotografia</p>
                    </div>

                </div>

                <div className="proyecto">

                    <img src="./img/escritorio.jpg" alt="img.jpg"></img>

                    <div className="overlay">
                        <h3>Diseño Creativo</h3>
                        <p>Fotografia</p>
                    </div>

                </div>

                <div className="proyecto">

                    <img src="./img/taza.jpg" alt="img.jpg"></img>

                    <div className="overlay">
                        <h3>Diseño Creativo</h3>
                        <p>Fotografia</p>
                    </div>

                </div>

                <div className="proyecto">

                    <img src="./img/responsive.jpg" alt="img.jpg"></img>

                    <div className="overlay">
                        <h3>Diseño Creativo</h3>
                        <p>Fotografia</p>
                    </div>

                </div>

                <div className="proyecto">

                    <img src="./img/cohete.jpg" alt="img.jpg"></img>

                    <div className="overlay">
                        <h3>Diseño Creativo</h3>
                        <p>Fotografia</p>
                    </div>

                </div>

            </div>

        </div>

    </section>

  );

};

export default Portafolio;