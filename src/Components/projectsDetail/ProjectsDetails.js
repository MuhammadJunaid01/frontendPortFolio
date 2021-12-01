import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import "./projectDetail.css";
const detail = [
  {
    name: "Motorcycle Sell Web Site",
    screen1: "https://i.ibb.co/LJm4QTm/motor1.png",
    screen2: "https://i.ibb.co/n0HY8xF/motor2.png",
    screen3: "https://i.ibb.co/42R7cmX/motor3.png",
    url: "https://mj-bike-shop.web.app/",
    image: "https://scr.template-help.com/90200/90261-original.jpg",
    technology:
      " React js,Css,Metarial Ui,Node js,Firebase, Heroku,Express js,MongoDb",
    about1:
      "Customers can book services, see their services, cancel their services and add reviews.",
    about2:
      "   Admin can approve services, manage all services, manage all bookings, add services, make admin others.",
    about3: "Customer service booking will be confirmed after login.",
  },
  {
    name: "Tourism Agency Website",
    screen1: "https://i.ibb.co/5GXG64M/tou1.png",
    screen2: "https://i.ibb.co/TvJC0Zy/tour2.png",
    screen3: "https://i.ibb.co/KzmnwP0/tour3.png",
    url: "https://fly-earth.web.app/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy6ayRJmSjbWs-2K005JeLzAJHTXMX0CtEF-UJomvVpejrTduIvSciYvLipgGW9oc9w0k&usqp=CAU",
    technology:
      "React js,Css,,ReactBootstrap,Node js,Firebase, Heroku,Express js,MongoDb",
    about1:
      "Customers can book services, see their services,  cancel their services.",
    about2:
      "Admin can approve services, manage all services, manage all bookings, add services, make admin others.",
    about3: "Customer service booking will be confirmed after login.",
  },
  {
    name: "Clinic Website",
    url: "https://red-cheresent-hospital.web.app/",
    screen1: "https://i.ibb.co/cCHgJrH/clink1.png",
    screen2: "https://i.ibb.co/ZzsQk8Z/clinik2.png",
    screen3: "https://i.ibb.co/YZT70zL/clinik3.png",
    image:
      "https://i.pinimg.com/originals/1f/9e/55/1f9e552fa3c01a2311c9c4b5fa2c20c1.jpg",
    technology: "React js,Css,ReactBootstrap,Firebase",
    about:
      "A website that offers information and treatments for various mental health issues,Responsive UI with the integration of Gmail password and Google sign-in authentication,Private Route Implement.",
  },
  {
    name: "Educational Web Site",
    screen1: "https://i.ibb.co/7NN52Ny/edu1.png",
    screen2: "https://i.ibb.co/Q9w3hps/edu2.png",
    screen3: "https://i.ibb.co/42G20yQ/edu3.png",
    url: "https://wisdom-school.netlify.app/scholarship",
    image:
      "https://freshdesignweb.com/wp-content/uploads/Educavo-Education-HTML-Template.jpg",
    technology: "React js,Css,ReactBootstrap,Firebase",
    about1:
      "A website that offers information and treatments for various mental health issues.",
    about2:
      "Responsive UI with the integration of Gmail password and Google sign-in authentication.",
    about3: "Private Route Implement.",
  },
];

const ProjectsDetails = () => {
  const { name } = useParams();
  const [findResult, setFindResult] = useState();

  const result = detail?.find((n) => n.name === name);
  console.log("result ", result);
  // console.log("data", detail);

  return (
    <div style={{ height: "610px" }}>
      <Container>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          {result.name}
        </h1>
        <Row className="gy-3">
          <Col sm={12} md={4} lg={4}>
            <img className="img-fluid" src={result.screen1} alt=""></img>
            <img className="img-fluid" src={result.screen2} alt=""></img>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <img className="img-fluid" src={result.screen2} alt=""></img>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <img className="img-fluid" src={result.screen3} alt=""></img>
          </Col>
        </Row>
        <div className="detailList">
          <li>{result.about1}</li>
          <li>{result.about2}</li>
          <li>{result.about3}</li>
        </div>
        <a
          className="hbtn hb-fill-middle-br linkBtn"
          href={result.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-link"></i> Demo live Site
        </a>
      </Container>
    </div>
  );
};

export default ProjectsDetails;
