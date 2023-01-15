import React from 'react';
import './contacto.css';

const Contactos = () => {

  return (

    <section id="contacto" className="contacto">

        <div className="contenido-seccion">

            <h2>Contacto</h2>

            <div className="fila">

                <div className="col">

                    <input type="text" placeholder="Nombre"></input>
                    <input type="number" placeholder="N° Telefono"></input>
                    <input type="email" placeholder="Dirección de correo"></input>
                    <input type="text" placeholder="Tema"></input>
                    <textarea name="" id="" rows="10" cols="30" placeholder="Mensaje"></textarea>
                    <button>
                        Enviar Mensaje <i class="fa-solid fa-paper-plane"></i>
                        <span className="overlay"></span>
                    </button>

                </div>

                <div className="col">

                    <img src="./img/ubicacion.png" alt="img.jpg"></img>

                    <div className="info">

                        <ul>
                            <li>
                                <i class="fa-solid fa-location-dot"></i>
                                Colombia - Valle del Cauca - Pradera - Calle 7° #11-47
                            </li>
                            <li>
                                <i class="fa-solid fa-mobile-screen-button"></i>
                                Llamame: 317 0647352
                            </li>
                            <li>
                                <i class="fa-solid fa-envelope"></i>
                                Email: juanpablotr14@gmail.com
                            </li>
                        </ul>

                    </div>

                </div>

            </div>

        </div>

    </section>

  );

};

export default Contactos; 