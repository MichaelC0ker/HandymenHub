import React from "react";
import "./NavBar.css";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <nav className="nav">
      <a href="/home" className="site-title">
        Task Master
      </a>
      <ul>
        <li>
          <a href="/services" className="site-title">
            My Services
          </a>
        </li>
        <li>
          <a href="/post" className="site-title">
            Post Details
          </a>
        </li>
        <li>
          <a href="/login" className="site-title" onClick={handleLogout}>
            Log Out
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
