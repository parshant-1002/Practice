import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

function CustomMap({ customIcon, coords = [], address = "" }) {
    const streetViewURL="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    const satelliteViewURL="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
    const streetView = "streetView"
    const sateliteView = "sateliteView"

    const [viewType, setViewType] = useState(streetView)
    const [coordinates, setCoordinates] = useState([50, 30]);
    const [locationName, setLocationName] = useState("")
    const map = useRef(null)
    const handleGeocode = async (locationSelected) => {
    
        const address = locationSelected;
        const provider = new OpenStreetMapProvider();
        const results = await provider.search({ query: address });
        if (results.length > 0) {
            const { y: lat, x: lon } = results[0];
            const { label } = results[0]
            setLocationName(label)
            setCoordinates([lat, lon]);
            map.current.flyTo([lat, lon], 10);
            console.log(lat, lon)
        } else {
            console.log('No results found');
        }
    };

    useEffect(() => {
        if (address) {
            handleGeocode(address)
        }
    }, [address])

    return (
        <div>
            <div className='buttongrp'>
                <button onClick={() => { setViewType(streetView) }}>street</button>
                <button onClick={() => { setViewType(sateliteView) }}>satellite</button>
            </div>
            <div className='map-container'>
                <MapContainer className='mapData' ref={map} center={coords?.length ? coords : coordinates} zoom={10} style={{ height: '80vh', width: "50%" }} zoomControl={false} attributionControl={false}  >
                    <TileLayer
                        url={viewType === streetView ? streetViewURL : satelliteViewURL}
                    />
                    <ZoomControl position="bottomright" />
                    <Marker position={coords?.length ? coords : coordinates} icon={customIcon}>
                        <Popup>{locationName}</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>

    );
}

export default CustomMap;
