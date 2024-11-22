// components/MapComponent.tsx
"use client"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import React from "react";

const mapContainerStyle = {
  width: "100%",
  height: "40vh",
};

const center = {
  lat: -1.957876, // example latitude
  lng: 30.112735, // example longitude
};

function MapComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY, // Make sure to use environment variables
  });

  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} center={center}>
      <Marker position={center} />
    </GoogleMap>
  );
}

export default MapComponent;
