import React from 'react';
import './skills.css';

const Skills = () => {

  return (

    <section id="skills" className="skills">

        <div className="contenido-seccion">

            <h2>Skills</h2>

            <div className="fila">

                <div className="col">

                    <h3>Technical Skills</h3>

                    <div className="skill">

                        <span>JavaScript</span>

                        <div className="barra-skill">
                            
                            <div className="progreso javascript">
                                <span>60%</span>
                            </div>

                        </div>

                    </div>

                    <div className="skill">

                        <span>HTML & CSS</span>

                        <div className="barra-skill">
                            
                            <div className="progreso htmlcss">
                                <span>72%</span>
                            </div>

                        </div>

                    </div>

                    <div className="skill">

                        <span>Java</span>

                        <div className="barra-skill">
                            
                            <div className="progreso java">
                                <span>85%</span>
                            </div>

                        </div>

                    </div>

                    <div className="skill">

                        <span>C++</span>

                        <div className="barra-skill">
                            
                            <div className="progreso cemas">
                                <span>75%</span>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="col">

                    <h3>Professional Skills</h3>

                    <div className="skill">

                        <span>Comunicación</span>

                        <div className="barra-skill">
                            
                            <div className="progreso comunicacion">
                                <span>92%</span>
                            </div>

                        </div>

                    </div>

                    <div className="skill">

                        <span>Trabajo en Equipo</span>

                        <div className="barra-skill">
                            
                            <div className="progreso equipo">
                                <span>82%</span>
                            </div>

                        </div>

                    </div>

                    <div className="skill">

                        <span>Creatividad</span>

                        <div className="barra-skill">
                            
                            <div className="progreso creatividad">
                                <span>96%</span>
                            </div>

                        </div>

                    </div>

                    <div className="skill">

                        <span>Dedicación</span>

                        <div className="barra-skill">
                            
                            <div className="progreso dedicacion">
                                <span>73%</span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>

  );

};

export default Skills;