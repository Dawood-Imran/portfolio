import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <ol>
            <li>
              <NavLink to="/about" activeClassName="active-link" onClick={toggleMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="active-link" onClick={toggleMenu}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active-link" onClick={toggleMenu}>
                Contact
              </NavLink>
            </li>
          </ol>
          <button onClick={downloadResume} className="resume-button">
            Resume
          </button>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;