import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { addRegistration } from '../utils/storage';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Wedding',
    date: '',
    guests: '',
    message: '',
  });
  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRegistration(form);
    setAlert('Your registration has been submitted. Status: Pending');
    setForm({ name: '', email: '', phone: '', eventType: 'Wedding', date: '', guests: '', message: '' });
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <section className="py-5" style={{ backgroundColor: '#f7f9fc' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow rounded-4">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4" style={{ color: '#1F4E79' }}>Event Registration</h3>
                  {alert && (
                    <div className="alert alert-success" role="alert">
                      {alert}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name</label>
                      <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Phone</label>
                      <input type="tel" className="form-control" name="phone" value={form.phone} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Event Type</label>
                      <select className="form-select" name="eventType" value={form.eventType} onChange={handleChange}>
                        <option>Wedding</option>
                        <option>Birthday</option>
                        <option>Corporate</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Event Date</label>
                      <input type="date" className="form-control" name="date" value={form.date} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Number of Guests</label>
                      <input type="number" className="form-control" name="guests" value={form.guests} onChange={handleChange} required min="1" />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Message (optional)</label>
                      <textarea className="form-control" rows="4" name="message" value={form.message} onChange={handleChange}></textarea>
                    </div>
                    <div className="col-12 d-grid d-sm-flex gap-2">
                      <button className="btn px-4 py-2 rounded-3" type="submit" style={{ backgroundColor: '#D4AF37', color: '#1F4E79' }}>Submit</button>
                      <a href="/" className="btn btn-outline-primary px-4 py-2 rounded-3">Back to Home</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Register;
