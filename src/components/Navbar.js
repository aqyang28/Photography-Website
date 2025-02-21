import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
            <Link to="/">ALEX YANG</Link>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Portfolio</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-icons">
        <a href="https://www.instagram.com/ayangsrealm/?igsh=ZnJlc3l4am56ODEx" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </nav>
  );
}

export default Navbar;
