import React, { useContext } from "react";
import "../styles/Hero.css";
import heroImage from "../assets/img4.png";
import { Context } from "../main";

const Hero = () => {
  const { user } = useContext(Context);
  return (
    <>
      <div className="hero-section">
        <img src={heroImage} alt="hero-image" />
        <h4>Hello, {user ? user.name : "Developer"}</h4>
        <h1>Welcome to My Secure Auth App</h1>
        <p>
          A modern authentication system built with the MERN stack. Easy to register, log in, and manage sessions with full JWT-based authentication.
        </p>
      </div>
    </>
  );
};

export default Hero;
