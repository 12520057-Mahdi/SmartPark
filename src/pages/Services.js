import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="container mt-5">
      <h1 className="section-title text-center mb-4">SmartPark Services</h1>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card smart-card p-4 h-100">
            <i className="bi bi-pencil-square fs-1 text-warning"></i>
            <h4>Digital Vehicle Registration</h4>
<p>Register incoming vehicles quickly using plate number and vehicle type.</p>
            <h5 className="text-warning">Sedan: $5/hour</h5>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card smart-card p-4 h-100">
            <i className="bi bi-camera-video-fill fs-1 text-warning"></i>
<h4>Live Parking Monitoring</h4>
<p>View available and occupied parking slots through a clear visual layout.</p>
            <h5 className="text-warning">SUV: $10/hour</h5>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card smart-card p-4 h-100">
            <i className="bi bi-clipboard-data-fill fs-1 text-warning"></i>
<h4>Parking Activity Reports</h4>
<p>Review revenue and transaction history to support daily parking control.</p>
            <h5 className="text-warning">Truck: $15/hour</h5>
          </div>
        </div>
      </div>

      <div className="card smart-card p-4 mt-5">
        <h3>Service Summary</h3>
        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>Service</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Slot Management</td>
              <td>Shows parking spaces and their current status.</td>
            </tr>
            <tr>
              <td>Vehicle Processing</td>
              <td>Handles vehicle entry and exit using the dashboard.</td>
            </tr>
            <tr>
              <td>Transaction History</td>
              <td>Stores recent parking payments during the session.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-center mt-4">
        <Link to="/dashboard" className="btn btn-amber">
          Try the Dashboard
        </Link>
      </div>
    </div>
  );
}

export default Services;