import React from "react";
import "./SocialMenu.css";
import { SocialLink } from "../../types";

// Importing icons from any icon library or custom icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faYoutube,
  faGithub,
  faStackOverflow,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons"; // Solid icon for book

interface SocialMenuProps { }

const SocialMenu: React.FC<SocialMenuProps> = () => {
  const socialLinks: SocialLink[] = [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/franklin-s-04994114a/",
      icon: "linkedin",
    },
    {
      platform: "GitHub",
      url: "https://github.com/frankDev96",
      icon: "github",
    },
    {
      platform: "Stack Overflow",
      url: "https://stackoverflow.com/users/12451961/franklin-samuvel",
      icon: "stackoverflow",
    },
    {
      platform: "Medium",
      url: "https://medium.com/@franklinsamuvel955",
      icon: "medium",
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "linkedin":
        return faLinkedin;
      case "github":
        return faGithub;
      case "stackoverflow":
        return faStackOverflow;
      case "medium":
        return faMediumM;
      case "twitter":
        return faTwitter;
      case "youtube":
        return faYoutube;
      case "blog":
        return faBook;
      default:
        return faLinkedin;
    }
  };

  return (
    <div className="social-menu">
      <ul>
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.platform}
            >
              <FontAwesomeIcon icon={getIcon(link.icon)} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMenu;
