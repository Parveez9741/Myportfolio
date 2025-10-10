import React from "react";
import "./Hero.css";
import profilePic from "../assets/WhatsApp Image 2025-10-03 at 02.47.51_eaf34933.jpg";

// Import skill icons
import { FaReact, FaJsSquare, FaHtml5 } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="portfolio-container">
      <div className="hero-content">
        {/* Text on Left */}
        <div className="hero-text">
          <h1>Hi, I’m <span className="Highlight">Mohammed Parveez</span></h1>
          <p>Full Stack Developer | MERN Stack</p>
          <p className="hero-description">
            Passionate about building modern web applications with React, Node.js, and MongoDB. 
            I love turning complex problems into elegant, user-friendly solutions.
          </p>
        </div>

        {/* Image on Right */}
        <div className="image-wrapper">
          <div className="circular-image-container">
            <img src={profilePic} alt="Mohammed" className="profile-image" />
          </div>

          {/* Skill icons around the circle */}
          <div className="skill-icon skill-js top-left">
            <FaJsSquare size={30} color="#f0db4f" />
          </div>
          <div className="skill-icon skill-html top-right">
            <FaHtml5 size={30} color="#e34c26" />
          </div>
          <div className="skill-icon skill-react bottom-right">
            <FaReact size={30} color="#61dafb" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
