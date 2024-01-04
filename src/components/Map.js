import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./map-style.css";
import MarkerSearch from "./MarkerSearch";

export default function Map() {
  return (
    <div style={{ overflow: "hidden" }}>
      <MapContainer
        center={[43.654145088665525, -79.40799093055035]}
        zoom={11}
        scrollWheelZoom={true}
        className="map-container"
      >
        <MarkerSearch />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

//Things to do:
// - Implement marker filters (done)
// - Explore Search Functionality (done)
// - Enhance Responsiveness of App (reduce image size, change font size on modals)
// - Styling Enhancement
// - Jawg Tiles url = "https://tile.jawg.io/jawg-terrain/{z}/{x}/{y}{r}.png?access-token=iefPC736yFPjmC5yxF4PR0yF7MECRpqOKkDgcXYjskQPBQcXBvS8ZJLhrQZsO0bM"
