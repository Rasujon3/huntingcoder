import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>About Me</h1>
      <h2>Introduction</h2>
      <p>
        I am Ruhul Amin Sujon. My goal has always been to be a Certified MERN
        Stack developer. Last 4-5 months, I spent most of my time learning React
        JS, and I am aiming to learning some new things in the upcoming days. I
        also hope to improve my communication and public speaking skills. That
        will be helps me to join the appropriate job sector as a full time MERN
        Stack developer. I really want to be a proactive and valuable team
        member at my company, wherever I work. I want to lead a team, so I will
        improve my leadership skills and gain more experience.
      </p>
      <h2>Services Offered</h2>
      <p>
        <ul>
          <li>Web Development</li>
          <li>Apps Development</li>
          <li>Machine Learning</li>
        </ul>
      </p>
      <p>We offer the following services</p>
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
        <li>Service 4</li>
        <li>Service 5</li>
        <li>Service 6</li>
        <li>Service 7</li>
        <li>Service 8</li>
      </ul>
      <h2>Contact us</h2>
      <p>
        <ul>Email: ruhul.amin.sujon.1997@gmail.com</ul>
        <ul>Phone: +8801764401650</ul>
        <ul>Portfolio: https://ruhul-amin-sujon-portfolio.netlify.app/</ul>
      </p>
    </div>
  );
};

export default About;
