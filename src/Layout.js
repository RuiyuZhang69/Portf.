import React from "react";
import { Link } from "react-router-dom";
import linkedinIcon from './Linkedin1.jpg'; // Import your image file
import rui from './Pic.png'; // Import your image file

import './App.css'; // Import your CSS file

export default function Layout() {
  return (
    <main>
      <header className="header">
    <div className="flex-container">
      <img className="flex-item" src={rui} alt="Rui" />
        <h1 className="flex-item1">Hi! I'm Rui 😁😁</h1>
         </div>
        <div className="container">
          <nav>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
              <Link to="/dsa">Practice Your DSA</Link>
            </ul>
          </nav>
        </div>
      </header>

      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <p className="Start">Hi! I'm Rui, a 2nd-year CS major at the Univ. Of Virginia. I'm originally from Salt Lake City, Utah. I'm looking for a summer '24 internship and am experienced in Java, Python and React. In my free time I enjoy working out, hiking and chilling! Connect 😛:
          </p>
            <a href="https://www.linkedin.com/in/rui-zhang-24422a1bb/" target="_blank" rel="noopener noreferrer">
              <button >
                <img className="social-button" src={linkedinIcon} alt="LinkedIn Icon" />
              </button>
            </a>
         
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="project">
            <h3> UVAShare </h3>
            <p>Node.js proj that allows you to add classes and notes to share course reviews and material between students.</p>
            <a href="https://github.com/RuiyuZhang69/NoteSharing" className="btn">View Project</a>
          </div>
          <div className="project">
            <h3>StorageScholarsChat</h3>
            <p>React proj using Websockets and Maps API to allow people to chat about renting storage spaces</p>
            <a href="https://github.com/RuiZhang-kwf8/StorageScholars.git" className="btn">View Project</a>
          </div>
          <div className="project">
            <h3>RideShare</h3>
            <p>React Native proj using Expo Go and Firebase to allow people to find ubers to places</p>
            <a href="https://github.com/UVA-Rideshare" className="btn">View Project</a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact</h2>
          <p>Email: ruizhangslc2017@gmail.com</p>
          <div className="social-links">
            <a href="https://leetcode.com/Rui179/" target="_blank" rel="noopener noreferrer">
              <button className="social-button">LeetCode</button>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Rui. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}