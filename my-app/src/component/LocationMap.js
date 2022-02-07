import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {

  return (
  <div>
    <MapContainer center={[41.481411,-71.3109152]} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[41.481411,-71.3109152]}>
        <Popup>
          Newport <br/> 
          RI 02840 <br/> 
          United States of America
        </Popup>
      </Marker>
    </MapContainer>
  </div>

  )
}

export default Map