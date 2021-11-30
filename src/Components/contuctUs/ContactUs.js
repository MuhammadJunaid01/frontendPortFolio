import React from "react";
import "./contuctUs.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { Container } from "react-bootstrap";
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
            title: "Your work has been saved",
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
          <br />
          <textarea
            required
            className="textArea"
            name="message"
            placeholder="Message:"
          />
          <br />
          <input className="contactbtn" type="submit" value="Send" />
        </form>
      </Container>
    </div>
  );
};

export default ContactUs;
