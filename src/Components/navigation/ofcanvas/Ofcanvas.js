import React from "react";
import { Offcanvas } from "react-bootstrap";

const Ofcanvas = (props) => {
  const { show, handleClose } = props;
  return (
    <div>
      <Offcanvas
        style={{ width: "200px", height: "300px", marginTop: "100px" }}
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body></Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Ofcanvas;
