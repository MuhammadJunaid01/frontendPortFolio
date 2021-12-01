import React from "react";
import { Container } from "react-bootstrap";
import "./skilbar.css";
const SkilProgressbar = () => {
  return (
    <div className="skilbarContainer">
      <Container>
        <div className="skilInfo">
          <h5>Skil</h5>
        </div>
        <ul>
          <li className="html">HTML5</li>
          <li className="css">CSS3</li>
          <li className="bootstrap">BOOTSTARP</li>
          <li className="metarialUi">METARIAL UI</li>
          <li className="javascript">JAVASCRIPT</li>
          <li className="react">REACT</li>
          <li className="procted">REACT PROTECTED ROUTE</li>
          <li className="node">NODE.JS</li>
          <li className="exoress">EXPRESS.JS</li>
          <li className="mongodb">MONGODB</li>
        </ul>
      </Container>
    </div>
  );
};

export default SkilProgressbar;
