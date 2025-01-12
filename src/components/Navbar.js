import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = require('../resume.pdf'); // Adjust the path as needed
    link.download = 'Dawood_Imran_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo" activeClassName="active-logo">
          MD
        </NavLink>
        <div className="nav-links">
          <ol>
            <li>
              <NavLink to="/about" activeClassName="active-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="active-link">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active-link">
                Contact
              </NavLink>
            </li>
          </ol>
          <button onClick={downloadResume} className="resume-button">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;