import React from "react";
import ProjectCards from "../ProjectCards/ProjectCards";
import "../Home/Home.css";
import FeedbackTracker from "./../../images/FeedbackTracker.png";
import CYFHotel from "./../../images/CYFHotel.png";
import Grokit from "./../../images/Grokit.png";
import Portfolio from "./../../images/Portfolio.png";
import QuoteGenerator from "./../../images/QuoteGenerator.png";
import Todo from "./../../images/Todo.png";
import TVShow from "./../../images/TVShow.png";

const Projects = () => {
  const data = [
    {
      name: "Feedback-Tracker",
      intro:
        "A tool that enhances the learning experience for students by supporting mentors to give an effective feedback",
      image: FeedbackTracker,
      techStack:
        "ReactJs, React Bootstrap, CSS, express, PostgreSQL, Nodejs, moment.js, react-router, axios",
      live: "https://feedback-compass.herokuapp.com/",
      code: "https://github.com/FatimaAbdimalik/Feedback-Compass",
    },
    {
      name: "Quote-Generator",
      intro:
        "An application that generates a random quote and displays the quote and the quote author every time a button in clicked",
      image: QuoteGenerator,
      techStack: "ReactJs,CSS",
      live: "https://quote-generato-app.netlify.app/",
      code: "https://github.com/FatimaAbdimalik/Quote-Generator",
    },
    {
      name: "CYF Hotel",
      intro:
        "A CYF Hotel is an application the assist users to book a hotel room and search for their booking details",
      image: CYFHotel,
      techStack: "ReactJs, moment, React Bootstrap",
      live: "https://cyf-hotel-project.netlify.app/",
      code: "https://github.com/FatimaAbdimalik/cyf-hotel-react",
    },
    {
      name: "Grokit",
      intro:
        "An application that aims to consolidate learning and improve skills by combatting the concept of forgeeting curver",
      image: Grokit,
      techStack:
        "ReactJs, moment, React Bootstrap, react-router, AWS Serverless Lambda, AWS Cognito, MySQL,axios",
      live: "https://grokitteam.github.io/grokit-frontend/",
      code: "https://github.com/GrokItTeam/grokit-frontend",
    },
    {
      name: "TV-show",
      intro:
        "An applications that allow users to find a show, an episode of a show and provides a summary for each show",
      image: TVShow,
      techStack: "HTML, CSS, JavaScript",
      live: "https://fatimaabdimalik-tv-show.netlify.app/",
      code: "https://github.com/FatimaAbdimalik/tv-show-dom-project",
    },
    {
      name: "To-Do",
      intro:
        "A simple application to assist users to create and organise tasks",
      image: Todo,
      techStack:
        "ReactJs, axios, MySQL, AWS Serverless Lambda,React Bootstrap, moment",
      live: "https://tasks-todo-app.netlify.app/",
      code: "https://github.com/FatimaAbdimalik/todo-react-app",
    },
    {
      name: "Portfolio",
      intro:
        "An insight to myself and a collection of some projects compeleted so far",
      image: Portfolio,
      techStack: "ReactJs, React Bootstrap, react-router",
      live: "https://fatimaa-portfolio.netlify.app",
      code: "https://github.com/FatimaAbdimalik/portfolio",
    },
  ];
  return (
    <div>
      <div className="intro">
        <h1>Projects</h1>
      </div>
      <ProjectCards data={data} />
    </div>
  );
};
export default Projects;
