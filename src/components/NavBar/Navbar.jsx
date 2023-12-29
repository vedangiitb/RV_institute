// Navbar.js
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{ padding: '1%', borderBottom: '2px solid #ddd' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ fontSize: '30px' }}>
          RV Institute
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse container-fluid justify-content-end" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <ScrollLink to="navigate-home" spy={true} smooth={true} duration={500} className="nav-link" activeclassname="active">
                Home
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="navigate-features" spy={true} smooth={true} duration={500}   className="nav-link" activeclassname="active">
                Why RV Institue?
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="navigate-services" spy={true} smooth={true} duration={500} className="nav-link" activeclassname="active">
                Subjects
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="navigate-contact" spy={true} smooth={true} duration={500} className="nav-link" activeclassname="active">
                Contact Us
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
