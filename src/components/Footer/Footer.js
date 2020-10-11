import React from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <FaLinkedin size="1.5rem" />
      <a href="https://github.com/FatimaAbdimalik">
        <FaGithub size="1.5rem" color="black" />
      </a>
      <BsFillEnvelopeFill size="1.5rem" />
    </div>
  );
};

export default Footer;
