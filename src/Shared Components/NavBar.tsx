import React from "react";
import "./NavBar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
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
          <a href="/log-out" className="site-title">
            Log Out
          </a>
        </li>
      </ul>
    </nav>
  );
}