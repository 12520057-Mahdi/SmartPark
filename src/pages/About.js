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
          vehicles, check available spaces, view parking activity, and track
          daily revenue.
        </p>

        <p>
          The project started as a basic static website and was improved into a
          React frontend application with routing, reusable components, forms,
          live dashboard updates, and local storage.
        </p>
      </div>

      <div className="card smart-card p-4 mt-4">
        <h3>Project Development</h3>

        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>Phase</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Phase 1</td>
              <td>
                Built a responsive parking website using HTML, CSS, Bootstrap,
                and JavaScript.
              </td>
            </tr>

            <tr>
              <td>Phase 2</td>
              <td>
                Converted the project into a React frontend application with
                routing, state management, validation, reports, and deployment.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card smart-card p-4 mt-4">
        <h3>Main Goals</h3>

        <ul className="list-group mt-3">
          <li className="list-group-item">Improve parking organization</li>
          <li className="list-group-item">Provide a responsive user interface</li>
          <li className="list-group-item">Track parking activity and revenue</li>
          <li className="list-group-item">Use React components and routing</li>
        </ul>
      </div>
    </div>
  );
}

export default About;