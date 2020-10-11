import React from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <a href="https://www.linkedin.com/in/fatima-abdimalik/">
        <FaLinkedin size="1.5rem" color="#2867B2" />
      </a>

      <a href="https://github.com/FatimaAbdimalik">
        <FaGithub size="1.5rem" color="black" />
      </a>
      <a href="mailto:f.abdimalik@gmail.com">
        <BsFillEnvelopeFill size="1.5rem" />
      </a>
    </div>
  );
};

export default Footer;
