import React from "react";
import "../Home/Home.css";

const Skills = () => {
  return (
    <div className="position">
      <div style={{ display: "flex" }}>
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
        <div className="intro">
          <p>Pair Programming</p>
          <p>Version Control Git</p>
          <p>HTTP and Rest API</p>
          <p>axios</p>
          <p>Sass</p>
          <p>Agile</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
