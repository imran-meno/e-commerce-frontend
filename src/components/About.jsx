import React from 'react';
import './About.css';
import profileImage from '../assets/dev_image.png'; 

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About iShop</h1>

      {/* Introduction with Image */}
      <section className="about-intro">
        <img src={profileImage} alt="Imran" className="profile-image" />
        <div className="intro-text">
          <h2>Who I Am</h2>
          <p>
            Hi, I am <strong>Imran</strong>, a passionate MERN Stack developer who loves building clean,
            modern, and user-friendly applications. iShop is a project I created to practice full-stack
            e-commerce development and improve my skills.
          </p>
        </div>
      </section>

      {/* What is iShop */}
      <section className="about-section">
        <h2>What is iShop?</h2>
        <p>
          iShop is a modern online store built using the MERN Stack. It includes user signup/login,
          product listing, cart management, profile management, and order flow. I built this project
          to strengthen my concepts of React, Node.js, Express, MongoDB, and REST APIs.
        </p>
      </section>

      {/* Purpose */}
      <section className="about-section">
        <h2>Purpose of Building This Project</h2>
        <ul>
          <li>Practice real-world development</li>
          <li>Understand e-commerce flow</li>
          <li>Improve backend + frontend integration</li>
          <li>Learn deployment</li>
        </ul>
      </section>

      {/* Technologies */}
      <section className="about-section">
        <h2>Technologies Used</h2>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Axios</li>
          <li>Mongoose</li>
          <li>React Router</li>
          <li>CSS</li>
        </ul>
      </section>

      {/* Developer Journey */}
      <section className="about-section">
        <h2>My Developer Journey</h2>
        <p>
          I enjoy learning new technologies and solving problems. Currently, I am improving my backend
          skills and building real-life projects to strengthen my understanding. My journey started
          with basic web development, and now I am exploring full-stack applications.
        </p>
      </section>

      {/* Future Goals */}
      <section className="about-section">
        <h2>Future Goals</h2>
        <ul>
          <li>Add payment gateway</li>
          <li>Add admin panel</li>
          <li>Order tracking system</li>
          <li>Product categories</li>
          <li>Deploy on cloud</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="about-section">
        <h2>Contact Me</h2>
        <p>Email: menoimrankhan1@gmail.com</p>
        <p>GitHub: <a href="https://github.com/imran" target="_blank" rel="noopener noreferrer">github.com/imran</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/imran" target="_blank" rel="noopener noreferrer">linkedin.com/in/imran</a></p>
      </section>
    </div>
  );
}

export default About;
