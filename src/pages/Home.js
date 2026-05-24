import React from 'react';
import { Link } from 'react-router-dom';
import parkingBg from '../assets/SmartPark.png';

function Home() {
  return (
    <div>
<section
  className="hero-section text-center"
  style={{     backgroundImage: `linear-gradient(rgba(11,31,51,0.85), rgba(11,31,51,0.85)), url(${parkingBg})`
 }}
>        <div className="container">
          <h1 className="hero-title">SmartPark Management System</h1>
          <p className="lead mt-3">
            A simple web application for managing parking slots, vehicle entry, and daily activity.
          </p>
          <div className="mt-4">
  <Link to="/dashboard" className="btn btn-amber btn-lg me-3">
    <i className="bi bi-speedometer2 me-2"></i>
    Open Dashboard
  </Link>

  <Link to="/services" className="btn btn-outline-light btn-lg">
    <i className="bi bi-info-circle me-2"></i>
    View Services
  </Link>
</div>
        </div>
      </section>

      <section className="container mt-5">
        <h2 className="text-center section-title mb-4">Why SmartPark?</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card smart-card p-4 h-100 text-center">
              <h3 className="stat-number">20</h3>
              <i className="bi bi-p-square-fill fs-1 text-warning"></i>
              <h5>Parking Slots</h5>
              <p>Manage a small parking lot with a clear visual layout.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card smart-card p-4 h-100 text-center">
              <h3 className="stat-number">Live</h3>
              <i className="bi bi-activity fs-1 text-warning"></i>
              <h5>Occupancy Tracking</h5>
              <p>View available and occupied spaces while using the system.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card smart-card p-4 h-100 text-center">
              <h3 className="stat-number">Easy</h3>
<i className="bi bi-car-front-fill fs-1 text-warning"></i>              <h5>Vehicle Entry</h5>
              <p>Register vehicles quickly using a simple form and dashboard.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mt-5">
  <div className="card smart-card p-4">
    <div className="row align-items-center">
      <div className="col-md-6">
        <h2 className="section-title">Built for Simple Parking Control</h2>
        <p>
          SmartPark helps parking staff manage vehicle entry, monitor
          available spaces, and review activity from one organized interface.
        </p>
        <p>
          The system is designed to be simple, responsive, and easy to use
          during daily parking operations.
        </p>
      </div>

      <div className="col-md-6">
        <ul className="list-group">
          <li className="list-group-item">Real-time slot status</li>
          <li className="list-group-item">Search by plate number</li>
          <li className="list-group-item">Daily revenue summary</li>
          <li className="list-group-item">Responsive dashboard layout</li>
        </ul>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default Home;