import React from 'react';
import './Footer.scss';
import { HashLink as Link } from 'react-router-hash-link';

function Footer() {
  return (
      <footer className="d-flex" id="footerPage">
        <div className="md-auto d-flex align-items-center justify-content-center link-container">
          <p>🤙 Created by Nick 🤙</p>
        </div>
      </footer>
  );
}

export default Footer;
