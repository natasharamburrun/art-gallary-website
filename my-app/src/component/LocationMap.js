import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';


const Map = () => {

  const position = [41.481718, -71.310360]

  const svgIcon = L.divIcon({
    html: `
    <svg width="66" height="88" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
      <path d="M0 56V0h66v56H45L33 88 21 56H0Z" fill="#151515"/>
      <circle fill="#D5966C" cx="33" cy="28" r="12"/></g>
    </svg>`,
    className: "svg-icon",
    iconSize: [24, 40],
    iconAnchor: [12, 40],
  });

  return (
  <div>
    <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={svgIcon}>
      </Marker>
    </MapContainer>
  </div>

  )
}

export default Map