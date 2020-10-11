import React from "react";
import "../Home/Home.css";
import SideBar from "../SideBar/SideBar";

const About = () => {
  return (
    <div>
      <div className="position">
        <SideBar />

        <div className="intro">
          <h1>About Me</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
