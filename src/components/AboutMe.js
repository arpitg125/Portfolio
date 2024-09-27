import React from 'react';
import './AboutMe.css';  

const AboutMe = () => {
  return (
    <section className="about-me-section">
      <div className="about-me-container">
        <h1>Hey! I Am <span className="highlighted-name">[Your Name]</span></h1>
        <p className="subtitle">
          Frontend Developer | Data Science Enthusiast | Pro Chess Player | Pro Gamer
        </p>
        <div className="about-me-buttons">
          <button className="hire-me-button">Hire Me</button>
        </div>
       </div>
    </section>
  );
};

export default AboutMe;