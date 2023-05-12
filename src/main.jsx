import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';

let map = new Map({
  basemap: "osm" // Tipo de mapa base inicial
});

const view = new MapView({
  container: "root",
  map: map,
  center: [-74.05121774713942, 4.673863279034983], // Mapa centrado en el edificio de ESRI COLOMBIA en el Chicó
  zoom: 20 // Nivel de zoom inicial
});

const cambiarVista = new BasemapToggle({
  view: view, // Acceso al mapa base del mapa
  nextBasemap: "streets-relief-vector" // Mapa base alternativo
});

// Agregar el widget de cambiar vista al mapa en la esquina superior derecha
view.ui.add(cambiarVista, "top-right");

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(view)
