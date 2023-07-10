import React, { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'
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
        <a target="_blank" href="https://www.gauravghai.dev/">
          Prakhar Srivastava
        </a>{" "}
        |
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon = {faFacebook} />
        </a>
        <a href="https://www.github.com">
          <FontAwesomeIcon icon = {faGithub} />
        </a>
        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon = {faInstagram} />
          <FontAwesomeIcon icon = {faInstagram} />
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
