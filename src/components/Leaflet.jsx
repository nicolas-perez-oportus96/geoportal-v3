import React, { useEffect, useRef, useContext} from "react";
import { Map, TileLayer, LayersControl, LayerGroup, } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { CRS } from 'leaflet';
import zipUrl from "./CL106000056AABR.zip";
import Shapefile from "./Shapefile";
import VectorTilesLayer from "./VectorTilesLayer";
import { FeatureContext } from './FeatureContext'

function Leaflet() {
  const mapRef = useRef();
  const { feature } = useContext(FeatureContext);
  const [ ,setFeatureValue] = feature;

  useEffect(() => {
    const map = mapRef.current.leafletElement;
    map.setView([34.74161249883172, 18.6328125], 2);
  }, []);

  

  return (
    <Map maxBounds={[[-35.494268, -70.735148], [-32.963408, -69.766694]]} zoom={8} minZoom={8} maxZoom={12} center={[-34.238347, -70.250921]} zoom={13} style={{ height: "100vh" }} crs={CRS.EPSG3857} ref={mapRef}>
      <LayersControl position="topright">
        {/* GRUPO DE CAPAS WORLD IMAGERY+ SHADERELIEF */}
        <LayersControl.BaseLayer checked name="HillShade" >
          <LayerGroup>
            {/* ESRI WORLD IMAGERY */}
            <TileLayer
              attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
            {/* OPEN MAP SURFER HILLSHADE */}
            <TileLayer
              attribution='Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> | Map data  <a href="https://lpdaac.usgs.gov/products/aster_policies">ASTER GDEM</a>, <a href="http://srtm.csi.cgiar.org/">SRTM</a>'
              url="https://maps.heigit.org/openmapsurfer/tiles/asterh/webmercator/{z}/{x}/{y}.png"
            />
          </LayerGroup>
        </LayersControl.BaseLayer>

        {/* ESRI Shaded Relief */}
        <LayersControl.BaseLayer name="ESRI Shaded Relief">
          <TileLayer
            attribution='Tiles &copy; Esri &mdash; Source: Esri'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}"
          />
        </LayersControl.BaseLayer>


        <LayersControl.Overlay checked name="Area de Estudio">
          <TileLayer url="http://34.121.165.39/teselas/CBase/{z}/{x}/{y}.png" tms={false} />
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Etiquetas">
          <TileLayer url="http://34.121.165.39/teselas/Label/{z}/{x}/{y}.png" tms={false} />
        </LayersControl.Overlay>


      </LayersControl>

      <VectorTilesLayer url="http://34.121.165.39/teselas/ING_VT/{z}/{x}/{y}.pbf" clickHandler={(e) => console.log(e.layer.properties)} />
      
      <Shapefile zipUrl={zipUrl} />
    </Map>
  );
}

export default Leaflet;
