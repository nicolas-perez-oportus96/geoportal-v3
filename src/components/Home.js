import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal'

export default function Home() {
    const [app1Open, setApp1Open] = useState(false);
    const [app2Open, setApp2Open] = useState(false);

    return (
        <main className="app-grid">

                {/* Box Aplicacion 1 */}

                <div className="app-box app-box1">
                    <div className="titulo">
                        <img src="/assets/App.svg" alt="app-icon"/>
                        <h2>Inventario Nacional de Glaciares</h2>
                    </div>
                    <div className="boton">
                        <button className="button" onClick={() => setApp1Open(true) }>Mas Información<img src="/assets/Arrow.svg" alt="arrow"></img> </button>
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
                <div className="app-box app-box2">
                    <div className="titulo">
                        <img src="/assets/App.svg" alt="app-icon"/>
                        <h2>Linea de Tendencia Central</h2>
                    </div>
                    <div className="boton">
                        <button className="button" onClick={() => setApp2Open(true) }>Mas Información<img src="/assets/Arrow.svg" alt="arrow"></img> </button>
                    </div>
                </div>

                {/* Modal Aplicacion 2 */}
                <Modal open={app2Open} className="modal">
                    <div className="titulo">
                        <h3>Linea de Tendencia Central</h3>
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
                        <button className="button back" onClick={() => setApp2Open(false)} ><img src="/assets/Arrow.svg" alt="arrow"></img>Volver</button>
                        <Link className="button" to="/app2">Ir a Aplicacion<img src="/assets/Arrow.svg" alt="arrow"></img> </Link>
                    </div>
                </Modal>


                <div className="app-box app-box3">
                    <div className="titulo">
                        <img src="/assets/App.svg" alt="app-icon"/>
                        <h2>Aplicacion 3</h2>
                    </div>
                    <div className="boton">
                        <Link className="button" to="/app3">Mas Información<img src="/assets/Arrow.svg" alt="arrow"></img> </Link>
                    </div>
                </div>
            </main>
    )
}
