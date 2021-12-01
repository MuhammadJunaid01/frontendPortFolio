import React from "react";
import "./contuctUs.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cteoflm",
        "template_iarjvtg",
        form.current,
        "user_3AiRAus9Euf3lX4CurPAz"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Your Succesfully send:",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
          alert("errrrrrrrrrrrr");
        }
      );
  };

  return (
    <div className="conatctContainer">
      <Container>
        <Row>
          <Col sm={12} md={5} lg={5}>
            <div className="followme">
              <h3>Get in Touch</h3>
              <p>Address: Chittagong,Bangladesh</p>
              <p>Email: m.junaindbkh2020@gmail.com</p>
              <p>Phone: +880163-4900664</p>
              <h4>Follow Me</h4>
              <a
                className="hbtn hb-fill-middle-br followIcon"
                href="https://www.facebook.com/profile.php?id=100009224856897"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                className="hbtn hb-fill-middle-br followIcon"
                href="https://github.com/MuhammadJunaid01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                className="hbtn hb-fill-middle-br followIcon"
                href="https://www.linkedin.com/in/mj-juanaid-7358b5216/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </Col>
          <Col sm={12} md={7} lg={7}>
            <form ref={form} onSubmit={sendEmail}>
              <input
                required
                className="inputForm"
                type="text"
                name="user_name"
                placeholder="Name:"
              />

              <input
                required
                className="inputForm"
                type="email"
                name="user_email"
                placeholder="Email:"
              />
              <textarea
                required
                className="textArea"
                name="message"
                placeholder="Message:"
              />
              <input className="contactbtn" type="submit" value="Send" />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
