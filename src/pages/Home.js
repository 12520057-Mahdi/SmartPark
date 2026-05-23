import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <section className="hero-section text-center">
        <div className="container">
          <h1 className="hero-title">SmartPark Management System</h1>
          <p className="lead mt-3">
            A simple web application for managing parking slots, vehicle entry, and daily activity.
          </p>
          <Link to="/dashboard" className="btn btn-amber btn-lg mt-3">
            Open Dashboard
          </Link>
        </div>
      </section>

      <section className="container mt-5">
        <h2 className="text-center section-title mb-4">Why SmartPark?</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card smart-card p-4 h-100 text-center">
              <h3 className="stat-number">20</h3>
              <h5>Parking Slots</h5>
              <p>Manage a small parking lot with a clear visual layout.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card smart-card p-4 h-100 text-center">
              <h3 className="stat-number">Live</h3>
              <h5>Occupancy Tracking</h5>
              <p>View available and occupied spaces while using the system.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card smart-card p-4 h-100 text-center">
              <h3 className="stat-number">Easy</h3>
              <h5>Vehicle Entry</h5>
              <p>Register vehicles quickly using a simple form and dashboard.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;