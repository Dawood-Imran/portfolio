import React from 'react';
import './styles/About.css';

const skillGroups = [
  {
    label: 'languages',
    items: ['python', 'sql', 'c/c++', 'javascript', 'html/css', 'r'],
  },
  {
    label: 'ai_&_ml',
    items: ['machine_learning', 'nlp', 'scikit-learn', 'pandas', 'numpy'],
  },
  {
    label: 'dev_tools',
    items: ['git', 'vscode', 'jupyter_notebook', 'flask', 'streamlit'],
  },
  {
    label: 'data_viz',
    items: ['power_bi', 'matplotlib', 'seaborn', 'excel'],
  },
];

const About = () => {
  return (
    <div className="about">
      <div className="about-container">

        {/* About Me Card */}
        <div className="about-card">
          <div className="terminal-topbar">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot tgreen" />
            <span className="terminal-filename">about.md</span>
          </div>
          <div className="about-card-body">
            <div className="terminal-cmd">
              <span className="t-prompt">~$</span>
              <span className="t-command"> cat about.md</span>
            </div>
            <p>
              I'm Dawood Imran, a passionate professional with expertise in Software Engineering,
              Data Science, and Data Analysis. With a strong background in these fields, I bring
              a unique perspective to solving complex problems and deriving actionable insights from data.
            </p>
            <div className="t-cursor-line">
              <span className="t-prompt">~$</span>
              <span className="t-blink">_</span>
            </div>
          </div>
        </div>

        {/* Skills Terminal */}
        <div className="skills-card">
          <div className="terminal-topbar">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot tgreen" />
            <span className="terminal-filename">skills.sh</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-cmd">
              <span className="t-prompt">~$</span>
              <span className="t-command"> ./show_skills.sh</span>
            </div>
            {skillGroups.map((group) => (
              <div key={group.label} className="t-group">
                <div className="t-group-header">
                  <span className="t-prompt">&gt;</span>
                  <span className="t-group-name"> {group.label}</span>
                </div>
                <div className="t-skill-row">
                  {group.items.map((skill) => (
                    <span key={skill} className="t-skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
            <div className="t-cursor-line">
              <span className="t-prompt">~$</span>
              <span className="t-blink">_</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
