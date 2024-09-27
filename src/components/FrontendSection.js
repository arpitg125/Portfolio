import React from 'react';
import './FrontendSection.css';

const FrontendSection = () => {
  return (
    <section id="frontend" className="frontend-section">
      <h2>Frontend Developer</h2>
      <div className="experience-card">
        <h3>CosGrid Networks Chennai</h3>
        <p>Frontend Developer Intern Nov 2022 - Feb 2023</p>
        <ul>
          <li>Developed modules using Angular and Strapi.</li>
          <li>Contributed to CosGrid Mobile Application using Ionic.</li>
          <li>Created seamless web and mobile user experiences.</li>
        </ul>
      </div>

      <div className="experience-card">
        <h3>SRV Media Pune</h3>
        <p>Frontend Developer Intern April 2022 - June 2022</p>
        <ul>
          <li>Created a dynamic form builder using Angular.</li>
          <li>Developed form re-rendering module from JSON files.</li>
          <li>Designed chatbot UI and implemented image rendering.</li>
        </ul>
      </div>

      <div className="experience-card">
        <h3>Vectorised AI Labs Bangalore</h3>
        <p>Intern Sep 2021 - Dec 2021</p>
        <ul>
          <li>Worked on React app development including API integration.</li>
          <li>Implemented GraphQL client for querying and mutation.</li>
          <li>Developed chart modules using Chart.js.</li>
        </ul>
      </div>
    </section>
  );
};

export default FrontendSection;
