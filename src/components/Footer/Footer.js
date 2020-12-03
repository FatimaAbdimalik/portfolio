import React from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import HoverToggle from "../HoverToggle/HoverToggle";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="side-bar-footer">
        <li className="list_style">
          <a
            href="https://www.linkedin.com/in/fatima-abdimalik/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverToggle icons={<FaLinkedin size="1.5rem" />} text="LINKEDIN" />
          </a>
        </li>
        <li className="list_style">
          <a
            href="https://github.com/FatimaAbdimalik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverToggle icons={<FaGithub size="1.5rem" />} text="GITHUB" />
          </a>
        </li>
        <li className="list_style">
          <a
            href="mailto:f.abdimalik@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverToggle
              icons={<BsFillEnvelopeFill size="1.5rem" />}
              text="EMAIL"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
