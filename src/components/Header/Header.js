import React from "react";
import "./Header.css";
import profileImg from "../../assets/images/me.jpg";
import { Link } from "react-scroll";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={profileImg} alt="Profile" className="profile-img" />
        <h1 className="header-name">FRANKLIN SAMUVEL</h1>
      </div>
      <nav className="header-nav">
        <ul>
          {/* <Link to="home" smooth={true} duration={500} className="nav-link">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="nav-link">
            Home
          </Link> */}
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
