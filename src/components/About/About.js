import React from "react";
import "../Home/Home.css";
import SideBar from "../SideBar/SideBar";

const About = () => {
  return (
    <div>
      <div className="position">
        <SideBar />
        {/* <div> */}
        <div className="intro">
          <h1>About Me</h1>
          <p>I am a passionat and committed person.</p>
          <p>
            A proactive, resourceful probelm solver and thrives on challenges{" "}
          </p>
          <p>
            Enthusiastic, driven and keen to embark on a career as a software
            developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
