import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navigation.css";
const Navigation = () => {
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
              <Link className="menuItem" to="/home">
                Home
              </Link>
              <Link className="menuItem" to="/home">
                About
              </Link>
              <Link className="menuItem" to="/home">
                Service
              </Link>
              <Link className="menuItem" to="/home">
                Work
              </Link>
              <Link className="menuItem" to="/home">
                blog
              </Link>
              <Link className="menuItem" to="/home">
                contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
