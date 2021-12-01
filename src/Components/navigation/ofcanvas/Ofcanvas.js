import React from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ofcanvas.css";
const Ofcanvas = (props) => {
  const { show, handleClose } = props;
  return (
    <div>
      <Offcanvas
        className="ofcanvasCont"
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <Link style={{ textDecoration: "none" }} to="/">
              <li className="navLinkCanvas">home</li>
            </Link>

            <li className="navLinkCanvas">about</li>
            <Link style={{ textDecoration: "none" }} to="/blog">
              <li className="navLinkCanvas">blog</li>
            </Link>
            <li className="navLinkCanvas">project</li>
            <li className="navLinkCanvas">contact</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Ofcanvas;
