import "./map-style.css";
import L from "leaflet";
import { useMap } from "react-leaflet";
import { useState, useEffect } from "react";
import { markerDetails } from "./marker-details";

import React from "react";

export default function SearchMenu(props) {
  const [markerSelect, setMarkerSelect] = useState(0);

  const map = useMap();

  function selectMarker(e) {
    setMarkerSelect(() => parseInt(e.target.value));
  }

  function findLocation(e) {
    e.preventDefault();
    map.locate().on("locationfound", (e) => {
      map.flyTo(e.latlng, 11);
      L.marker(e.latlng).addTo(map);
    });
  }

  function recenter() {
    map.flyTo([43.654145088665525, -79.40799093055035], 11);
  }

  function passQueryData(e) {
    props.passQuery(e.target.value);
  }

  useEffect(() => {
    markerDetails.forEach((item) => {
      if (item.id === markerSelect) {
        map.setView([item.position[0], item.position[1]], 13);
      } else if (markerSelect === 0) {
        map.setView([43.654145088665525, -79.40799093055035], 11);
      }
    });
  });

  return (
    <div>
      <form className="search-input">
        <div className="select-box">
          <select
            name="markers"
            id="markers"
            onClick={selectMarker}
            style={{ height: "30px", width: "200px" }}
            className="search-bar"
          >
            <option value={0} style={{ fontWeight: "bold" }}>
              Default
            </option>
            {markerDetails.map((item) => (
              <option
                value={item.id}
                key={item.id}
                style={{ fontWeight: "bold" }}
              >
                {item.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search"
            onChange={passQueryData}
            className="search-bar"
          ></input>
        </div>{" "}
      </form>
      <div
        className="button-container"
        style={{ textAlign: "center", backgroundColor: "white" }}
      >
        <div className="icon-container">
          <img
            src="/img/pin.svg"
            width={30}
            height={30}
            onClick={findLocation}
            alt="location"
          ></img>
        </div>
        <br />
        <div style={{ marginTop: "-18px" }} className="icon-container">
          <img
            src="/img/compass.svg"
            width={30}
            height={30}
            onClick={recenter}
            alt="recenter"
          ></img>
        </div>
      </div>
    </div>
  );
}
