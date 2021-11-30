import React from "react";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navigation.css";
import Ofcanvas from "./ofcanvas/Ofcanvas";
const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand
            style={{
              color: "#FFB400",
              fontWeight: "700",
              letterSpacing: "10px",
            }}
            href="#"
          >
            JUNAID
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <span onClick={handleShow} className="topBars">
                <i className="fas fa-bars"></i>
              </span>
              <Ofcanvas
                show={show}
                setshow={setShow}
                handleClose={handleClose}
              ></Ofcanvas>
              {["start", "end", "top", "bottom"].map((placement, idx) => (
                <Ofcanvas key={idx} placement={placement} name={placement} />
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
