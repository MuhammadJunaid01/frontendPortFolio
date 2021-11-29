import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./skils.css";
const Skils = () => {
  const [skils, setSkils] = useState();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("./skils.json")
      .then((res) => res.json())
      .then((data) => {
        setSkils(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  return (
    <div className="skilContainer">
      <Container>
        <div className="skilInfo">
          <h5>My Skils</h5>
        </div>
        <Row className="gy-3">
          {skils?.map((skil, index) => (
            <Col key={index} sm={12} md={2} lg={2}>
              <Card className="skilCard">
                <Card.Img
                  className=" skilImage"
                  variant="top"
                  src={skil?.image}
                />
                <Card.Body>
                  <Card.Title>{skil?.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Skils;
