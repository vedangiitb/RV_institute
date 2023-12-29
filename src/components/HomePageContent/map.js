// Map.js
import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = () => {
  useEffect(() => {
    const map = L.map('map').setView([28.730681, 77.133268], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: 'location_icon.jpg', // Replace with the path to your custom icon
      iconSize: [0, 0],
      iconAnchor: [0, 0],
    });

    const marker = L.marker([28.730681, 77.133268], { icon: customIcon }).addTo(map);

    const popup = L.popup({ autoClose: false })
      .setLatLng([28.730681, 77.133268])
      .setContent('RV Institute');

    marker.bindPopup(popup).openPopup();

    // Return a cleanup function to remove the map instance when the component is unmounted
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '400px' }} />;
};

export default Map;
