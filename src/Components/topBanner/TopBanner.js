import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./topBanner.css";
import Typical from "react-typical";
import topBannerImge from "../../images/junaid.png";
const TopBanner = () => {
  return (
    <div>
      <Container>
        <Row className="rowContainer">
          <Col sm={12} lg={6} md={6}>
            <div className="bannerInfo">
              <p className="welCome">Welcome!</p>
              <p
                style={{
                  fontSize: "37px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                i am
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    " Muhammad junaid",
                    2000,
                    " developer",
                    2000,
                    " designer",
                    2000,
                    " programmer",
                    2000,
                  ]}
                ></Typical>
              </p>
              <p style={{ fontSize: "20px" }}>
                I am a front-end developer with problem-solving skills and
                proven experience in creating and designing websites in a
                test-driven environment.
              </p>
            </div>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <img
              className="img-fluid"
              src={topBannerImge}
              alt="topBannerImage"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBanner;
