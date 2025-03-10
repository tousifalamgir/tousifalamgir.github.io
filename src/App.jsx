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
          <h3>Bladder Diary App</h3>
          <p>
          Developed a user-friendly mobile application (React Native) for ConnectUrCare to help users log, monitor, and track bladder health. Implemented core functionalities including daily logging, intuitive UI, data visualization, and secure local storage. Built with a modular design, allowing future developers to extend functionality easily. Created collaboratively as part of a Software Engineering Project at Mohawk College.
          </p>
          <p>Tech Stack: React Native, JavaScript, Expo, Git, UI/UX Design.</p>
        </div>
        <div className="project">
          <h3>Coding Challenge Hub</h3>
          <p>
          Built a web-based platform designed to improve programming skills through coding challenges and peer-reviewed feedback. Key features include challenge searching, solution sharing, and a classroom management system for instructors to review code submissions and facilitate peer feedback. Integrated Git repositories, enabling users to learn essential version control skills. The project supports Python and allows customizable grading scripts.
          </p>
          <p>
          Technologies Used: React, Python, Git, REST APIs, Relational Databases.
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
