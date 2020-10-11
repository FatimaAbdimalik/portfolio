import React from "react";
// import logo from "./logo.svg";
import Home from "./components/Home/Home.js";
import SideBar from "./components/SideBar/SideBar.js";
import Footer from "./components/Footer/Footer.js";
// import "./App.css";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}

      <Home />
      <SideBar />
      <Footer />
    </div>
  );
}

export default App;
