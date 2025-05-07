import React from "react";
import "./AboutMe.css";
import "../../styles/animations.css";
import CommonButton from "../../components/CommonButton/CommonButton";

const AboutMe = () => {
  return (
    <section id="about" className="about-me-container fade-in">
      <h2 className="header-about slide-up">ABOUT ME</h2>
      <p className="intro-text slide-up">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology.
      </p>
      <div className="about-content">
        <div className="about-left scale-in">
          <h3 className="get-to-know">Get to know me!</h3>
          <p>
            I'm a <strong>Frontend Focused Developer</strong> building and
            managing the Front-end of Mobile and Web Applications that leads to
            the success of the overall product. Check out some of my work in the
            Projects section.
          </p>
          <p>
            I also like sharing content related to the stuff that I have learned
            over the years in <strong>Mobile/Web Development</strong> so it can
            help other people of the Dev Community. Feel free to Connect or
            Follow me on my{" "}
            <strong>
              <a href="https://www.linkedin.com/in/franklin-s-04994114a/">
                Linkedin
              </a>
            </strong>{" "}
            where I post useful content related to Mobile/Web Development and
            Programming.
          </p>
          <p>
            I'm open to <strong>Job</strong> opportunities where I can
            contribute, learn and grow. If you have a good opportunity that
            matches my skills and experience then don't hesitate to{" "}
            <strong>contact</strong> me.
          </p>
          <div className="button-me scale-in">
            <CommonButton title={"CONTACT"} className="hover-lift" />
          </div>
        </div>
        <div className="about-right slide-up">
          <h3>My Skills</h3>
          <div className="skills">
            <span className="skill-tag" style={{ "--delay": 1 }}>HTML</span>
            <span className="skill-tag" style={{ "--delay": 2 }}>CSS</span>
            <span className="skill-tag" style={{ "--delay": 3 }}>JavaScript</span>
            <span className="skill-tag" style={{ "--delay": 4 }}>React</span>
            <span className="skill-tag" style={{ "--delay": 5 }}>React Native</span>
            <span className="skill-tag" style={{ "--delay": 6 }}>GIT</span>
            <span className="skill-tag" style={{ "--delay": 7 }}>Github</span>
            <span className="skill-tag" style={{ "--delay": 8 }}>Responsive Design</span>
            <span className="skill-tag" style={{ "--delay": 9 }}>REST</span>
            <span className="skill-tag" style={{ "--delay": 10 }}>Graphql</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
