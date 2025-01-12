import React from 'react';
import './styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-card">
          <h2>About Me</h2>
          <p>
            I'm Dawood Imran, a passionate professional with expertise in Software Engineering, 
            Data Science, and Data Analysis. With a strong background in these fields, I bring 
            a unique perspective to solving complex problems and deriving actionable insights from data.
          </p>
        </div>
        <div className="skills-card">
          <h2>Skills</h2>
          <div className="skills-list">
            <div className="skill-category">
              <h3>Languages</h3>
              <p>Python, SQL, C/C++, HTML/CSS, JavaScript, R</p>
            </div>
            <div className="skill-category">
              <h3>Analytical Skills</h3>
              <p>Data cleaning, processing, and visualization, extracting insights and identifying trends</p>
            </div>
            <div className="skill-category">
              <h3>AI</h3>
              <p>Machine Learning, Natural Language Processing</p>
            </div>
            <div className="skill-category">
              <h3>Developer Tools</h3>
              <p>Git, VsCode, Jupyter Notebook</p>
            </div>
            <div className="skill-category">
              <h3>Data Visualization Tools</h3>
              <p>Excel, Power BI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;