import React from 'react';
import { Link } from 'react-router-dom';

interface HomepageProps { }

const Homepage: React.FC<HomepageProps> = () => {
    return (
        <div className="homepage-container">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Franklin Samuvel</h1>
                    <h2>Frontend Developer</h2>
                    <p>
                        A Result-Oriented Front End Developer building and managing Websites and
                        Web Applications that leads to the success of the overall product
                    </p>
                    <div className="cta-buttons">
                        <Link to="/projects" className="cta-button primary">View Projects</Link>
                        <Link to="/contact" className="cta-button secondary">Contact Me</Link>
                    </div>
                </div>
                <div className="hero-image">
                    {/* You can add your profile image here */}
                </div>
            </div>

            <div className="featured-skills">
                <h3>Technical Skills</h3>
                <div className="skills-list">
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">TypeScript</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">HTML/CSS</span>
                    <span className="skill-tag">React Native</span>
                </div>
            </div>

            <div className="featured-projects">
                <h3>Featured Projects</h3>
                <div className="projects-preview">
                    {/* You can add preview of top projects here */}
                </div>
                <Link to="/projects" className="view-all-link">View All Projects →</Link>
            </div>
        </div>
    );
};

export default Homepage;
