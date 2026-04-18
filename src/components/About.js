import React from 'react';
import { Terminal } from 'pixelarticons/react/Terminal.js';
import { ChartBarBig } from 'pixelarticons/react/ChartBarBig.js';
import { Cpu } from 'pixelarticons/react/Cpu.js';
import { ToolCase } from 'pixelarticons/react/ToolCase.js';
import { Database } from 'pixelarticons/react/Database.js';
import './styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        {/* About Me Card */}
        <div className="about-card">
          <h2>About Me</h2>
          <p>
            I'm Dawood Imran, a passionate professional with expertise in Software Engineering, 
            Data Science, and Data Analysis. With a strong background in these fields, I bring 
            a unique perspective to solving complex problems and deriving actionable insights from data.
          </p>
        </div>

        {/* Skills Card */}
        <div className="skills-card">
          <h2>Skills</h2>

          {/* Languages */}
          <div className="skill-category">
            <h3>
              <Terminal className="pixel-icon" /> Languages
            </h3>
            <p>Python, SQL, C/C++, HTML/CSS, JavaScript, R</p>
          </div>

          {/* Analytical Skills */}
          <div className="skill-category">
            <h3>
              <ChartBarBig className="pixel-icon" /> Analytical Skills
            </h3>
            <p>Data cleaning, processing, and visualization, extracting insights and identifying trends</p>
          </div>

          {/* AI */}
          <div className="skill-category">
            <h3>
              <Cpu className="pixel-icon" /> AI
            </h3>
            <p>Machine Learning, Natural Language Processing</p>
          </div>

          {/* Developer Tools */}
          <div className="skill-category">
            <h3>
              <ToolCase className="pixel-icon" /> Developer Tools
            </h3>
            <p>Git, VsCode, Jupyter Notebook</p>
          </div>

          {/* Data Visualization Tools */}
          <div className="skill-category">
            <h3>
              <Database className="pixel-icon" /> Data Visualization Tools
            </h3>
            <p>Excel, Power BI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
