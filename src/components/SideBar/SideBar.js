import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
            <HoverToggle icons={<BsFillHouseDoorFill />} text="HOME" />
          </Link>
        </li>
        <li className="list_style">
          <Link to="/about">
            {" "}
            <HoverToggle icons={<BsFillPersonFill />} text="ABOUT" />
          </Link>
        </li>
        <li className="list_style">
          <Link to="/skills">
            <HoverToggle icons={<BsCodeSlash />} text="SKILLS" />
          </Link>
        </li>
        <li className="list_style">
          <Link to="/projects">
            <HoverToggle icons={<GoProject />} text="PROJECTS" />
          </Link>
        </li>
        <li className="list_style">
          <Link to="/contact">
            <HoverToggle icons={<TiContacts />} text="CONTACT" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
