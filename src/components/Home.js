import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal'

export default function Home() {
    const [app1Open, setApp1Open] = useState(false);
    const [app2Open, setApp2Open] = useState(false);

    return (
        <div>
            <div className="hero" id="home">

                {/* logos y navmenu */}
                <div className="container flag">

                    <div className="logo-udec">
                        <img src="/assets/udec.png" alt="logo-udec" />
                    </div>

                    <div className="nav">
                        <ul>
                            <li><a href="#info">Sobre el proyecto</a></li>
                            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSf_Qq53YisdwSBHU5CLuK9mX98Wax17xWu_15k7RVE9gky5Nw/viewform?usp=pp_url&entry.1571147561=Opci%C3%B3n+1" target="_blank" rel="noopener noreferrer">Encuesta de Evaluación<i class="fas fa-external-link-alt"></i></a></li>
                        </ul>
                    </div>

                    <div className="logo-udec">
                        <img src="/assets/mgsg.png" alt="logo-mgsg" />
                    </div>

                </div>

                {/* titulos */}
                <div className="container titulo">
                    <h1>Plataforma de Información Glaciológica de Chile Central</h1>
                    <p>Universidad de Concepción - Mountain GeoScience Group - </p>
                </div>

                {/* aplicaciones */}
                <main className="app-section">

                    <div className="container">
                        {/* Box Aplicacion 1 */}

                        <div className="apps">
                            <div className="app-box">
                                <div className="titulo-app">
                                    <img src="/assets/app-icon.svg" alt="app-icon" />
                                    <h2>Aplicacion 1</h2>
                                </div>
                                <div className="nombre-app">
                                    <span>Inventario Nacional de Glaciares</span>
                                </div>
                                <div className="boton">
                                    <button className="button" onClick={() => setApp1Open(true)}>Mas Información<img src="/assets/Arrow.svg" alt="arrow"></img> </button>
                                </div>
                            </div>

                            {/* Modal Aplicacion 1 */}
                            <Modal open={app1Open} className="modal">
                                <div className="titulo">
                                    <h3>Inventario Nacional de Glaciares de Chile Central</h3>
                                </div>

                                <div className="objetivo">
                                    <span className="subtitulo">Objetivo</span>
                                    <p>Disponer de forma dinámica la información del inventario nacional de glaciares vigente.</p>
                                </div>

                                <div className="descripcion">
                                    <span className="subtitulo">Sobre el inventario Nacional de glaciares</span>
                                    <p>El inventario Nacional de Glaciares dispone la georreferenciación y caracterización de la superficie glaciar del país vigente al año 2014.  Este trabajo es elaborado por la Dirección General de Aguas (DGA) del Ministerio de obras públicas de Chile (MOP), específicamente por la unidad de glaciología y nieves. El inventario actual cuenta con un total de 24.114 registros a nivel nacional de los cuales 2.003 se sitúan en el área de estudio definida como Chile central (32°55´S - 35°30´S). Según los criterios definidos en la estrategia nacional de glaciares de 2009, los glaciares de Chile se clasifican en 5 categorías: efluentes (366), de montaña (8.019), de valle (301), rocosos (2.831) y glaciaretes (12.597). El área de estudio incluye ejemplares de las 4 últimas categorías. Actualmente se esta a la espera de la nueva publicación del inventario nacional de glaciares.</p>
                                </div>

                                <div className="botones">
                                    <button className="button back" onClick={() => setApp1Open(false)} ><img src="/assets/Arrow.svg" alt="arrow"></img>Volver</button>
                                    <Link className="button" to="/app1">Ir a Aplicacion<img src="/assets/Arrow.svg" alt="arrow"></img> </Link>
                                </div>
                            </Modal>

                            {/* Box Aplicacion 2 */}
                            <div className="app-box">
                                <div className="titulo-app">
                                    <img src="/assets/app-icon.svg" alt="app-icon" />
                                    <h2>Aplicacion 2</h2>
                                </div>
                                <div className="nombre-app">
                                    <span>Estimación de la Línea de equilibrio glaciar (E.L.A).</span>
                                </div>
                                <div className="boton">
                                    <button className="button" onClick={() => setApp2Open(true)}>Mas Información<img src="/assets/Arrow.svg" alt="arrow"></img> </button>
                                </div>
                            </div>

                            {/* Modal Aplicacion 2 */}
                            <Modal open={app2Open} className="modal">
                                <div className="titulo">
                                    <h3>Estimación de la Línea de equilibrio glaciar (E.L.A).</h3>
                                </div>

                                <div className="objetivo">
                                    <span className="subtitulo">Objetivo</span>
                                    <p>Implementar una herramienta de geoprocesamiento web que permita estimar la línea de equilibrio glaciar (ELA - Equilibrium Line Altitude) de forma automatizada para la muestra de glaciares que conforman el inventario del Chile central.</p>
                                </div>

                                <div className="descripcion">
                                    <span className="subtitulo">Sobre la línea de tendencia central (ELA):</span>
                                    <p>La línea de tendencia central (ELA - Equilibrium Line Altitude) corresponde a la línea donde al final del año hidrológico (abril a marzo) el balance de masa es cero, es decir, refleja el límite entre la zona de acumulación y de ablación de un glaciar, por lo cual se considera un parámetro relevante en la comprensión de los climas actuales y pasados. (Cogley, et al, 2011).</p>
                                    <p>La ELA se combina con el clima principalmente a través de las precipitaciones invernales, que se correlacionan con la acumulación y la temperatura del aire en verano, que se correlaciona con la ablación, por lo cual los cambios en la elevación de ELA se pueden utilizar para rastrear los cambios en el clima. La ELA no solo se ha utilizado con éxito para evaluar el clima durante antiguas glaciaciones, sino también el balance de masa de glaciares donde no se dispone de tales datos  (Hughes, 2009a)</p>
                                    <p>Los 4 algoritmos utilizados para la estimación derivan del trabajo de Pellitero (2015) en el cual se desarrollo una caja de herramientas para el cálculo automatizado de las altitudes de la línea de equilibrio de los glaciares utilizando los siguientes métodos:  </p>
                                    <ol>
                                        <li>Relación de área de acumulación (AAR - accumulation area ratio).</li>
                                        <li>Elevación media del glaciar (MGE ó kurowski – median glaciar elevation).</li>
                                        <li>Relación de equilibrio de área-altitud (AABR – área altitude balance ratio).</li>
                                        <li>Área-altitud (AA – área altitude).</li>
                                    </ol>
                                </div>

                                <div className="botones">
                                    <button className="button back" onClick={() => setApp2Open(false)} ><img src="/assets/Arrow.svg" alt="arrow"></img>Volver</button>
                                    <Link className="button" to="/app2">Ir a Aplicacion<img src="/assets/Arrow.svg" alt="arrow"></img> </Link>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </main>

                <div className="container scroll">
                    <span>Desliza hacia abajo para mas informacion...</span>
                </div>
            </div>

            <div className="encuesta-section">
                <div className="contenido container">
                    <div className="texto">
                        <h2>Encuesta de Evaluacion</h2>
                        <p>Haz clic en el boton para Realizar la encuesta</p>
                    </div>

                    <div className="boton">
                        <a className="button" href="https://docs.google.com/forms/d/e/1FAIpQLSf_Qq53YisdwSBHU5CLuK9mX98Wax17xWu_15k7RVE9gky5Nw/viewform?usp=pp_url&entry.1571147561=Opci%C3%B3n+1" target="_blank" rel="noopener noreferrer">Ir a encuesta<i class="fas fa-external-link-alt"></i></a>
                    </div>

                </div>
            </div>

            <div id="info" className="container info">
                <div className="titulo">
                    <h2>Informacion del Proyecto</h2>
                </div>
                <div className="informacion">
                    <p>La Plataforma de información glaciológica de Chile Central, se desarrolla en el marco de la memoria de título <span>“Implementación de un geoportal basado en estándares I.D.E. como aporte a la diseminación de información glaciar en los andes de chile central 32°55´s - 35°30´s”</span>, desarrollada por <span>Carlos Perez Oportus</span> como parte de los requisitos necesarios para la obtención del título de geógrafo.</p>
                    <p>La memoria de título forma parte de las investigaciones asociadas al proyecto <span>FONDECYT N°11160454: “Developing mechanistic understanding of the snowline‘s role on the differential climatic sensitivity along mountain glaciers”</span> desarrollado por el <span>Ph.D Alfonso Fernández R.</span></p>
                </div>

                <div className="points">
                    <span>Los aportes esperados de la investigación son:</span>
                    <ul>
                        <li>
                            <img src="/assets/info.png" alt="" />
                            Desarrollar instancias que fomenten la democratización de información y la neutralidad tecnológica, mediante la adopción de estándares interoperables y tecnologías de código abierto</li>
                        <li>
                            <img src="/assets/message.png" alt="" />
                            Desarrollar instancias de difusión sobre el estado y la conservación de los sistemas glaciares, así como de los efectos que supone el cambio climático a escalas regionales
                        </li>
                        <li>
                            <img src="/assets/book.png" alt="" />
                            Reflejar el estado del arte vigente para quienes deseen profundizar conocimientos ligados al campo de las tecnologías de información geográficas, comprendiéndolas como herramientas de apoyo al análisis territorial y la diseminación de información científica
                        </li>
                    </ul>
                </div>
            </div>

            <div className="contacto">
                <div className="container">
                    <div className="titulo">
                        <h2>Información de Contacto</h2>
                    </div>
                    <div className="points">
                        <span>Para más información, sugerencias y consultas puedes escribir a:</span>
                        <ul>
                            <li>
                                <i class="fas fa-user-alt"></i>
                                Carlos Pérez Oportus</li>
                            <li>
                                <i class="far fa-envelope"></i>
                                carlperez@udec.cl
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
