import React from "react";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";

export default function BootstrapModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      id={props.modalData.id}
      backdrop={false}
      centered
    >
      <Modal.Header closeButton className="modal-header">
        <Modal.Title>
          {props.modalData.name} <br />
          <span style={{ fontSize: "15px" }}>{props.modalData.category}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
      <div style={{textAlign:"center"}}>
        <img
          src={props.modalData.image1}
          alt="error"
          className="modal-image"
        ></img></div>
        <Row>{props.modalData.description}</Row>
      </Modal.Body>
    </Modal>
  );
}
