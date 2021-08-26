import React, { useContext } from 'react';
import { FeatureContext } from '../../FeatureContext';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import axios from 'axios'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import 'tippy.js/animations/shift-away.css';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Sidebar() {

    const { feature } = useContext(FeatureContext);
    const [featureValue] = feature;

    // FUNCION PARA DESCARGAR REPORTE PDF
    async function getReporte(id) {
        const FileDownload = require('js-file-download');

        axios({
            url: 'http://34.121.165.39/app1/pdf/_'+ id + '-.pdf',
            method: 'GET',
            responseType: 'blob', // Important
        }).then((response) => {
            FileDownload(response.data, id+'.pdf');
        });
        console.log("click")
    }

    // FUNCION PARA DESCARGAR SHAPES
    async function getShape(id) {
        const FileDownload = require('js-file-download');

        axios({
            url: 'http://34.121.165.39/app1/zip/'+ id + '.zip',
            method: 'GET',
            responseType: 'blob', // Important
        }).then((response) => {
            FileDownload(response.data, 'shape-'+id+'.zip');
        });
        console.log("click")
    }


    // RENDERIZADO DEL SIDEBAR
    if (Object.entries(featureValue).length !== 0){
        return (
            <div className="sidebar">

                <div className="titulo">
                    <h1>Información glaceológica</h1>
                </div>

                <div className="descargas">
                    <button className="btn-reporte" onClick={ (e) => getReporte(featureValue.COD_GLA) }><i class="far fa-file-pdf"></i>Descargar Reporte</button>
                    <button className="btn-reporte" onClick={ (e) => getShape(featureValue.COD_GLA) }><i class="far fa-file-archive"></i>Descargar ShapeFile</button>
                </div>
                <div className="descargas">
                    <a href="http://34.121.165.39/app1/ING_METADATOS.xml">Ver Metadatos</a>
                </div>

                <Accordion allowZeroExpanded={true} preExpanded={['info']}>

                    {/* IDENTIFICACIÓN DEL GLACIAR */}
                    <AccordionItem uuid="info" >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                IDENTIFICACIÓN DEL GLACIAR
                            </AccordionItemButton>
                        </AccordionItemHeading>
    
                        <AccordionItemPanel>
                            <ul className="lista">
                                <li>
                                    <Tippy content="Nombre del glaciar (en caso que posea)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    NOMBRE:
                                    <span>{featureValue.NOMBRE}</span>
                                </li>

                                <li>
                                    <Tippy content="Código del glaciar definido según normas del World Glacier Inventory (WGI)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    CÓDIGO WGI: 
                                    <span>{featureValue.COD_GLA}</span>
                                </li>

                                <li>
                                    <Tippy content="Código del glaciar definido por el Banco Nacional de Aguas (BNA)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    CÓDIGO BNI: 
                                    <span>{featureValue.COD_BNA}</span>
                                </li>

                                <li>
                                    <Tippy content="Codigo de clasificación del glaciar según normas UNESCO/WGI" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    CLASIFICACIÓN WGI: 
                                    <span>{featureValue.CLAS_WGI}</span>
                                </li>

                                <li>
                                    <Tippy content="Categoria de clasificación del glaciar según normas UNESCO/WGI" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    CATEGORÍA DE CLASIFICACIÓN WGI: 
                                    <span>{featureValue.CLASIFICA}</span>
                                </li>

                                <li>
                                    <Tippy content="Zona glaciologica de Chile en la que se situa el glaciar" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    ZONA GLACIOLÓGICA: 
                                    <span>{featureValue.ZONA_GLACI}</span>
                                </li>

                                <li>
                                    <Tippy content="Coordenada este UTM (centroide del glaciar)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    COORDENADA ESTE: 
                                    <span>{featureValue.ESTE}</span>
                                </li>

                                <li>
                                    <Tippy content="Coordenada norte UTM (centroide del glaciar)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    COORDENADA NORTE: 
                                    <span>{featureValue.NORTE}</span>
                                </li>

                                <li>
                                    <Tippy content="Coordenada geográfica de latitud (grados decimales)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    LATITUD: 
                                    <span>{featureValue.LATITUD}</span>
                                </li>

                                <li>
                                    <Tippy content="Coordenada geográfica de longitud (grados decimales)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    LONGITUD: 
                                    <span>{featureValue.LONGITUD}</span>
                                </li>
                            </ul>
                        </AccordionItemPanel>
                    </AccordionItem>
    
                    {/* LOCALIZACIÓN DEL GLACIAR EN LA DIVISIÓN POLÍTICO-ADMINISTRATIVA DE CHILE  */}
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                LOCALIZACIÓN DEL GLACIAR EN LA DIVISIÓN POLÍTICO-ADMINISTRATIVA DE CHILE 
                            </AccordionItemButton>
                        </AccordionItemHeading>
    
                        <AccordionItemPanel>
                            <ul className="lista">
                                <li>
                                    <Tippy content="Codigo de la región en donde se sitúa el glaciar" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    CÓDIGO DE REGIÓN: 
                                    <span>{featureValue.COD_REGION}</span>
                                </li>

                                <li>
                                    <Tippy content="Nombre de la región en donde se sitúa el glaciar" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    NOMBRE DE REGIÓN: 
                                    <span>{featureValue.REGION}</span>
                                </li>

                                <li>
                                    <Tippy content="Codigo de la provincia en donde se sitúa el glaciar" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    CÓDIGO DE PROVINCIA: 
                                    <span>{featureValue.COD_PROVIN}</span>
                                </li>

                                <li>
                                    <Tippy content="Nombre de la provincia en donde se sitúa el glaciar" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    NOMBRE DE PROVINCIA: 
                                    <span>{featureValue.PROVINCIA}</span>
                                </li>

                                <li>
                                    <Tippy content="Codigo de la  comuna en donde se sitúa el glaciar" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    CÓDIGO DE COMUNA: 
                                    <span>{featureValue.COD_COM}</span>
                                </li>

                                <li>
                                    <Tippy content="Nombre de la comuna en donde se sitúa el glaciar" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    NOMBRE DE COMUNA: 
                                    <span>{featureValue.COMUNA}</span>
                                </li>
                            </ul>
                        </AccordionItemPanel>
                    </AccordionItem>
    
                    {/* LOCALIZACIÓN DEL GLACIAR EN LA DIVISIÓN DE CUENCAS HIDROGRÁFICAS DE CHILE*/}
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                LOCALIZACIÓN DEL GLACIAR EN LA DIVISIÓN DE CUENCAS HIDROGRÁFICAS DE CHILE
                            </AccordionItemButton>
                        </AccordionItemHeading>
    
                        <AccordionItemPanel>
                            <ul className="lista">
                                <li>
                                    <Tippy content="Codigo de la cuenca hidrografrica en donde se situa el glaciar" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    CÓDIGO DE CUENCA: 
                                    <span>{featureValue.COD_CUEN}</span>
                                </li>
                                <li>
                                    <Tippy content="Nombre de la cuenca hidrografrica en donde se situa el glaciar" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    NOMBRE DE CUENCA: 
                                    <span>{featureValue.NOMB_CUEN}</span>
                                </li>
                                
                                <li>
                                    <Tippy content="Codigo de la subcuenca hidrografrica en donde se situa el glaciar" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    CÓDIGO DE SUBCUENCA: 
                                    <span>{featureValue.COD_SCUEN}</span>
                                </li>

                                <li>
                                    <Tippy content="Nombre de la subcuenca hidrografrica en donde se situa el glaciar" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    NOMBRE DE SUBCUENCA: 
                                    <span>{featureValue.NOMB_SCUEN}</span>
                                </li>

                                <li>
                                    <Tippy content="Codigo de la subsubcuenca hidrografrica en donde se situa el glaciar" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    CÓDIGO DE SUBSUBCUENCA: 
                                    <span>{featureValue.COD_SSCUEN}</span>
                                </li>

                                <li>
                                    <Tippy content="Nombre de la subsubcuenca hidrografrica en donde se situa el glaciar" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    NOMBRE DE SUBSUBCUENCA: 
                                    <span>{featureValue.NOMB_SSCUE}</span>
                                </li>
                            </ul>
                        </AccordionItemPanel>
                    </AccordionItem>
    
                    {/* CARACTERIZACIÓN FÍSICA DEL GLACIAR */}
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                CARACTERIZACIÓN FÍSICA DEL GLACIAR
                            </AccordionItemButton>
                        </AccordionItemHeading>
    
                        <AccordionItemPanel>
                            <ul className="lista">
                                <li>
                                    <Tippy content="Cantidad de cuencas de drenaje que posee el glaciar" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    CUENCAS DE DRENAJE: 
                                    <span>{featureValue.N_CUENDRE}</span>
                                </li>

                                <li>
                                    <Tippy content="Área total del glaciar" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    ÁREA TOTAL (Km²): 
                                    <span>{featureValue.AREA_KM2}</span>
                                </li>

                                <li>
                                    <Tippy content="Área cubierta del glaciar (Km²)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    ÁREA CUBIERTA (Km²): 
                                    <span>{featureValue.AREA_CUB2}</span>
                                </li>

                                <li>
                                    <Tippy content="Perimetro del glaciar (Km)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    PERÍMETRO (Km): 
                                    <span>{featureValue.PERIMET}</span>
                                </li>

                                <li>
                                    <Tippy content="Volumen del glaciar (m³)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    VOLUMEN (m³): 
                                    <span>{featureValue.VOLU_M3}</span>
                                </li>

                                <li>
                                    <Tippy content="Largo máximo del glaciar (Km)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    LARGO MÁXIMO (Km): 
                                    <span>{featureValue.LMAXTOTAL}</span>
                                </li>

                                <li>
                                    <Tippy content="Largo promedio del glaciar (Km)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    LARGO PROMEDIO (Km): 
                                    <span>{featureValue.LARGO_PROM}</span>
                                </li>

                                <li>
                                    <Tippy content="Ancho promedio del glaciar (Km)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    ANCHO PROMEDIO (Km): 
                                    <span>{featureValue.ANCHO_PROM}</span>
                                </li>

                                <li>
                                    <Tippy content="Espesor medio del glaciar (m)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    ESPESOR MEDIO (m): 
                                    <span>{featureValue.ESP_MED}</span>
                                </li>

                                <li>
                                    <Tippy content="Altitud máxima del glaciar (msnm)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    ALTITUD MÁXIMA (msnm): 
                                    <span>{featureValue.HMAX}</span>
                                </li>

                                <li>
                                    <Tippy content="Altitud media del glaciar (msnm)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    ALTITUD MEDIA (msnm): 
                                    <span>{featureValue.HMEDIA}</span>
                                </li>

                                <li>
                                    <Tippy content="Altitud mínima total del glaciar (msnm)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    ALTITUD MÍNIMA TOTAL (msnm): 
                                    <span>{featureValue.HMINTOTAL}</span>
                                </li>

                                <li>
                                    <Tippy content="Mediana de la altitud del glaciar (msnm)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    MEDIANA DE LA ALTITUD (msnm): 
                                    <span>{featureValue.HMEDIANA}</span>
                                </li>

                                <li>
                                    <Tippy content="Direccion de orientación del glaciar" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    ORIENTACIÓN: 
                                    <span>{featureValue.ORIENTA}</span>
                                </li>

                                <li>
                                    <Tippy content="Pendiente del glaciar (grados)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    PENDIENTE (grados): 
                                    <span>{featureValue.PENDIENTE}</span>
                                </li>


                            </ul>
                        </AccordionItemPanel>
                    </AccordionItem>
    
                    {/* ZONA DE ACUMULACIÓN */}
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                ZONA DE ACUMULACIÓN
                            </AccordionItemButton>
                        </AccordionItemHeading>
    
                        <AccordionItemPanel>
                            <ul className="lista">
                                
                                <li>
                                    <Tippy content="Area de acumulacion del glaciar (Km²)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    ÁREA ACUMULACIÓN (Km²): 
                                    <span>{featureValue.AREA_ACUM}</span>
                                </li>

                                <li>
                                    <Tippy content="Largo máximo acumulado del glaciar (Km)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    LARGO MÁXIMO ACUMULADO (Km): 
                                    <span>{featureValue.L_MAX_ACUM}</span>
                                </li>

                                <li>
                                    <Tippy content="Orientación del área de acumulación" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    ORIENTACIÓN DE ACUMULACIÓN: 
                                    <span>{featureValue.ORIENACUM}</span>
                                </li>
                            </ul>
                        </AccordionItemPanel>
                    </AccordionItem>
    
                    {/* ZONA DE ABLACIÓN */}
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                ZONA DE ABLACIÓN
                            </AccordionItemButton>
                        </AccordionItemHeading>
    
                        <AccordionItemPanel>
                            <ul className="lista">
                                <li>
                                    <Tippy content="Área de ablación del glaciar (Km²)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    ÁREA ABLACIÓN (Km²): 
                                    <span>{featureValue.AREA_ABLAC}</span>
                                </li>
                                <li>
                                    <Tippy content="Largo máximo de ablación (Km)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    LARGO MÁXIMO ABLACIÓN (Km): 
                                    <span>{featureValue.LMAXABLAC}</span>
                                </li>
                                <li>
                                    <Tippy content="Altitud media del área de ablación (msnm)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    ALTITUD MEDIA ABLACIÓN (msnm): 
                                    <span>{featureValue.HMEDABLAC}</span>
                                </li>
                                <li>
                                    <Tippy content="Orientación del área de ablación" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    ORIENTACIÓN DE ABLACIÓN (msnm): 
                                    <span>{featureValue.ORIENABLAC}</span>
                                </li>
                            </ul>
                        </AccordionItemPanel>
                    </AccordionItem>
    
                    {/* ZONA DE EXPOSICIÓN */}
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                ZONA DE EXPOSICIÓN
                            </AccordionItemButton>
                        </AccordionItemHeading>
    
                        <AccordionItemPanel>
                            <ul className="lista">
                                <li>
                                    <Tippy content="Área expuesta del glaciar (Km²)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    ÁREA EXPUESTA (Km²): 
                                    <span>{featureValue.AREA_EXP}</span>
                                </li>
                                <li>
                                    <Tippy content="Largo máximo expuesto del glaciar (Km)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    LARGO MÁXIMO EXPUESTO (Km): 
                                    <span>{featureValue.L_MAX_EXP}</span>
                                </li>
                                <li>
                                    <Tippy content="Altitud mínima del área expuesta (msnm)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    ALTITUD MÍNIMA EXPUESTA (msnm): 
                                    <span>{featureValue.HMINEXP}</span>
                                </li>
                            </ul>
                        </AccordionItemPanel>
                    </AccordionItem>
    
                    {/* DATOS DEL LEVANTAMIENTO */}
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                DATOS DEL LEVANTAMIENTO
                            </AccordionItemButton>
                        </AccordionItemHeading>
    
                        <AccordionItemPanel>
                            <ul className="lista">
                                <li>
                                    <Tippy content="Año de realización del inventario " trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    FECHA DEL INVENTARIO: 
                                    <span>{featureValue.INVENT_FEC}</span>
                                </li>
                                <li>
                                    <Tippy content="Fuente digitalización" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    FUENTE DE DIGITALIZACIÓN: 
                                    <span>{featureValue.FUENTE_DIG}</span>
                                </li>
                                <li>
                                    <Tippy content="Fecha de la fuente utilizada para la digitalización (dd/mm/aaaa)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    FECHA DE LA FUENTE: 
                                    <span>{featureValue.FUENTE_FEC}</span>
                                </li>
                                <li>
                                    <Tippy content="Sistema de referencia" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    DATUM: 
                                    <span>{featureValue.DATUM}</span>
                                </li>
                                <li>
                                    <Tippy content="Zona cartográfica en la que se sitúa el glaciar" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    HUSO: 
                                    <span>{featureValue.HUSO}</span>
                                </li>
                                <li>
                                    <Tippy content="Resolución espacial de la base de imágenes utilizada (m²)" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    PRECISIÓN DE MEDIDA (m²): 
                                    <span>{featureValue.PRECM}</span>
                                </li>
                                <li>
                                    <Tippy content="Error Absoluto" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    ERROR ABSOLUTO (km²): 
                                    <span>{featureValue.ERROR_KM2}</span>
                                </li>
                                <li>
                                    <Tippy content="Error Absoluto" trigger='click' animation='shift-away'>
                                        <i class="far fa-question-circle"></i>
                                    </Tippy>
                                    ERROR PROPORCIONAL: 
                                    <span>{featureValue.ERROR_PORC}</span>
                                </li>
                            </ul>
                        </AccordionItemPanel>
                    </AccordionItem>
    
                </Accordion>
                
            </div>
        )
    } else {
        return (
            <div className="sidebar">
                <div className="titulo">
                    <h2>Instrucciones</h2>
                </div>
                <div className="guia">
                    <p>Haz clic sobre un poligono para seleccionarlo y ver sus datos </p>
                </div>
            </div>
        )
    }    
}

