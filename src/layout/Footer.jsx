import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import tw from "../assets/tw.png";


import git from "../assets/git.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>MERN Authentication</h2>
        
        </div>
        <div className="footer-social">
          <h3>Follow Me</h3>
          <div className="social-icons">
           
            <Link
              to="https://x.com/pallab_jb?t=GiE7BU23aDXYtBppn9UxAQ&s=08"
              target="_blank"
              className="social-link"
            >
              <img src={tw} alt="Twitter" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/pallab-jyoti-bora-1a5626289/"
              target="_blank"
              className="social-link"
            >
              <img src={linkedin} alt="LinkedIn" />
            </Link>
            <Link
              to="https://github.com/PallabJB"
              target="_blank"
              className="social-link"
            >
              <img src={git} alt="GitHub" />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 MERN Authentication. All Rights Reserved.</p>
        <p>Designed by PallabJB</p>
      </div>
    </footer>
  );
};

export default Footer;
