import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';

function App() {
  return (
    <div className="portfolio-container">
      <header className="header">
        <h1>Tousif Alamgir</h1>
        <p>Mobile Developer | Android & React Native Specialist</p>
      </header>

      <section id="about" className="section">
        <h2>Summarizing Statement</h2>
        <p>
          I am a passionate Mobile Developer with extensive experience in Android development and React Native. I create efficient and user-friendly mobile applications.
        </p>
      </section>

      <section id="education" className="section">
        <h2>Education</h2>
        <p>Advanced Diploma in Software Development, Mohawk College</p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <ul>
          <li>Java</li>
          <li>Kotlin</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>Relational Databases</li>
          <li>AWS</li>
        </ul>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project One: Mobile Fitness Tracker</h3>
          <p>
            A cross-platform mobile application designed to track and analyze user fitness activities.
          </p>
        </div>
        <div className="project">
          <h3>Project Two: E-commerce Mobile App</h3>
          <p>
            An intuitive mobile application offering a seamless shopping experience with secure payment integration.
          </p>
        </div>
      </section>

      <section id="resume" className="section">
        <h2>Resume</h2>
        <p>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </p>
      </section>

      <section id="contact" className="section">
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:tousifalamgir@gmail.com">tousifalamgir</a></p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/tousif-alamgir/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/tousifalamgir
          </a>
        </p>
        <p>
          Github: <a href="https://github.com/tousifalamgir" target="_blank" rel="noopener noreferrer">
            github.com/tousif
          </a>
        </p>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Tousif Alamgir. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
