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

