import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Navbar Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${isMenuOpen ? 'rotate1' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'hide' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'rotate2' : ''}`}></div>
        </div>

        {/* Navbar Menu */}
        <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <li className="navbar-item" id="home">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item" id="product-features" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <a href="#resources" className="navbar-link">
              Product & Features
            </a>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul className="dropdown-menu" id="dropdown-menu">
                <Link to="aupass" > Feature 2</Link>
              </ul>
            )}
          </li>
          <li className="navbar-item" id="contact">
            <a href="#company" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>

        {/* Navbar Button */}
        <div className={`navbar-button ${isMenuOpen ? 'open' : ''}`}>
          <button className="demo-button">Get a Free Demo</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
