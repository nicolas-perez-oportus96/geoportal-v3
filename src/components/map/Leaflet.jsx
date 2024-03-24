import React, { useEffect, useState, useContext } from "react";
import { Map, TileLayer, LayersControl, LayerGroup, useLeaflet } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { CRS } from 'leaflet';
import Shapefile from "./Shapefile";
import Border from "./Border";
import VectorTilesLayer from "./VectorTilesLayer";
import { FeatureContext } from '../../FeatureContext';
import { BingLayer } from 'react-leaflet-bing';
import { DEV_AREA_ESTUDIO_URL, DEV_BASE_URL, DEV_ETIQUETAS_URL, DEV_VT_URL } from "../../properties";

function Leaflet() {
  const mapRef = useLeaflet();
  const { feature, elaMethod, elaURL } = useContext(FeatureContext);
  const [featureValue, setFeatureValue] = feature;
  const [elaMethodValue, setElaMethodValue] = elaMethod;
  const [elaURLValue, setElaURLValue] = elaURL;
  const bing_key = "ArSPuxaxB8bp-VtsbY3jIUaocR9WLqKRM5X1rhjQLHHwolRjr5oAoUZ436gUVrvM"
  const [borderShapeURL, setBorderShapeURL] = useState(null);

  // FUNCIÓN PARA AÑADIR DATOS DEL GLACIAR SELECCIONADO AL CONTEXT
  async function getFeatureData(featureData) {

    if (featureData.COD_GLA !== featureValue.COD_GLA) {
      setElaURLValue(null)
      setElaMethodValue(null)
      setFeatureValue(featureData);
      getBorderShape(featureData.COD_GLA)
    } else {
      console.log('mismo glaciar')
    }

  }


  // FUNCIÓN PARA COMPONER URL DEL SHAPE CORRESPONDIENTE
  async function getElaShapeURL(method, codGla) {
    // const url = "https://mobble.dev/tesis/app2/SHP/" + method + "/" + codGla + method + ".zip";
    setElaURLValue(`${DEV_BASE_URL}/app2/SHP/${method}/${codGla}${method}.zip`);
  }

  // FUNCIÓN PARA COMPONER URL DEL SHAPE BORDE DEL GLACIAR 
  async function getBorderShape(codGla) {
    // const url = "https://mobble.dev/tesis/teselas/select/" + codGla + ".zip";
    setBorderShapeURL(`${DEV_BASE_URL}/teselas/select/${codGla}.zip`);
  }


  //función para limpiar datos 
  const cleanData = () => {
    if (Object.entries(featureValue).length !== 0) {
      setFeatureValue({});
    } else {
      console.log('glaciar no seleccionado')
    }
  };


  useEffect(() => {
    getElaShapeURL(elaMethodValue, featureValue.COD_GLA)
  }, [elaMethodValue])


  return (
    <Map maxBounds={[[-35.494268, -70.735148], [-32.963408, -69.766694]]} zoom={8} minZoom={8} maxZoom={15} center={[-34.238347, -70.250921]} style={{ height: "100vh" }} crs={CRS.EPSG3857} ref={mapRef} ondragstart={cleanData} id="mapa" key={1} animate={true} onbaselayerchange={() => console.log('object')}  >
      <LayersControl collapsed={false} position="topright" >
        {/* GRUPO DE CAPAS WORLD IMAGERY+ SHADERELIEF */}
        <LayersControl.BaseLayer checked name="HillShade" >
          <LayerGroup key={2} >
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
            key={3}
          />
        </LayersControl.BaseLayer>

        {/* BingMapsLayer */}
        <LayersControl.BaseLayer name="Bing Maps Satellite"  >
          <BingLayer bingkey={bing_key} key={4} />
        </LayersControl.BaseLayer>
      </LayersControl>

      {/* capa base */}
      <TileLayer url={DEV_AREA_ESTUDIO_URL} zIndex={5000} tms={false} key="5" />

      {/* glaciares */}
      <VectorTilesLayer url={DEV_VT_URL} clickHandler={(e) => getFeatureData(e.layer.properties)} id="glaciares" />

      {/* ELA */}
      {borderShapeURL !== null &&  <Border zipUrl={borderShapeURL} /> }

      {/* ELA */}
      {elaURL !== null && <Shapefile zipUrl={elaURLValue} elaMethod={elaMethodValue} key="7" />}

      {/* etiquetas */}
      <TileLayer url={DEV_ETIQUETAS_URL} tms={false} zIndex={5004} key="8" />
    </Map>
  );
}

export default Leaflet;
