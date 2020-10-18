import React from "react";
import { Link } from "react-router-dom";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import HoverToggle from "../HoverToggle/HoverToggle";
import { BsCodeSlash } from "react-icons/bs";
import { GoProject } from "react-icons/go";
import { TiContacts } from "react-icons/ti";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="background_colour">
      <ul className="side-bar">
        <li className="list_style">
          <Link to="/">
            <HoverToggle
              icons={<BsFillHouseDoorFill size="1.5rem" />}
              text="HOME"
            />
          </Link>
        </li>
        <li className="list_style">
          <Link to="/about">
            {" "}
            <HoverToggle
              icons={<BsFillPersonFill size="1.5rem" />}
              text="ABOUT"
            />
          </Link>
        </li>
        <li className="list_style">
          <Link to="/skills">
            <HoverToggle icons={<BsCodeSlash size="1.5rem" />} text="SKILLS" />
          </Link>
        </li>
        <li className="list_style">
          <Link to="/projects">
            <HoverToggle icons={<GoProject size="1.5rem" />} text="PROJECTS" />
          </Link>
        </li>
        <li className="list_style">
          <Link to="/contact">
            <HoverToggle icons={<TiContacts size="1.5rem" />} text="CONTACT" />
          </Link>
        </li>
        <li className="list_style">
          <a href="https://www.linkedin.com/in/fatima-abdimalik/">
            <HoverToggle icons={<FaLinkedin size="1.5rem" />} text="LINKEDIN" />
          </a>
        </li>
        <li className="list_style">
          <a href="https://github.com/FatimaAbdimalik">
            <HoverToggle icons={<FaGithub size="1.5rem" />} text="GITHUB" />
          </a>
        </li>
        <li className="list_style">
          <a href="mailto:f.abdimalik@gmail.com">
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

export default SideBar;
