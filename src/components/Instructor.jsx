import React from "react";
import "../styles/Instructor.css";

const Instructor = () => {
  return (
    <div className="instructor-page">
      <div className="instructor-card">
       
        <div className="instructor-info">
          <h1>Pallab Jyoti Bora</h1>
        
          <p>
            Hello! I'm Pallab, a passionate Full-Stack developer
            This authentication web application was developed using the MERN stack to demonstrate my proficiency in full-stack development.
            It includes key features such as user registration, login, JWT-based authentication, and secure session management.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/PallabJB"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pallab-jyoti-bora-1a5626289/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
