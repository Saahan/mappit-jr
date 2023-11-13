import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./map-style.css";
import MarkerSearch from "./MarkerSearch";

export default function Map() {
  return (
    <div className="map-container-div">
      <MapContainer
        center={[43.654145088665525, -79.40799093055035]}
        zoom={11}
        scrollWheelZoom={false}
        className="map-container"
      >
        <MarkerSearch />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.jawg.io/jawg-terrain/{z}/{x}/{y}{r}.png?access-token=iefPC736yFPjmC5yxF4PR0yF7MECRpqOKkDgcXYjskQPBQcXBvS8ZJLhrQZsO0bM"
        />
      </MapContainer>
    </div>
  );
}

//Things to do:
// - Implement marker filters
// - Explore Search Functionality
// - Enhance Responsiveness of App (reduce image size, change font size on modals)