import React from 'react';
import './Footer.scss';
import { HashLink as Link } from 'react-router-hash-link';

function Footer() {
  return (
      <footer className="" id="footerPage">
        <p><Link className="nav-link" to="/about">About Us</Link></p>
      </footer>
  );
}

export default Footer;
