import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./project.css";
const Projects = () => {
  const [skil, setSkil] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => {
        setSkil(data);
      });
  }, []);

  const handleDemoProject = (url) => {
    console.log("url", url);
    window.open(url, "_blank");
  };

  return (
    <div className="projectsContainer">
      <Container>
        <div className="projectInfo">
          <h2>My Recent Work</h2>
        </div>
        <Row>
          {skil?.map((item, index) => (
            <Col key={index} lg={3}>
              <div>
                <img className="projectsImage" src={item?.image} alt="" />
                <Link to={`/projects/${item.name}`}>
                  <a
                    className="hbtn hb-fill-middle-br demobtn"
                    href="#"
                    rel="noopener noreferrer"
                  >
                    Detail
                  </a>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
