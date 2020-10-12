import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Skills from "./components/Skills/Skills.js";
import Projects from "./components/Projects/Projects.js";
import Contact from "./components/Contact/Contact.js";
import "./App.css";
import "./index.css";
function App() {
  return (
    <div className="App">
      {/* <CSSTransition in={loading} timeout={400} classNames="fade" unmountOnExit>
  <Loader />
 </CSSTransition> */}
      <Router>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
      <div>
        <audio autoPlay>
          <source src="moonlight-movement1.mp3" type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
}

export default App;
