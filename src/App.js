import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Skills from "./components/Skills/Skills.js";
import Projects from "./components/Projects/Projects.js";
import Contact from "./components/Contact/Contact.js";
import "./App.css";
import "./index.css";
import SideBar from "./components/SideBar/SideBar.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  const baseUrl = "http://localhost:3200";
  return (
    <div className="App">
      <div className="position">
        <Router>
          <div>
            <SideBar />
          </div>
          <Route
            render={({ location }) => {
              return (
                <TransitionGroup component={null}>
                  <CSSTransition
                    timeout={500}
                    classNames="page"
                    key={location.key}
                  >
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
                          <Contact baseUrl={baseUrl} />
                        </Route>
                      </Switch>
                    </div>
                  </CSSTransition>
                </TransitionGroup>
              );
            }}
          />
        </Router>

        {/* <div>
          <audio autoPlay>
            <source src="moonlight-movement1.mp3" type="audio/mp3" />
          </audio>
        </div> */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
