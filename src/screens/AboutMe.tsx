import React from "react";

interface AboutMeProps { }

const AboutMe: React.FC<AboutMeProps> = () => {
    return (
        <div className="about-me">
            <h1>About Me</h1>
            <div className="about-content">
                <div className="profile-section">
                    {/* Add profile image here */}
                </div>
                <div className="bio-section">
                    <h2>Hi, I'm Franklin</h2>
                    <p>Frontend Developer specializing in React and TypeScript</p>
                    {/* Add more bio content */}
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
