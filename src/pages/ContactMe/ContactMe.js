import React from "react";
import "./ContactMe.css";
import Form from "../../components/Form/Form";

const ContactMe = () => {
  return (
    <div id="contactMe" className="contact-me-container">
      <h2 className="header-contact">contact ME</h2>
      <p className="intro-text">
        Here you will find more information contact me, what I do, and my current
        skills mostly in terms of programming and technology.
      </p>
      <div className="contact-content">
        <Form />
      </div>
    </div>
  );
};

export default ContactMe;
