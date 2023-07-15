import React, { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a>
          Copyright &copy; 2023
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" >
          Prakhar Srivastava
        </a>{" "}
        |
        <a href="https://www.linkedin.com/in/prakhar-srivastava-a354031bb">
          <FontAwesomeIcon icon = {faLinkedin} />
        </a>
        <a href="https://github.com/Prakhar-2107">
          <FontAwesomeIcon icon = {faGithub} />
        </a>
        <a href="https://www.instagram.com/prakhar_0721/">
          <FontAwesomeIcon icon = {faInstagram} />
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
