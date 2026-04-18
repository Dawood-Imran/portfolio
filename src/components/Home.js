import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './styles/Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>— Hi, I am —</h1>
        <h2 className="big-heading">Dawood Imran.</h2>
        <h3 className="big-heading typewriter">
          <Typewriter
            words={['Software Engineer', 'Data Scientist', 'Data Analyst']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h3>
        <p>
          Transforming data into innovation through clean code and machine learning. Building solutions that make an impact in the real world.
        </p>
        <div className="social-section">
          <div className="social-label">
            <span className="social-line" />
            <span className="social-label-text">&gt; connect_with_me</span>
            <span className="social-line" />
          </div>
          <div className="social-icons">
            <a href="https://github.com/Dawood-Imran" target="_blank" rel="noopener noreferrer">
              <FaGithub size={28} color="white" />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-dawood-imran/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={28} color="#0077B5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
