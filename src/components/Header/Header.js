import React from 'react';
import './Header.css'; // Importing the CSS file for styling
import profileImg from '../../assets/images/me.jpg'; // Add a path to the profile image (if available)

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={profileImg} alt="Profile" className="profile-img" />
        <h1 className="header-name">FRANKLIN SAMUVEL</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
