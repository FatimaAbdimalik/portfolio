import React from "react";
import "./HoverToggle.css";
const HoverToggle = ({ icons, text }) => {
  return (
    <div>
      <div className="wrapper">
        <div className="icon">{icons}</div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default HoverToggle;
