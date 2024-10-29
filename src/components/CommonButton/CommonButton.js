import React from "react";
import "./CommonButton.css";

const CommonButton = ({ onClick, title }) => {
  return (
    <button className="contact-button" onClick={onClick}>
      {title}
    </button>
  );
};

export default CommonButton;
