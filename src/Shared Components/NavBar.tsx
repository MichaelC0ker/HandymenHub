import React, { useState } from 'react';
import './NavBar.css';

interface NavbarProps {
  links: { text: string; url: string }[];
}

interface NavbarState {
  isOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">Task Masters</span>
        <button className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          Menu
        </button>
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {links.map((link, index) => (
          <li key={index} className="navbar-link">
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
