import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h2>ABOUT ME</h2>
      <p className="intro-text">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology.
      </p>
      <div className="about-content">
        <div className="about-left">
          <h3>Get to know me!</h3>
          <p>
            I'm a <strong>Frontend Focused Web Developer</strong> building and
            managing the Front-end of Websites and Web Applications that leads
            to the success of the overall product. Check out some of my work in
            the Projects section.
          </p>
          <p>
            I also like sharing content related to the stuff that I have learned
            over the years in <strong>Web Development</strong> so it can help
            other people of the Dev Community. Feel free to Connect or Follow me
            on my <a href="#">Linkedin</a> and <a href="#">Instagram</a> where I
            post useful content related to Web Development and Programming.
          </p>
          <p>
            I'm open to <strong>Job</strong> opportunities where I can
            contribute, learn and grow. If you have a good opportunity that
            matches my skills and experience then don't hesitate to{" "}
            <a href="#">contact</a> me.
          </p>
          <button className="contact-button">CONTACT</button>
        </div>
        <div className="about-right">
          <h3>My Skills</h3>
          <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>WordPress</span>
            <span>PHP</span>
            <span>SASS</span>
            <span>GIT</span>
            <span>Github</span>
            <span>Responsive Design</span>
            <span>SEO</span>
            <span>Terminal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
