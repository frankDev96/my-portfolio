import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import "../../styles/animations.css";
import CommonButton from "../../components/CommonButton/CommonButton";

interface HomePageProps {
    scrollToProjects?: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ scrollToProjects }) => {
    return (
        <div id="home" className="home-screen">
            <h1 className="title fade-in">HEY, I'M FRANKLIN SAMUVEL</h1>
            <p className="subtitle slide-up">
                A Result-Oriented Front End Developer building and managing Websites and
                Web Applications that leads to the success of the overall product
            </p>
            <div className="button scale-in">
                {scrollToProjects ? (
                    <CommonButton title={"PROJECTS"} onClick={scrollToProjects} className="hover-lift" />
                ) : (
                    <Link to="/projects" style={{ textDecoration: 'none' }}>
                        <CommonButton title={"PROJECTS"} className="hover-lift" />
                    </Link>
                )}
            </div>

            <div className="featured-skills">
                <h3 className="slide-up">Technical Skills</h3>
                <div className="skills-list">
                    <span className="skill-tag" style={{ "--delay": "1" } as React.CSSProperties}>React</span>
                    <span className="skill-tag" style={{ "--delay": "2" } as React.CSSProperties}>TypeScript</span>
                    <span className="skill-tag" style={{ "--delay": "3" } as React.CSSProperties}>JavaScript</span>
                    <span className="skill-tag" style={{ "--delay": "4" } as React.CSSProperties}>HTML/CSS</span>
                    <span className="skill-tag" style={{ "--delay": "5" } as React.CSSProperties}>React Native</span>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
