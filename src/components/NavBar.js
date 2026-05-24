import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">

        <NavLink className="navbar-brand" to="/">
          🅿️ SmartPark
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#smartParkNavbar"
          aria-controls="smartParkNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="smartParkNavbar">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/reports">Reports</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/services">Services</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;