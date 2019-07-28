import React from 'react';
import './Footer.scss';
import { HashLink as Link } from 'react-router-hash-link';

function Footer() {
  return (
      <footer className="" id="footerPage">
        <p>Posted by: Hege Refsnes</p>
        <p>Contact information: <a href="mailto:someone@example.com">
        someone@example.com</a>.</p>
        <a href="https://icons8.com/icon/18102/tomato">Tomato icon by Icons8</a>
      </footer>
  );
}

export default Footer;
