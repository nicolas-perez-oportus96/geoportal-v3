import React from 'react'
import {withLeaflet} from 'react-leaflet';
import VectorGridDefault from "react-leaflet-vectorgrid";
import L from 'leaflet';

export default function VectorTilesLayer(props) {

    //estilos para los vectores  
    const vectorStyles = {
        ING_Montana: {
            minZoom: 12,
            stroke: true,
            color: 'black',
            weight: 1.3,
            opacity: 0.5,
            linejoin: 'round',
            dashArray: '2, 3',
            fill: true,
            fillColor: '#39d2ff',
            fillOpacity: 0.5,
        },
        ING_Valle: {
            stroke: true,
            color: 'black',
            weight: 1.3,
            opacity: 0.5,
            linejoin: 'round',
            dashArray: '2, 3',
            fill: true,
            fillColor: '#39ecbc',
            fillOpacity: 0.5,
        },
        ING_Rocoso: {
            stroke: true,
            color: 'black',
            weight: 1.3,
            opacity: 0.5,
            linejoin: 'round',
            dashArray: '2, 3',
            fill: true,
            fillColor: '#ffd501',
            fillOpacity: 0.5,
        },
        ING_Glaciarete: {
            stroke: true,
            color: 'black',
            weight: 1.3,
            opacity: 0.5,
            linejoin: 'round',
            dashArray: '2, 3',
            fill: true,
            fillColor: '#ac11ff',
            fillOpacity: 0.5,
        }
    };

    //opciones VectorGrid
    const options = {
        tolerance: 30, // 5 simplification tolerance (higher means simpler)
        extent: 4096, //4096, // 4096 tile extent (both width and height)
        buffer: 128, // 64 default 64tile buffer on each side
        rendererFactory: L.svg.tile,
        type: "protobuf",
        url: props.url,
        vectorTileLayerStyles: vectorStyles,
        subdomains: "abcd",
        key: "abcdefghi01234567890",
        interactive: true,
        zIndex: 401
    };

    const VectorGrid = withLeaflet(VectorGridDefault);


    return (
        <VectorGrid {...options}  onClick={ (e) => {props.clickHandler(e)}  } />
    )

}
