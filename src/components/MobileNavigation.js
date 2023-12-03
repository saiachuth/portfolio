// MobileNavigation.js

import React from "react";
import { Link } from "react-router-dom";

const MobileNavigation = ({ menuOpen, toggleMenu }) => {
  return (
    <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
      <button onClick={toggleMenu}>Toggle Menu</button>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavigation;
