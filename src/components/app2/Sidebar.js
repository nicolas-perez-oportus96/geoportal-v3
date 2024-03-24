import React, { useContext } from 'react';
import { FeatureContext } from '../../FeatureContext';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import axios from 'axios'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import 'tippy.js/animations/shift-away.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import { DEV_BASE_URL } from '../../properties';
const FileDownload = require('js-file-download');

export default function Sidebar() {

    const { feature, elaMethod, elaFeature, } = useContext(FeatureContext);
    const [featureValue,] = feature;
    const [elaMethodValue, setElaMethodValue] = elaMethod;
    const [elaFeatureValue,] = elaFeature;

    // FUNCIÓN PARA DESCARGAR REPORTE PDF
    async function getReporte(id, method) {
        const query = await axios({
            url: `${DEV_BASE_URL}/app2/PDF/${method}/_${id}-.pdf`,
            method: 'GET',
            responseType: 'blob', // Importants
        })
        FileDownload(query.data, `REP_${method}-${id}.pdf`);
    };
    
    // FUNCIÓN PARA DESCARGAR SHAPES
    async function getShape(id, method) {
        const query = await axios({
            url: `${DEV_BASE_URL}/app2/SHP/${method}/${id}${method}.zip`,
            method: 'GET',
            responseType: 'blob', // Important
        })
        await FileDownload(query.data, `SHP_${method}-${id}.zip`);
    };

    // MANEJANDO SELECT 
    const handleChange = (value) => {
        setElaMethodValue(value)
    };

    // RENDERIZADO DEL SIDEBAR
    if (Object.entries(featureValue).length !== 0) {
        return (
            <div className="sidebar">

                <div className="banner">
                    <img src="/assets/app-icon.svg" alt="app-icon" />
                    <div className="app-title">
                        <h1>Aplicación 2: <br /><span>Estimación de la Línea de equilibrio glaciar (E.L.A).</span></h1>
                    </div>
                </div>

                <div className="acciones">
                    <div className="ela-select">
                        <span>Seleccione método de calculo de E.L.A.</span>
                        <select name="ela" onChange={(e) => handleChange(e.target.value)} >
                            <option selected value={null}>Seleccione un método de calculo</option>
                            <option value="AA">AA - Área-altitud.</option>
                            <option value="AABR">AABR - Relación de equilibrio de área-altitud.</option>
                            <option value="AAR">AAR - Relación de área de acumulación.</option>
                            <option value="MGE">MGE - Elevación media del glaciar.</option>
                        </select>
                    </div>

                    {elaMethodValue !== null &&

                        <div className="">
                            <div className="descargas">
                                <button className="btn-reporte" onClick={(e) => getReporte(elaFeatureValue.COD_GLA, elaMethodValue)}><i className="far fa-file-pdf"></i>Descargar Reporte</button>
                                <button className="btn-reporte" onClick={(e) => getShape(elaFeatureValue.COD_GLA, elaMethodValue)}><i className="far fa-file-archive"></i>Descargar ShapeFile</button>
                            </div>

                            <div className="descargas">
                                <a target="_blank" rel="noopener noreferrer" href={`${DEV_BASE_URL}/app2/ELA_METADA.xml`}>Ver Metadatos</a>
                            </div>

                        </div>
                    }
                </div>

                {elaMethodValue !== null &&

                    <Accordion allowZeroExpanded={true} preExpanded={['info']}>

                        {/* IDENTIFICACIÓN DEL GLACIAR */}
                        <AccordionItem uuid="info" >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    IDENTIFICACIÓN DE GLACIAR
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemPanel>
                                <ul className="lista">
                                    <li>
                                        <Tippy content="Nombre del glaciar (en caso que posea)" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        NOMBRE:
                                        <span>{elaFeatureValue.NOMBRE}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Código del glaciar definido según normas del World Glacier Inventory (WGI)" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        CÓDIGO WGI:
                                        <span>{elaFeatureValue.COD_GLA}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Código del glaciar definido por el Banco Nacional de Aguas (BNA)" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        CÓDIGO BNI:
                                        <span>{elaFeatureValue.COD_BNA}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Código de clasificación del glaciar según normas UNESCO/WGI" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        CLASIFICACIÓN WGI:
                                        <span>{elaFeatureValue.CLAS_WGI}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Categoría de clasificación del glaciar según normas UNESCO/WGI" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        CATEGORÍA DE CLASIFICACIÓN WGI:
                                        <span>{elaFeatureValue.CLASIFICA}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Zona glaciológica de Chile en la que se sitúa el glaciar" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        ZONA GLACIOLÓGICA:
                                        <span>{elaFeatureValue.ZONA_GLACI}</span>
                                    </li>
                                </ul>
                            </AccordionItemPanel>
                        </AccordionItem>

                        {/* LOCALIZACIÓN DEL GLACIAR EN LA DIVISION POLÍTICO-ADMINISTRATIVA DE CHILE */}
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    LOCALIZACIÓN DEL GLACIAR EN LA DIVISION POLÍTICO-ADMINISTRATIVA DE CHILE
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemPanel>
                                <ul className="lista">
                                    <li>
                                        <Tippy content="Código de la región en donde se sitúa el glaciar" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        CÓDIGO DE REGION:
                                        <span>{elaFeatureValue.COD_REGION}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Nombre de la región en donde se sitúa el glaciar" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        REGIÓN:
                                        <span>{elaFeatureValue.REGION}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Código de la provincia en donde se sitúa el glaciar" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        CÓDIGO DE PROVINCIA:
                                        <span>{elaFeatureValue.COD_PROVIN}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Nombre de la cuenca hidrográfica en donde se sitúa el glaciar" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        PROVINCIA:
                                        <span>{elaFeatureValue.PROVINCIA}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Nombre de la cuenca hidrográfica en donde se sitúa el glaciar" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        CÓDIGO DE COMUNA:
                                        <span>{elaFeatureValue.COD_COM}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Nombre de la cuenca hidrográfica en donde se sitúa el glaciar" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        COMUNA:
                                        <span>{elaFeatureValue.COMUNA}</span>
                                    </li>
                                </ul>
                            </AccordionItemPanel>
                        </AccordionItem>

                        {/* LOCALIZACIÓN DEL GLACIAR EN LA DIVISION DE CUENCAS HIDROGRÁFICAS DE CHILE */}
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    LOCALIZACIÓN DEL GLACIAR EN LA DIVISION DE CUENCAS HIDROGRÁFICAS DE CHILE
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemPanel>
                                <ul className="lista">
                                    <li>
                                        <Tippy content="Nombre de la cuenca hidrográfica en donde se sitúa el glaciar" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        CÓDIGO DE CUENCA:
                                        <span>{elaFeatureValue.COD_CUEN}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Nombre de la cuenca hidrográfica en donde se sitúa el glaciar" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        NOMBRE DE CUENCA:
                                        <span>{elaFeatureValue.NOMB_CUEN}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Código de la sub-cuenca hidrográfica en donde se sitúa el glaciar" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        CÓDIGO DE SUB-CUENCA:
                                        <span>{elaFeatureValue.COD_SCUEN}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Nombre de la sub-cuenca hidrográfica en donde se sitúa el glaciar" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        NOMBRE DE SUB-CUENCA:
                                        <span>{elaFeatureValue.NOMB_SCUEN}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Nombre de la sub-sub-cuenca hidrográfica en donde se sitúa el glaciar" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        CÓDIGO DE SUB-SUB-CUENCA:
                                        <span>{elaFeatureValue.COD_SSCUEN}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Nombre de la sub-sub-cuenca hidrográfica en donde se sitúa el glaciar" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        NOMBRE DE SUB-SUB-CUENCA:
                                        <span>{elaFeatureValue.NOMB_SSCUEN}</span>
                                    </li>
                                </ul>
                            </AccordionItemPanel>
                        </AccordionItem>

                        {/* PARÁMETROS UTILIZADOS PARA LA ESTIMACIÓN DE LA E.L.A (LINEA DE EQUILIBRIO GLACIAR) */}
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    PARÁMETROS UTILIZADOS PARA LA ESTIMACIÓN DE LA E.L.A
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemPanel>
                                <ul className="lista">
                                    <li>
                                        <Tippy content="Método de estimación para la ELA" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        METODO ELA:
                                        <span>{elaFeatureValue.MET_ELA}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Altitud del intervalo utilizado para el cálculo del volumen de superficie (m)" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        CODIGO ELA:
                                        <span>{elaFeatureValue.COD_ELA}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Altitud del intervalo utilizado para el cálculo del volumen de superficie (m)" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        INTERVALO:
                                        <span>{elaFeatureValue.INTERVAL}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Relación de acumulación-ablación a lo largo del glaciar" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        RELACIÓN DEL AREA DE ACUMULACIÓN:
                                        <span>{elaFeatureValue.REL_BAL}</span>
                                    </li>

                                </ul>
                            </AccordionItemPanel>
                        </AccordionItem>

                        {/* PROPIEDADES GEOMÉTRICAS DE LA ELA RESULTANTE */}
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    PROPIEDADES GEOMÉTRICAS DE LA ELA RESULTANTE
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemPanel>
                                <ul className="lista">
                                    <li>
                                        <Tippy content="Altitud (msnm) de la ELA estimada" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        ALTITUD ELA:
                                        <span>{elaFeatureValue.ALT_ELA}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Longitud de la ELA" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        LONGITUD ELA:
                                        <span>{elaFeatureValue.LENGTH}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Coordenada X del primer punto de la ELA" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        COORDENADA X INICIAL:
                                        <span>{elaFeatureValue.START_X}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Coordenada Y del primer punto de la ELA" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        COORDENADA Y INICIAL:
                                        <span>{elaFeatureValue.START_Y}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Coordenada X del punto a medio camino de la longitud de la ELA" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        COORDENADA X PUNTO MEDIO:
                                        <span>{elaFeatureValue.MID_X}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Coordenada Y del punto a medio camino de la longitud de la ELA" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        COORDENADA Y PUNTO MEDIO:
                                        <span>{elaFeatureValue.MID_Y}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Coordenada X del último punto de la ELA" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        COORDENADA X PUNTO FINAL:
                                        <span>{elaFeatureValue.END_X}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Coordenada Y del último punto de la ELA" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        COORDENADA Y PUNTO FINAL:
                                        <span>{elaFeatureValue.END_Y}</span>
                                    </li>

                                    <li>
                                        <Tippy content="La coordenada X del punto centroide de la ELA" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        COORDENADA CENTROIDE X:
                                        <span>{elaFeatureValue.CENTROID_X}</span>
                                    </li>

                                    <li>
                                        <Tippy content="La coordenada Y del punto centroide de la ELA" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        COORDENADA CENTROIDE Y:
                                        <span>{elaFeatureValue.CENTROID_Y}</span>
                                    </li>

                                    <li>
                                        <Tippy content="La coordenada X de un punto central sobre la ELA" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        COORDENADA CENTROIDE INTERNO X:
                                        <span>{elaFeatureValue.INSIDE_X}</span>
                                    </li>

                                    <li>
                                        <Tippy content="La coordenada Y de un punto central sobre la ELA" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        COORDENADA CENTROIDE INTERNO Y:
                                        <span>{elaFeatureValue.INSIDE_Y}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Número de partes que conforman la ELA" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        N° DE SEGMENTOS:
                                        <span>{elaFeatureValue.PART_COUNT}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Número de puntos que conforman la ELA" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        N° DE PUNTOS DE LA ELA:
                                        <span>{elaFeatureValue.PNT_COUNT}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Coordenada X mínima de la extensión de la ELA" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        COORDENADA X EXTENSIÓN MIN:
                                        <span>{elaFeatureValue.EXT_MIN_X}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Coordenada Y mínima de la extensión de la ELA" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        COORDENADA Y EXTENSIÓN MIN:
                                        <span>{elaFeatureValue.EXT_MIN_Y}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Coordenada X máxima de la extensión de la ELA" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        COORDENADA X EXTENSIÓN MAX:
                                        <span>{elaFeatureValue.EXT_MAX_X}</span>
                                    </li>

                                    <li>
                                        <Tippy content="Coordenada Y máxima de la extensión de la ELA" trigger='click' animation='shift-away'>
                                            <i className="far fa-question-circle"></i>
                                        </Tippy>
                                        COORDENADA Y EXTENSIÓN MAX:
                                        <span>{elaFeatureValue.EXT_MAX_Y}</span>
                                    </li>

                                </ul>
                            </AccordionItemPanel>
                        </AccordionItem>


                    </Accordion>
                }


            </div>
        )
    } else {
        return (
            <div className="sidebar">

                <div className="banner">
                    <img src="/assets/app-icon.svg" alt="app-icon" />
                    <div className="app-title">
                        <h1>Aplicación 2: <br /><span>Linea de Tendencia Central</span></h1>
                    </div>
                </div>

                <div className="instrucciones">
                    <div className="titulo">
                        <h2>Instrucciones</h2>
                    </div>
                    <div className="guia">
                        <ol>
                            <li><span>Haga zoom hasta el nivel de visualización de los glaciares</span></li>
                            <li><span>Seleccione un glaciar</span></li>
                            <li><span>Seleccione un método de estimación para la línea de equilibrio glaciar (ELA)</span></li>
                            <li><span>Puede visualizar sobre el mapa la ELA generada y sus atributos categorizados</span></li>
                            <li><span>Puede generar un reporte con la información de atributos y descargar una capa lineal con la ELA generada</span></li>
                        </ol>
                    </div>
                </div>

            </div>
        )
    }
}

