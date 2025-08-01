import React from "react";
import "./CommonButton.css";
import { CommonButtonProps } from "../../types";

const CommonButton: React.FC<CommonButtonProps> = ({ onClick, title, className }) => {
  return (
    <button className={`contact-button ${className || ''}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default CommonButton;
