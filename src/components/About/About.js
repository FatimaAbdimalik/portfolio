import React from "react";
import "../Home/Home.css";
import "./About.css";
import SideBar from "../SideBar/SideBar";

const About = () => {
  return (
    <div>
      <div className="position">
        <SideBar />
        <div className="intro">
          <div className="side-by-side">
            <div>
              <h1>About Me</h1>
              <p>I am a passionat and committed person.</p>
              <p>
                A proactive, resourceful probelm solver and thrives on
                challenges{" "}
              </p>
              <p>
                Enthusiastic, driven and keen to embark on a career as a
                software developer.
              </p>
            </div>
            <div>
              <div class="timeline">
                <div class="container left">
                  <div class="content">
                    <h2>Feb 2020 - Oct 2020</h2>
                    <p>Software Trainee at CYF.</p>
                  </div>
                </div>
                <div class="container right">
                  <div class="content">
                    <h2>Mar 2020 - July 2020</h2>
                    <p>Software Developer at Tech Returners</p>
                  </div>
                </div>
                <div class="container left">
                  <div class="content">
                    <h2>Aug 2018 - Present</h2>
                    <p>Private Tutor.</p>
                  </div>
                </div>
                <div class="container right">
                  <div class="content">
                    <h2>Sep 2015 - July 2020</h2>
                    <p>Teaching Assistant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
