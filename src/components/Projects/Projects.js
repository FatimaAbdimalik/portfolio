import React, { useEffect, useState } from "react";
import "../Home/Home.css";
// import repos from "../../repos.json";

const Projects = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/FatimaAbdimalik/56f9e2950bcb073f09134b576d21f2e5/raw/1333f66f87a6ceded1396d34e5b22bb4810dea53/repos.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div>
      <div className="position">
        <div className="intro">
          <h1>Projects</h1>
        </div>
      </div>
    </div>
  );
};
export default Projects;
