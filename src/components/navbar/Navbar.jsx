'use client'; // Add this line at the top to make it a Client Component

import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const container = document.querySelector(".container");

    const handleClick = () => {
      if (container) {
        container.classList.toggle("active");
        setIsActive(!isActive); // Update the React state
      }
    };

    if (hamburgerMenu) {
      hamburgerMenu.addEventListener("click", handleClick);
    }

    return () => {
      if (hamburgerMenu) {
        hamburgerMenu.removeEventListener("click", handleClick);
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    
    <div className="container"> 
      <div className="navbar">
        <div className="menu">
          <h3 className="logo">
            Brand<span>Name</span>
          </h3>
          <div className="hamburger-menu">
            <div className="bar"></div>
          </div>
        </div>
      </div>
      <div className="main-container">
        <div className="main">
          <header>
            <div className="overlay">
              <div className="inner">
              </div>
            </div>
          </header>
        </div>
        <div className="shadow one"></div>
        <div className="shadow two"></div>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="#" style={{ "--i": "0.05s" }}>
              Home
            </a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.1s" }}>
              Services
            </a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.15s" }}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.2s" }}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.25s" }}>
              About
            </a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.3s" }}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
