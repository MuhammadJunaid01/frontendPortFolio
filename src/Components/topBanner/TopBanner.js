import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import junaid from "../../MUHAMMAD-JUNAID.pdf";
import "./topBanner.css";
import Typical from "react-typical";
const TopBanner = () => {
  return (
    <div>
      <Container>
        <div className="bannerInfo">
          <p className="welCome">Welcome!</p>
          <p
            style={{
              fontSize: "37px",
              fontWeight: "700",
            }}
          >
            i am
            <span className="typicaltext">
              {" "}
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  " Muhammad junaid",
                  2000,
                  " Frontend Developer",
                  2000,
                  " Web Designer",
                  2000,
                  " Mern Stack Developer",
                  2000,
                ]}
              ></Typical>
            </span>
          </p>
          <a className="hbtn hb-fill-middle-br" href={junaid} download>
            Download Resume
          </a>
        </div>
      </Container>
    </div>
  );
};

export default TopBanner;
