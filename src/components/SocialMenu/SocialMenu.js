import React from "react";
import "./SocialMenu.css";

// Importing icons from any icon library or custom icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faYoutube,
  faGithub,
  faStackOverflow,
  faMedium,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons"; // Solid icon for book

function SocialMenu() {
  return (
    <div className="social-menu">
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/franklin-s-04994114a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        {/* <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li> */}
        {/* <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a></li> */}
        <li>
          <a
            href="https://github.com/frankDev96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com/users/12451961/franklin-samuvel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faStackOverflow} />
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@franklinsamuvel955"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faMediumM} />
          </a>
        </li>
        {/* <li><a href="https://yourblog.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faBook} /></a></li> */}
      </ul>
    </div>
  );
}

export default SocialMenu;
