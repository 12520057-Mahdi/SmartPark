import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <h5>🅿️ SmartPark</h5>
            <p className="mb-0">
              Simple parking management for vehicle entry, slot tracking, and daily reports.
            </p>
          </div>

          <div className="col-md-6 text-md-end mt-3 mt-md-0">
            <Link to="/" className="text-light me-3">Home</Link>
  <Link to="/dashboard" className="text-light me-3">Dashboard</Link>
  <Link to="/reports" className="text-light me-3">Reports</Link>
  <Link to="/services" className="text-light me-3">Services</Link>
  <Link to="/about" className="text-light me-3">About</Link>
  <Link to="/contact" className="text-light">Contact</Link>
          </div>
        </div>

        <hr className="border-light" />

        <p className="text-center mb-0">
          © 2026 SmartPark | Parking Management System
        </p>
      </div>
    </footer>
  );
}

export default Footer;