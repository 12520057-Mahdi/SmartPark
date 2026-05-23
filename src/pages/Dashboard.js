import React, { useState } from 'react';

function Dashboard() {
  const rates = {
    sedan: 5,
    suv: 10,
    truck: 15
  };

  const createSlots = () => {
    const slots = [];

    for (let i = 1; i <= 20; i++) {
      slots.push({
        id: i,
        occupied: false,
        plate: '',
        type: '',
        time: ''
      });
    }

    return slots;
  };

  const [slots, setSlots] = useState(createSlots());
  const [plate, setPlate] = useState('');
  const [vehicleType, setVehicleType] = useState('sedan');
  const [revenue, setRevenue] = useState(0);
  const [history, setHistory] = useState([]);
  const [searchPlate, setSearchPlate] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [message, setMessage] = useState('');

  const occupiedCount = slots.filter(slot => slot.occupied).length;
  const availableCount = 20 - occupiedCount;
  const occupancyPercent = Math.round((occupiedCount / 20) * 100);

  const parkVehicle = (e) => {
    e.preventDefault();

    if (plate.trim().length < 3) {
      setMessage('Plate number must be at least 3 characters.');
      return;
    }

    const freeSlot = slots.find(slot => !slot.occupied);

    if (!freeSlot) {
      setMessage('Parking lot is full.');
      return;
    }

    const updatedSlots = slots.map(slot => {
      if (slot.id === freeSlot.id) {
        return {
          ...slot,
          occupied: true,
          plate: plate.toUpperCase(),
          type: vehicleType,
          time: new Date().toLocaleTimeString()
        };
      }

      return slot;
    });

    setSlots(updatedSlots);
    setPlate('');
    setVehicleType('sedan');
    setMessage('Vehicle parked successfully.');
  };

  const releaseSpot = (id) => {
    const selectedSlot = slots.find(slot => slot.id === id);

    if (!selectedSlot.occupied) {
      return;
    }

    const price = rates[selectedSlot.type];

    const confirmExit = window.confirm(
      'Vehicle ' + selectedSlot.plate + ' entered at ' + selectedSlot.time + '. Confirm payment of $' + price + '?'
    );

    if (!confirmExit) {
      return;
    }

    const updatedSlots = slots.map(slot => {
      if (slot.id === id) {
        return {
          ...slot,
          occupied: false,
          plate: '',
          type: '',
          time: ''
        };
      }

      return slot;
    });

    const transaction = {
      plate: selectedSlot.plate,
      type: selectedSlot.type,
      amount: price,
      time: new Date().toLocaleTimeString()
    };

    setSlots(updatedSlots);
    setRevenue(revenue + price);
    setHistory([transaction, ...history]);
    setMessage('Vehicle released successfully.');
  };

  const resetDay = () => {
    const confirmReset = window.confirm('Are you sure you want to reset the day?');

    if (!confirmReset) {
      return;
    }

    setSlots(createSlots());
    setRevenue(0);
    setHistory([]);
    setSearchPlate('');
    setFilterType('all');
    setMessage('Day reset successfully.');
  };

  const filteredHistory = history.filter(item => {
    if (filterType === 'all') {
      return true;
    }

    return item.type === filterType;
  });

  return (
    <div className="container mt-5">
      <h1 className="section-title text-center mb-4">SmartPark Dashboard</h1>

      {message && <div className="alert alert-info">{message}</div>}

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card smart-card p-4">
            <h4>Vehicle Entry</h4>

            <form onSubmit={parkVehicle}>
              <div className="mb-3">
                <label className="form-label">Plate Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={plate}
                  onChange={(e) => setPlate(e.target.value)}
                  placeholder="e.g. ABC123"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Vehicle Type</label>
                <select
                  className="form-select"
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                >
                  <option value="sedan">Sedan ($5)</option>
                  <option value="suv">SUV ($10)</option>
                  <option value="truck">Truck ($15)</option>
                </select>
              </div>

              <button type="submit" className="btn btn-amber w-100">
                Park Vehicle
              </button>
            </form>
          </div>

          <div className="card smart-card p-4 mt-4">
            <h4>Today's Summary</h4>
            <p>Total Revenue: <strong>${revenue}</strong></p>
            <p>Available Spots: <strong>{availableCount}/20</strong></p>

            <label className="form-label">Live Occupancy</label>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: occupancyPercent + '%' }}
              >
                {occupancyPercent}%
              </div>
            </div>

            <button className="btn btn-danger w-100 mt-4" onClick={resetDay}>
              End-of-Day Reset
            </button>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card smart-card p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4>Parking Layout</h4>

              <input
                type="text"
                className="form-control w-50"
                placeholder="Search by plate"
                value={searchPlate}
                onChange={(e) => setSearchPlate(e.target.value)}
              />
            </div>

            <div className="row g-2">
              {slots.map(slot => {
                const isHighlighted =
                  searchPlate.trim() !== '' &&
                  slot.plate.toLowerCase().includes(searchPlate.toLowerCase());

                return (
                  <div className="col-6 col-md-3" key={slot.id}>
                    <div
                      className={
                        'dashboard-slot ' +
                        (slot.occupied ? 'slot-occupied ' : 'slot-available ') +
                        (isHighlighted ? 'slot-highlight' : '')
                      }
                      onClick={() => releaseSpot(slot.id)}
                    >
                      <div>
                        Slot {slot.id}
                        <br />
                        {slot.occupied ? (
                          <>
                            {slot.plate}
                            <br />
                            <small>{slot.type}</small>
                          </>
                        ) : (
                          <small>Empty</small>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card smart-card p-4 mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4>Transaction History</h4>

              <select
                className="form-select w-25"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="truck">Truck</option>
              </select>
            </div>

            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Plate</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {filteredHistory.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center">
                      No transactions yet.
                    </td>
                  </tr>
                ) : (
                  filteredHistory.map((item, index) => (
                    <tr key={index}>
                      <td>{item.plate}</td>
                      <td>{item.type}</td>
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
    </div>
  );
}

export default Dashboard;