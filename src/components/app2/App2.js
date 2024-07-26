import React from 'react'
import Leaflet from '../map/Leaflet'
import Sidebar from './Sidebar'

export default function App2() {
    return (
        <main className="app-container">
            <Sidebar />

            <div className="map">
                <Leaflet />
            </div>

            <a href="/" className="float">
                <i className="fas fa-arrow-circle-left my-float"></i>
            </a>

            <img src="/assets/leyenda.jpeg" alt="leyenda" className="leyenda" />
        </main>
    )
}
