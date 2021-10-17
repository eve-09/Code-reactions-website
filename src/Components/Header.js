import React from "react";
import "../Css/Header.css";
import "../web-logo.png";

const Header = () => {
  return (
    <>
      <div class="nav">
        <input type="checkbox" id="nav-check"></input>
        <div class="nav-header">
          <a href="home" onclick="window.location.reload(true);">
            <img src="../web-logo.png" alt="logo" className="logo" />
          </a>
          {/* <div class="nav-title">Code Reactions</div> */}
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <a href="h" onclick="window.location.reload(true);">
            Home
          </a>
          <a href="#clients-section">Clients</a>
          <a href="#service-section">Services</a>
          <a href="#contact-us-form">Contact Us</a>
        </div>
      </div>
    </>
  );
};

export default Header;
