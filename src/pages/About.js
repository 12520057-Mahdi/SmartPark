import React from 'react';

function About() {
  return (
    <div className="container mt-5">
      <h1 className="section-title text-center mb-4">About SmartPark</h1>

      <div className="card smart-card p-4">
        <p>
          SmartPark is a web-based parking management system designed to help
          organize parking spaces and simplify vehicle monitoring.
        </p>

        <p>
          The system provides a clear dashboard where users can register
          vehicles, check available spaces, and view recent transactions.
        </p>

        <p>
          The main goal of SmartPark is to make parking management easier,
          faster, and more organized using a responsive web interface.
        </p>
      </div>
    </div>
  );
}

export default About;