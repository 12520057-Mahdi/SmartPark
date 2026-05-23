import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="container mt-5">
      <h1 className="section-title text-center mb-4">SmartPark Services</h1>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card smart-card p-4 h-100">
            <h4>Vehicle Entry</h4>
            <p>Register incoming vehicles and assign available parking slots.</p>
            <h5 className="text-warning">Sedan: $5</h5>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card smart-card p-4 h-100">
            <h4>Parking Monitoring</h4>
            <p>Track occupied and available spaces using a visual dashboard.</p>
            <h5 className="text-warning">SUV: $10</h5>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card smart-card p-4 h-100">
            <h4>Revenue Tracking</h4>
            <p>View daily parking revenue and recent transaction history.</p>
            <h5 className="text-warning">Truck: $15</h5>
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