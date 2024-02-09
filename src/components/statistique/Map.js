import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current.leafletElement;
      const bounds = map.getBounds();
      map.fitBounds(bounds);
    }
  }, []);

  return (
    <div style={{ height: '300px', width: '500px' }}>
      <MapContainer ref={mapRef} center={[-20.2853, 47.5343]} zoom={5} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
};

export default Map;