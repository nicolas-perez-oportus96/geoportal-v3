import React, { Component, } from 'react'
import Leaflet from '../map/Leaflet'
import Sidebar from './Sidebar'


export default class App1 extends Component {

    render() {
        return (
            <main className="app-container">

                <Sidebar />

                <div className="map">
                    <Leaflet />
                </div>

                <a href="/home" class="float">
                    <i class="fas fa-arrow-circle-left my-float"></i>
                </a>
            </main>
        )
    }
}
