import React from 'react';
import './Header.css'; // We'll create this CSS file next

function Header() {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">Sayeed Baig</a>
      <ul className="nav-menu">
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#skills">Skills</a></li>
        <li className="nav-item"><a href="#projects">Projects</a></li>
        <li className="nav-item"><a href="#experience">Education</a></li>
        <li className="nav-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Header;