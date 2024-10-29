import React from "react";
import "./HomeScreen.css";
import CommonButton from "../CommonButton/CommonButton";

function HomeScreen() {
  return (
    <div id="home" className="home-screen">
      <h1 className="title">HEY, I'M FRANKLIN SAMUVEL</h1>
      <p className="subtitle">
        A Result-Oriented Front End Developer building and managing Websites and
        Web Applications that leads to the success of the overall product
      </p>
      <CommonButton title={"PROJECTS"} />
    </div>
  );
}

export default HomeScreen;
