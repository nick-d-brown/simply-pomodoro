import React from 'react';
import './Navbar.scss';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
  return (
    <div className="" id="navbarPage">
      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between">
        <div>
          <Link className="navbar-brand" to="/">
            <i className="far fa-clock d-inline-block align-top home-icon" alt="TeamPomodoro"></i>
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse link-container" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Pomodoro<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
