import React, { useEffect, useState } from 'react';

function Reports() {
  const [slots, setSlots] = useState([]);
  const [revenue, setRevenue] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedSlots = localStorage.getItem('smartpark_slots');
    const savedRevenue = localStorage.getItem('smartpark_revenue');
    const savedHistory = localStorage.getItem('smartpark_history');

    setSlots(savedSlots ? JSON.parse(savedSlots) : []);
    setRevenue(savedRevenue ? JSON.parse(savedRevenue) : 0);
    setHistory(savedHistory ? JSON.parse(savedHistory) : []);
  }, []);

  const occupiedCount = slots.filter(slot => slot.occupied).length;
  const totalSlots = slots.length || 20;
  const occupancyPercent = Math.round((occupiedCount / totalSlots) * 100);

  return (
    <div className="container mt-5">
      <h1 className="section-title text-center mb-4">
        <i className="bi bi-bar-chart-fill me-2"></i>
        SmartPark Reports
      </h1>

      <div className="row g-4">
        <div className="col-md-3">
          <div className="card smart-card p-4 text-center h-100">
            <i className="bi bi-grid-3x3-gap-fill fs-1 text-warning"></i>
            <h3 className="stat-number">{totalSlots}</h3>
            <h5>Total Slots</h5>
            <p>Total parking spaces managed by SmartPark.</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card smart-card p-4 text-center h-100">
            <i className="bi bi-p-square-fill fs-1 text-warning"></i>
            <h3 className="stat-number">{occupiedCount}</h3>
            <h5>Occupied</h5>
            <p>Currently occupied parking slots.</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card smart-card p-4 text-center h-100">
            <i className="bi bi-cash-coin fs-1 text-warning"></i>
            <h3 className="stat-number">${revenue}</h3>
            <h5>Revenue</h5>
            <p>Total revenue recorded for the current day.</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card smart-card p-4 text-center h-100">
            <i className="bi bi-receipt fs-1 text-warning"></i>
            <h3 className="stat-number">{history.length}</h3>
            <h5>Transactions</h5>
            <p>Total processed parking transactions.</p>
          </div>
        </div>
      </div>

      <div className="card smart-card p-4 mt-5">
        <h3>Live Occupancy Report</h3>
        <p>
          This report reads dashboard data saved in local storage and shows
          the current parking status.
        </p>

        <label className="form-label">Current Occupancy</label>
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: occupancyPercent + '%' }}
          >
            {occupancyPercent}%
          </div>
        </div>
      </div>

      <div className="card smart-card p-4 mt-4">
        <h3>Recent Activity</h3>

        <div className="table-responsive">
          <table className="table table-bordered mt-3">
            <thead className="table-dark">
              <tr>
                <th>Plate</th>
                <th>Type</th>
                <th>Hours</th>
                <th>Amount</th>
                <th>Time</th>
              </tr>
            </thead>

            <tbody>
              {history.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    No recent transactions.
                  </td>
                </tr>
              ) : (
                history.slice(0, 5).map((item, index) => (
                  <tr key={`${item.plate}-${item.time}-${index}`}>
                    <td>{item.plate}</td>
                    <td>{item.type}</td>
                    <td>{item.hours}</td>
                    <td>${item.amount}</td>
                    <td>{item.time}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Reports;