import './App.css';
import React from 'react';
import L from 'leaflet'; // Import the Leaflet library


import CustomMap from './CustomMap';

// Custom marker icon
const customIcon = L.icon({
  iconUrl: require('./marker.png'), // Replace with the path to your custom marker icon
  iconSize: [40, 41],
  iconAnchor: [20, 35],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
});

function App() {
  return (
    <>

      <CustomMap customIcon={customIcon} address={"hoshiarpur,india"} coords={[]} />
    </>
  );
}

export default App;
