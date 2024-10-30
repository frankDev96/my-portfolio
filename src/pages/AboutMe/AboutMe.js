import React from "react";
import "./AboutMe.css";
import CommonButton from "../../components/CommonButton/CommonButton";

const AboutMe = () => {
  return (
    <div id="about" className="about-me-container">
      <h2 className="header-about">ABOUT ME</h2>
      <p className="intro-text">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology.
      </p>
      <div className="about-content">
        <div className="about-left">
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
          <CommonButton title={"CONTACT"} />
        </div>
        <div className="about-right">
          <h3>My Skills</h3>
          <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>React Native</span>
            <span>GIT</span>
            <span>Github</span>
            <span>Responsive Design</span>
            <span>REST</span>
            <span>Graphql</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
