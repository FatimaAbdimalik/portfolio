import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1
        style={{
          marginTop: "15rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Hi, I am Fatima, a Full Stack Developer{" "}
      </h1>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="button"
      >
        <button style={{ marginRight: "1rem" }} className="tags">
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
