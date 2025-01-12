import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, Mail, Instagram, Facebook } from 'lucide-react';
import './styles/Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <h2 className="big-heading">Muhammad Dawood Imran.</h2>
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
        <div className="button-container">
          <Link to="/projects" className="styled-button">
            View My Work
          </Link>
        </div>
      </div>
      <div className="connect-links" >
        <a href="https://github.com/Dawood-Imran" target="_blank" rel="noopener noreferrer">
          <Github size={24} color='white' />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-dawood-imran/" target="_blank" rel="noopener noreferrer">
          <Linkedin size={24} color='#0077B5' />
        </a>
        
        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Instagram size={24} color="#E1306C"/>
        </a>
        <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Facebook size={24} color="#1877F2" />
        </a>
      </div>
    </section>
  );
};

export default Home;