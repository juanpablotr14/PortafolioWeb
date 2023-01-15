import React from 'react';
import './sobremi.css';

const SobreMi = () => {

  return (

    <section id="sobremi" className="sobremi">

        <div className="contenido-seccion">

            <h2>Sobre Mí</h2> 
            <p><span>Hola soy Juan Pablo Tascon R.</span> Lorem bla sbwbiae biwwjbjhe iuhsfe
            jcjjehndj kcsiuvjsnhenahjn ekcyekmv LK FJEC EIJ jijrijarjj ajva rjajodijoi djija j
            ahdnchoehnchhjefhhhaakuhda k e hfhjwi u dajio jj aef eohfehfouhloRHO ARI OAR </p>

            <div className="fila">

                <div className="col">

                    <h3>Datos Personales</h3>

                    <ul>
                        <li>
                            <strong>Cumpleaños</strong>
                            14 / 05 / 2003
                        </li>
                        <li>
                            <strong>N° Telefono</strong>
                            317 0647352
                        </li>
                        <li>
                            <strong>Email</strong>
                            juanpablotr14@gmail.com
                        </li>
                        <li>
                            <strong>Github</strong>
                            https://github.com/juanpablotr14
                        </li>
                    </ul>

                </div>

                <div className="col">

                    <h3>Intereses</h3>

                    <div className="contenedor-intereses">

                        <div className="interes">
                            <i class="fa-solid fa-gamepad"></i>
                            <span>Juegos</span>
                        </div>

                        <div className="interes">
                            <i class="fa-solid fa-headphones"></i>
                            <span>Musica</span>
                        </div>

                        <div className="interes">
                            <i class="fa-solid fa-person-hiking"></i>
                            <span>Deporte</span>
                        </div>

                        <div className="interes">
                            <i class="fa-brands fa-apple"></i>
                            <span>Mac OS</span>
                        </div>

                        <div className="interes">
                            <i class="fa-solid fa-tv"></i>
                            <span>Series</span>
                        </div>

                        <div className="interes">
                            <i class="fa-solid fa-book"></i>
                            <span>Lectura</span>
                        </div>

                        <div className="interes">
                            <i class="fa-solid fa-plane"></i>
                            <span>Viajes</span>
                        </div>

                        <div className="interes">
                            <i class="fa-solid fa-bed"></i>
                            <span>Dormir</span>
                        </div>

                    </div>

                </div>

            </div>

            <button> 
                
                Descargar CV <i class="fa-solid fa-download"></i>
                <span className="overlay"></span>
            
            </button>

        </div>  

    </section>

  );

};

export default SobreMi;