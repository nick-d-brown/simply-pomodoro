import React from 'react';
import './Navbar.scss';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-around" id="navbarPage">
  <div className="logo-hamburger-container">
    <Link className="navbar-brand" to="/">Simply Pomodoro</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
  <div className="collapse navbar-collapse link-container float-right" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link"  to="/">Timer <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About Us</Link>
      </li>
    </ul>
  </div>




</nav>
  );
}

export default Navbar;
