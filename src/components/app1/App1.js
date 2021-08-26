import React, { Component, } from 'react'
import Leaflet from '../map/Leaflet'
import Sidebar from './Sidebar'


export default class App1 extends Component {
    
    render() {
        return (
            <main className="app-container">
                <div className="instrucciones">
                    <div className="container flex">
                        <img src="/assets/app-icon.svg" alt="app-icon" />
                        <div className="texto">
                            <h1>Aplicacion 1: <span>Inventario Nacional de Glaciares de Chile Central</span></h1>
                            <p>Haz clic sobre un polígono para seleccionarlo y ver sus metadatos.</p>
                        </div>
                    </div>
                </div>

                <Sidebar/>

                <div className="map">
                    <Leaflet />
                </div>
            </main>
        )
    }
}
