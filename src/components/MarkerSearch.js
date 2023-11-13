import React from "react";
import { Popup, Marker } from "react-leaflet";
import "./map-style.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { markerDetails } from "./marker-details";
import SearchMenu from "./SearchMenu";
import BootstrapModal from "./BootstrapModal";

export default function MarkerSearch() {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState("");
  const [queryArray, setQueryArray] = useState(markerDetails);
  let filter = [];

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  function passQuery(e) {
    console.log(e);

    filter = markerDetails.filter((item) => {
      return (
        item.name.toLowerCase().includes(e.toLowerCase()) ||
        item.category.toLowerCase().includes(e.toLowerCase())
      );
    });
    setQueryArray(filter);
    //console.log(filter);
  }

  return (
    <div>
      <SearchMenu passQuery={passQuery} />

      {queryArray.map((item) => (
        <Marker
          position={[item.position[0], item.position[1]]}
          key={item.id}
          icon={item.icon}
        >
          <Popup>
            <p className="popup-p">{item.name}</p>
            <p className="popup-p" style={{ fontStyle: "italic" }}>
              {item.category}
            </p>
            <p className="popup-p">{item.address}</p>
            <p className="popup-p">
              <Button
                variant="link"
                onClick={() => {
                  handleShow();
                  setModalData(item);
                }}
              >
                more info...
              </Button>
            </p>

            <BootstrapModal
              modalData={modalData}
              show={show}
              handleClose={handleClose}
              handleShow={handleShow}
            />
          </Popup>
        </Marker>
      ))}
    </div>
  );
}
