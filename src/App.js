import React from "react";
import "./styles.css";
import Leaflet from "./components/Leaflet";
import { FeatureProvider } from './components/FeatureContext'

export default function App() {
  return (
  <FeatureProvider>

    <Leaflet />

  </FeatureProvider>)
}
