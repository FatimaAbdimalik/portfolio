import React from "react";
import { Link } from "react-router-dom";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import HoverToggle from "../HoverToggle/HoverToggle";
import { BsCodeSlash } from "react-icons/bs";
import { GoProject } from "react-icons/go";
import { TiContacts } from "react-icons/ti";

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
      </ul>
    </div>
  );
};

export default SideBar;
