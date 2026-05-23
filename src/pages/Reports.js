import React from 'react';

function Reports() {
  return (
    <div className="container mt-5">
      <h1 className="section-title text-center mb-4">SmartPark Reports</h1>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card smart-card p-4 text-center h-100">
            <h3 className="stat-number">20</h3>
            <h5>Total Parking Slots</h5>
            <p>SmartPark currently manages a 20-slot parking area.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card smart-card p-4 text-center h-100">
            <h3 className="stat-number">3</h3>
            <h5>Vehicle Types</h5>
            <p>Sedan, SUV, and Truck categories are supported.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card smart-card p-4 text-center h-100">
            <h3 className="stat-number">Live</h3>
            <h5>Dashboard Data</h5>
            <p>Parking activity is updated directly inside the dashboard.</p>
          </div>
        </div>
      </div>

      <div className="card smart-card p-4 mt-5">
        <h3>Report Overview</h3>
        <p>
          The reports page gives a simple overview of the SmartPark system.
          It summarizes the parking capacity, supported vehicle types, and
          dashboard activity features.
        </p>

        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>Report Item</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Capacity Report</td>
              <td>Shows the total number of parking spaces supported.</td>
            </tr>
            <tr>
              <td>Vehicle Type Report</td>
              <td>Displays the categories used for parking fees.</td>
            </tr>
            <tr>
              <td>Activity Report</td>
              <td>Connects with dashboard activity and transaction tracking.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reports;