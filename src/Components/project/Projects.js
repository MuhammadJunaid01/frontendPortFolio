import React, { useEffect, useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import { useHistory } from "react-router";
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
      <Row>
        {skil?.map((item, index) => (
          <Col key={index} lg={3}>
            <div>
              <div className="projectInfo"></div>
              <div className="procetsBanner">
                <img className="projectsImage" src={item?.image} alt="" />
              </div>
              <a
                className="hbtn hb-fill-middle-br demobtn"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
