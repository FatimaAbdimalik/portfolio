import React from "react";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer.js";

const Contact = () => {
  return (
    <div>
      <div className="position">
        <div>
          <SideBar />
        </div>
        <div className="intro">
          <div>
            <h1>Contact Me</h1>
          </div>
          <div>
            <input
              placeholder="Name"
              type="text"
              name="name"
              className="input_field"
            />
            <input placeholder="Email" type="text" name="email" />
            <br />
            <textarea name="message" rows="4" cols="50" />
          </div>
          <div>
            <button>SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
