import { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useLeaflet } from "react-leaflet";
import L from "leaflet";
import shp from "shpjs";
import { FeatureContext } from '../../FeatureContext'

function Shapefile({ zipUrl, elaMethod }) {

  const { elaFeature } = useContext(FeatureContext);
  const [, setElaFeatureValue] = elaFeature;

  const { map } = useLeaflet();

  //funcion para definir estilos
  function elaStyle(ela) {
    var style;
    if (ela === 'AA') {
      style = {
        "color": "#ff7800",
        "weight": 5,
        "opacity": 0.65
      }
    }
    if (ela === 'AABR') {
      style = {
        "color": "#48ff00",
        "weight": 5,
        "opacity": 0.65
      }
    }
    if (ela === 'AAR') {
      style = {
        "color": "#0400ff",
        "weight": 5,
        "opacity": 0.65
      }
    }
    if (ela === 'MGE') {
      style = {
        "color": "#ea00ff",
        "weight": 5,
        "opacity": 0.65
      }
    }

    if (ela === 'border') {
      style = {
        "color": "#ffffff",
        "weight":2 ,
        "opacity": 1
      }
    }

    return style;
  }

  useEffect(() => {
    map.eachLayer(function(layer) {
      if (layer.feature) {
        map.removeLayer(layer);
      }
    })


    const geo = L.geoJson({ features: [] }, {
      onEachFeature: function saveFeatureData(feature) {
        setElaFeatureValue(feature.properties);
      },
      style: elaStyle(elaMethod)
    }).addTo(map);

    shp(zipUrl).then(function (data) {
      geo.addData(data);
    });
  });

  return null;
}

Shapefile.propTypes = {
  zipUrl: PropTypes.string.isRequired
};

export default Shapefile;
