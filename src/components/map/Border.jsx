import { useEffect } from "react";
import PropTypes from "prop-types";
import { useLeaflet } from "react-leaflet";
import L from "leaflet";
import shp from "shpjs";

function Border({ zipUrl, }) {

  const { map } = useLeaflet();

  //funcion para definir estilos
  function elaStyle() {
    const style = {
      "color": "#ffffff",
      "weight":2 ,
      "opacity": 1
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
      onEachFeature: console.log("object"),
      style: elaStyle()
    }).addTo(map);

    shp(zipUrl).then(function (data) {
      geo.addData(data);
    });
  });

  return null;
}

Border.propTypes = {
  zipUrl: PropTypes.string.isRequired
};

export default Border;
