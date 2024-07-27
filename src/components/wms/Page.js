import React from 'react'

export default function ServiciosWebPage() {

    const copyLinkToClipboard = async (link) => {
        try {
            await navigator.clipboard.writeText(link);
            alert('Enlace copiado al portapapeles');
        } catch (err) {
            alert('No se pudo copiar dirección: ' + err);
        }
    };


    return (
        <div id="info" className="container info">

            <a href="/" >
                <i className="fas fa-arrow-circle-left my-float"></i>
                <span style={{ marginLeft: '5px' }}>Volver al inicio</span>
            </a>

            <div className="titulo" style={{ marginTop: '10px' }}>
                <h2>Servicios de mapas web</h2>
            </div>
            <div className="informacion">
                <p>A través de los servicios <span>WMS (Web Map Service)</span> y <span>WFS (Web Feature Service)</span>, los usuarios podrán integrar los servicios de mapas utilizados en las aplicaciones del geoportal. Estos servicios, que siguen las especificaciones del <span>Open Geospatial Consortium (OGC)</span>, permiten la visualización y consulta de coberturas de información geoespacial.</p>
                <p>Para conectar a los servicios WMS y WFS, los usuarios pueden utilizar aplicaciones GIS (Sistema de Información Geográfica) como <span>QGIS, ArcGIS, o herramientas web que soporten ambos estandares</span>, ingresando la URL del servicio correspondiente.</p>
                <p>A continuación, se pueden consultar tres videos que explican el proceso de conexión en los softwares QGIS, ArcMap y ArcGIS Pro.</p>
            </div>


            <div style={{ border: '1px solid gray', padding: '20px', borderRadius: '15px' }}>
                <div className="titulo">
                    <h3>Listado de capas disponibles</h3>
                </div>


                {/* Cartografía Base */}
                <div style={{ marginBottom: '40px' }}>
                    <h3 style={{ marginBottom: '5px', color: '#4f4f8f' }}>Cartografía Base</h3>

                    <div>
                        <p style={{ marginBottom: '10px' }}>Corresponde a un grupo de capas, utilizadas como mapa base de las aplicaciones, la cual se compone por 6 capas:</p>

                        <ul style={{ paddingLeft: '30px' }}>
                            <li style={{ marginBottom: '10px' }}>
                                <span style={{ fontWeight: 600 }}>Etiquetas Glaciares:</span>
                                <p>Representa los nombres de los glaciares principales en forma de etiquetas.</p>
                            </li>

                            <li style={{ marginBottom: '10px' }}>
                                <span style={{ fontWeight: 600 }}>Superficie Glaciar:</span>
                                <p>Representa la superficie glaciar total del área de estudio.</p>
                            </li>

                            <li style={{ marginBottom: '10px' }}>
                                <span style={{ fontWeight: 600 }}>Área de Estudio:</span>
                                <p>Representa un cuadro delimitador del área de estudio sobre el cual se restringirá la vista del mapa.</p>
                            </li>

                            <li style={{ marginBottom: '10px' }}>
                                <span style={{ fontWeight: 600 }}>Base Cuencas:</span>
                                <p>Representa la división de cuencas principales al interior del área de estudio.</p>
                            </li>

                            <li style={{ marginBottom: '10px' }}>
                                <span style={{ fontWeight: 600 }}>Sistema Lacustre:</span>
                                <p>Representa los principales lagos, lagunas y embalses al interior del área de estudio.</p>
                            </li>

                            <li style={{ marginBottom: '10px' }}>
                                <span style={{ fontWeight: 600 }}>Red Hídrica:</span>
                                <p>Representa los principales ríos, esteros y quebradas al interior del área de estudio.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Inventario Nacional de glaciares */}
                <div style={{ marginBottom: '40px' }}>
                    <h3 style={{ marginBottom: '5px', color: '#4f4f8f' }}>Inventario Nacional de glaciares</h3>

                    <div>
                        <p>Corresponde a la cobertura base utilizada en la aplicación N°1, la cual se basa en la adecuación del inventario nacional de glaciares, seleccionando una muestra acotada al área de estudio definida como Chile central (32°55´S - 35°30´S)</p>
                    </div>
                </div>

                {/* Líneas de Equilibrio Glaciar (E.L.A.) */}
                <div>
                    <h3 style={{ marginBottom: '5px', color: '#4f4f8f' }}>Líneas de Equilibrio Glaciar (E.L.A.)</h3>

                    <div>
                        <p style={{ marginBottom: '10px' }}>Corresponde a las coberturas que representan la línea de equilibrio glaciar en base a los algoritmos provenientes del trabajo desarrollado por Pellitero et al. (2015)</p>

                        <ul style={{ paddingLeft: '30px' }}>
                            <li style={{ marginBottom: '10px' }}>
                                <span style={{ fontWeight: 600 }}>E.L.A. AABR:</span>
                                <p>Corresponde a la totalidad de coberturas de estimación de la línea de equilibrio glaciar (ELA) en base al método “Relación de equilibrio de área-altitud o área altitude balance ratio”. Se utilizo una relación de balance de 1.75 y un Intervalo de 12.5.</p>
                            </li>

                            <li style={{ marginBottom: '10px' }}>
                                <span style={{ fontWeight: 600 }}>E.L.A. AA:</span>
                                <p>Corresponde a la totalidad de coberturas de estimación de la línea de equilibrio glaciar (ELA) en base al método “Área-altitud o área altitude”. Se utilizo una relación de balance de 1 y un Intervalo de 12.5.</p>
                            </li>

                            <li style={{ marginBottom: '10px' }}>
                                <span style={{ fontWeight: 600 }}>E.L.A. AAR:</span>
                                <p>Corresponde a la totalidad de coberturas de estimación de la línea de equilibrio glaciar (ELA) en base al método “Relación de área de acumulación o accumulation area ratio”. Se utilizo una relación de balance de 0.4 y un Intervalo 12.5.</p>
                            </li>

                            <li style={{ marginBottom: '10px' }}>
                                <span style={{ fontWeight: 600 }}>E.L.A. MGE:</span>
                                <p>Corresponde a la totalidad de coberturas de estimación de la línea de equilibrio glaciar (ELA) en base al método “Elevación media del glaciar o  median glacier elevation”. Se utilizo una relación de balance de 0.5 y un Intervalo de 12.5.</p>
                            </li>
                        </ul>

                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', padding: '30px'}}>
                    <button
                        className='layer-button'
                        onClick={() => copyLinkToClipboard('https://geoportalglaciar.webgis1.com/geoserver/Servicios/wms?service')}
                    >
                        <img src="/assets/link.png" alt="link-icon" style={{ marginRight: '5px' }} />
                        Copiar enlace WMS
                    </button>
                    <button
                        className='layer-button'
                        onClick={() => copyLinkToClipboard('https://geoportalglaciar.webgis1.com/geoserver/Servicios/wfs?service')}
                    >
                        <img src="/assets/link.png" alt="link-icon" style={{ marginRight: '5px' }} />
                        Copiar enlace WFS
                    </button>
                </div>
            </div>

        </div>
    )
}
