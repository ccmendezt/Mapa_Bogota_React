import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';

let map = new Map({
  basemap: "streets-relief-vector" // Tipo de mapa base inicial
});

const view = new MapView({
  container: "root",
  map: map,
  center: [-74.05121774713942, 4.673863279034983], // Mapa centrado en el edificio de ESRI COLOMBIA en el Chicó
  zoom: 12
});

const cambiarVista = new BasemapToggle({
  view: view, // Acceso al mapa base "topo-vector" del mapa
  nextBasemap: "osm" // Mapa base alternativo
});

// Agregar el widget de cambiar vista al mapa en la esquina superior derecha
view.ui.add(cambiarVista, "top-right");

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(view)
