import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/">Homepage</Link>
            <Link to="/about">About Me</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
        </nav>
    );
}

export default Navbar;
