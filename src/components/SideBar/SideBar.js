import React from "react";
import "./SideBar.css";
const SideBar = () => {
  return (
    <div>
      <ul className="side_bar">
        <li className="list_style">Home</li>
        <li className="list_style">About Me</li>
        <li className="list_style">Skills</li>
        <li className="list_style">Projects</li>
        <li className="list_style">Contact Me</li>
      </ul>
    </div>
  );
};

export default SideBar;
