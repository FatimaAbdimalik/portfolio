import React, { useEffect, useState } from "react";
import ProjectCards from "../ProjectCards/ProjectCards";
import "../Home/Home.css";
// import repos from "../../repos.json";

const Projects = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/FatimaAbdimalik/602cd67df9cb1dd38a9c071f18f6a2e4/raw/b4d52a7819788bfccb14448b67ab6023b13d090e/impor_repos.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
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
