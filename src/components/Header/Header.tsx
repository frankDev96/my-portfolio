import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// @ts-ignore
import profileImg from "../../assets/images/meone.jpg";

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={profileImg} alt="Profile" className="profile-img" />
        <h1 className="header-name">FRANKLIN SAMUVEL</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
