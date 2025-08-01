import React from "react";
import "./HomeScreen.css";
import "../../styles/animations.css";
import CommonButton from "../../components/CommonButton/CommonButton";

interface HomeScreenProps {
  scrollToProjects: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ scrollToProjects }) => {
  return (
    <div id="home" className="home-screen">
      <h1 className="title fade-in">HEY, I'M FRANKLIN SAMUVEL</h1>
      <p className="subtitle slide-up">
        A Result-Oriented Front End Developer building and managing Websites and
        Web Applications that leads to the success of the overall product
      </p>
      <div className="button scale-in">
        <CommonButton title={"PROJECTS"} onClick={scrollToProjects} className="hover-lift" />
      </div>
    </div>
  );
}

export default HomeScreen;
