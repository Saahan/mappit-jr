import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./nav-style.css";

export default function Nav() {
  return (
    <Navbar className="bg-body-tertiary navi-main">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src="/img/Mappit2.png"
            width="200"
            height="70"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
