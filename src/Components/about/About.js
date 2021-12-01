import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";
import aboutImage from "../../images/junaid.png";
const About = () => {
  return (
    <div className="aboutContainer">
      <Container>
        <div className="aboutme">
          <h1>About Me</h1>
        </div>
        <Row className="gy-3">
          <Col sm={12} md={12} lg={5}>
            <div className="aboutBanner">
              <img className="img-fluid" src={aboutImage} alt="aboutImage" />
            </div>
          </Col>
          <Col sm={12} md={12} lg={7}>
            <div className="aboutInfo">
              <h4>
                Hello, I am
                <span style={{ color: "#eca600" }}> Muhammad Junaid</span>
              </h4>
              <p>
                I am a front-end developer with problem-solving skills and
                proven experience in creating and designing websites in a
                test-driven environment.
                <br />
                <br />
                Designed and developed front-end 60+ webpages, using html5,css3,
                bootstrap,javascript, 30+ full-stack webpages,using react,
                reactBootstrap, react-router, axios, react-hook-form, firebase
                authentication, node js, express js and deploy firebase.
              </p>

              <a
                onClick={() => console.log("heeeee")}
                className="hbtn hb-fill-middle-br hirebtn"
                href="#"
              >
                Hire Me
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
