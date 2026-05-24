import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
      setError('Please fill in all fields.');
      setSuccess('');
      return;
    }
if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
  setError('Enter a valid email address.');
  setSuccess('');
  return;
}
    setError('');
    setSuccess('Message submitted successfully.');

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="section-title text-center mb-4">Contact SmartPark</h1>

      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="card smart-card p-4">
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-amber w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;