import React, { useState, useEffect } from "react";
import "./About.css"; // Regular CSS
import chess from '../assets/chess.png';
import cursorIcon from '../assets/cursorIcon.png';
import aboutImages from "../data/pokedata.json"; // Import JSON data
import analy from '../assets/uiIcon.png';

export const About = () => {
  const [currentAimg, setCurrentAimg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAimg((prevImage) => (prevImage + 1) % aboutImages.length); // Loop through the images
    }, 6000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="aboutContainer" id="about">
      <div className="aboutColumn aboutLeft">
        <h2 className="aboutTitle">About</h2>
        <img
          src={require(`../assets/${aboutImages[currentAimg].imageSrc}`)}
          alt={aboutImages[currentAimg].title}
          className="aboutImage"
        />
      </div>
      <div className="aboutColumn aboutRight">
        <ul className="aboutItems">
          <li className="aboutItem">
            <img src={cursorIcon} alt="Cursor icon" />
            <div className="aboutItemText">
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites.
              </p>
            </div>
          </li>
          <li className="aboutItem">
            <img src={analy} alt="Server icon" />
            <div className="aboutItemText">
              <h3>Data Analyst</h3>
              <p>
              Skilled in analyzing and interpreting complex datasets to drive actionable insights and informed decision-making. Proficient in data visualization and statistical analysis tools.
              </p>
            </div>
          </li>
          <li className="aboutItem">
            <img src={chess} alt="UI icon" width={74} />
            <div className="aboutItemText">
              <h3>Chess Player/Coach</h3>
              <p>
              Experienced chess player with a deep understanding of strategy and tactics. Proven track record in competitive play and teaching, emphasizing critical thinking and game strategy..
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
