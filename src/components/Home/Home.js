import React from "react";
import SideBar from "../SideBar/SideBar.js";
import Footer from "../Footer/Footer.js";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="position">
        <SideBar />
      </div>
      <div className="intro">
        <h1>Hi</h1>
        <h1>My name is Fatima</h1>
      </div>
    </div>
  );
};

export default Home;
