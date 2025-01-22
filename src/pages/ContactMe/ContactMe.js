import React from "react";
import "./ContactMe.css";
import Form from "../../components/Form/Form";

const ContactMe = () => {
  return (
    <div id="contactMe" className="contact-me-container">
      <h2 className="header-contact">Contact Me</h2>
      <p className="intro-text">
        Here you will find more information to contact me, what I do, and my
        current skills mostly in programming and technology.
      </p>
      <div className="contact-content">
        <Form />
      </div>
    </div>
  );
};

export default ContactMe;
