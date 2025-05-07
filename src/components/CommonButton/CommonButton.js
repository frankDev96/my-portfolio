import React from "react";
import "./CommonButton.css";

const CommonButton = ({ onClick, title, className }) => {
  return (
    <button className={`contact-button ${className || ''}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default CommonButton;
