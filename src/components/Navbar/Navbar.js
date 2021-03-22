import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header id="header" class="d-flex flex-column justify-content-center">

      <nav class="nav-menu">
        <ul>
          <li class="active">
            <Link to="/hero"><i class="fas fa-home"></i> <span>Home</span></Link>
          </li>

          <li>
            <Link to="/about"><i class="fas fa-user"></i> <span>About</span></Link>
          </li>

          <li>
            <Link to="/resume"><i class="fas fa-file"></i> <span>Resume</span></Link>
          </li>

          <li>
            <Link to="/portfolio"><i class="fas fa-book"></i> <span>Portfolio</span></Link>
          </li>

          <li>
            <Link to="/contact"><i class="fas fa-envelope"></i> <span>Contact</span></Link>
          </li>

        </ul>
      </nav>
      
  </header>
  )
};

export default Navbar;


