import React from "react";
import "../Home/Home.css";
import SideBar from "../SideBar/SideBar";

const Skills = () => {
  return (
    <div className="position">
      <SideBar />
      <div>
        <div className="intro">
          <h1>Skills</h1>
          <p>HTML</p>
          <p>CSS</p>
          <p>Bootstrap</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>Node.js</p>
          <p>MySQL</p>
          <p>PostgreSQL</p>
          <p>TDD</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
