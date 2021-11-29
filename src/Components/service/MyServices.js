import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./service.css";
import Spinner from "react-bootstrap/Spinner";
const MyServices = () => {
  const [services, setServices] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("./service.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  return loader ? (
    <Spinner animation="grow" variant="info" />
  ) : (
    <div className="servicesContainer">
      <Container>
        <div className="myServiceInfo">
          <h3 className="myservice">
            My <span style={{ color: "#ECA600" }}>Service</span>
            <hr className="serviceborder" />
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            minus vero, cum saepe magnam totam officiis id assumenda doloremque
            veniam!
          </p>
        </div>
        <Row>
          {services?.map((service, index) => (
            <Col key={index} sm={12} md={6} lg={3}>
              <div className="serviceContainer">
                <p>{service.name}</p>
                <p>{service.info}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MyServices;
