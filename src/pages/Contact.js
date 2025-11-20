import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); setForm({ name: '', email: '', message: '' }); };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="card border-0 shadow rounded-4">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-3" style={{ color: '#1F4E79' }}>Contact Us</h3>
                  {sent && <div className="alert alert-success">Thanks! We'll get back to you shortly.</div>}
                  <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                      <label className="form-label">Name</label>
                      <input className="form-control" name="name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Message</label>
                      <textarea className="form-control" rows="5" name="message" value={form.message} onChange={handleChange} required />
                    </div>
                    <div className="col-12">
                      <button className="btn px-4 py-2 rounded-3" type="submit" style={{ backgroundColor: '#D4AF37', color: '#1F4E79' }}>Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#1F4E79', color: '#fff' }}>
                <h5>Our Office</h5>
                <p className="mb-1"><i className="bi bi-geo-alt me-2"></i>123 Royal Avenue, Blue City</p>
                <p className="mb-1"><i className="bi bi-telephone me-2"></i>+1 555 123 4567</p>
                <p className="mb-4"><i className="bi bi-envelope me-2"></i>hello@adibaevents.com</p>
                <div className="ratio ratio-16x9 rounded-3 overflow-hidden border border-3" style={{ borderColor: '#D4AF37' }}>
                  <iframe title="map" src="https://www.google.com/maps?q=New+York&output=embed" allowFullScreen loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* WhatsApp Floating */}
        <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="position-fixed" style={{ right: 20, bottom: 20, backgroundColor: '#25D366', color: '#fff', width: 56, height: 56, borderRadius: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,.2)' }}>
          <i className="bi bi-whatsapp fs-3"></i>
        </a>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
