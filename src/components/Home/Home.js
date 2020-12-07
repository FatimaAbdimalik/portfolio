import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="main-title">Hi, I am Fatima</h1>
      <h1 className="second-title"> Your Next Junior Software Engineer</h1>
      <p className="tech">HTML, CSS, JavaScript, React, Node.js </p>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="button"
      >
        <button style={{ marginRight: "1rem" }} className="tags" variant="info">
          {" "}
          <Link to="/about">About Me</Link>
        </button>
        <button className="tags">
          {" "}
          <Link to="/projects">Projects</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
