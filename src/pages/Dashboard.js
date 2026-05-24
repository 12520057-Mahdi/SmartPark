import React, { useState, useEffect } from 'react';

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
        time: '',
        entryTimestamp: null
      });
    }

    return slots;
  };

  const [plate, setPlate] = useState('');
  const [vehicleType, setVehicleType] = useState('sedan');
  const [searchPlate, setSearchPlate] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [message, setMessage] = useState('');
  const [slots, setSlots] = useState(() => {
    const savedSlots = localStorage.getItem('smartpark_slots');
    return savedSlots ? JSON.parse(savedSlots) : createSlots();
  });

  const [revenue, setRevenue] = useState(() => {
    const savedRevenue = localStorage.getItem('smartpark_revenue');
    return savedRevenue ? JSON.parse(savedRevenue) : 0;
  });

  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem('smartpark_history');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });
  useEffect(() => {
    localStorage.setItem('smartpark_slots', JSON.stringify(slots));
  }, [slots]);

  useEffect(() => {
    localStorage.setItem('smartpark_revenue', JSON.stringify(revenue));
  }, [revenue]);

  useEffect(() => {
    localStorage.setItem('smartpark_history', JSON.stringify(history));
  }, [history]);
  const occupiedCount = slots.filter(slot => slot.occupied).length;
  const availableCount = 20 - occupiedCount;
  const occupancyPercent = Math.round((occupiedCount / 20) * 100);

  const parkVehicle = (e) => {
    e.preventDefault();

    if (plate.trim().length < 3) {
      setMessage('Plate number must be at least 3 characters.');
      return;
    }
    const normalizedPlate = plate.trim().toUpperCase();

    if (slots.some(slot => slot.occupied && slot.plate === normalizedPlate)) {
      setMessage('This plate is already parked.');
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
          plate: normalizedPlate, 
          type: vehicleType,
          time: new Date().toLocaleTimeString(),
          entryTimestamp: Date.now()
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

const exitTimestamp = Date.now();

let parkedHours = 1;

if (selectedSlot.entryTimestamp) {
  const parkedMilliseconds = exitTimestamp - selectedSlot.entryTimestamp;
  parkedHours = Math.max(1, Math.ceil(parkedMilliseconds / (1000 * 60 * 60)));
}

const price = rates[selectedSlot.type] * parkedHours;
    const confirmExit = window.confirm(
      'Vehicle ' + selectedSlot.plate +
      ' entered at ' + selectedSlot.time +
      '. Parked hours: ' + parkedHours +
      '. Confirm payment of $' + price + '?');

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
          time: '',
          entryTimestamp: null
        };
      }

      return slot;
    });

    const transaction = {
      plate: selectedSlot.plate,
      type: selectedSlot.type,
      hours: parkedHours,
      amount: price,
      time: new Date().toLocaleTimeString()
    };

    setSlots(updatedSlots);
setRevenue(prevRevenue => prevRevenue + price);    setHistory([transaction, ...history]);
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
      <h1 className="section-title text-center mb-4">
        <i className="bi bi-speedometer2 me-2"></i>
        SmartPark Dashboard
      </h1>
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
                  <option value="sedan">Sedan ($5/hr)</option>
<option value="suv">SUV ($10/hr)</option>
<option value="truck">Truck ($15/hr)</option>
                </select>
              </div>

              <button type="submit" className="btn btn-amber w-100">
                Park Vehicle
              </button>
            </form>
          </div>

          <div className="card smart-card dashboard-summary p-4 mt-4">
            <h4>Today's Summary</h4>

            <div className="row g-2 mt-2">
              <div className="col-6 col-sm-6">                <div className="summary-box">
                <p className="summary-label">Revenue</p>
                <h5 className="summary-value">${revenue}</h5>
              </div>
              </div>

              <div className="col-6 col-sm-6">
                <div className="summary-box">
                  <p className="summary-label">Available</p>
                  <h5 className="summary-value">{availableCount}/20</h5>
                </div>
              </div>

              <div className="col-6 col-sm-6">
                <div className="summary-box">
                  <p className="summary-label">Occupied</p>
                  <h5 className="summary-value">{occupiedCount}</h5>
                </div>
              </div>

              <div className="col-6 col-sm-6">
                <div className="summary-box">
                  <p className="summary-label">History</p>
                  <h5 className="summary-value">{history.length}</h5>
                </div>
              </div>
            </div>

            <label className="form-label mt-4">Live Occupancy</label>
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
onClick={() => slot.occupied && releaseSpot(slot.id)}                    >
                      <div>
                        Slot {slot.id}
                        <br />
                        {slot.occupied ? (
                          <>
                            {slot.plate}
                            <br />
                            <span className="badge-occupied">{slot.type}</span>
                          </>
                        ) : (
                          <span className="badge-available">Available</span>
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
            <div className="table-responsive">

              <table className="table table-bordered">
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
                  {filteredHistory.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="text-center">
                        No transactions yet.
                      </td>
                    </tr>
                  ) : (
                    filteredHistory.map((item, index) => (
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
      </div>
    </div>
  );
}

export default Dashboard;