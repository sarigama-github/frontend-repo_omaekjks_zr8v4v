import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { setAdminLoggedIn } from '../utils/storage';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === '12345') {
      setAdminLoggedIn(true);
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <section className="py-5" style={{ backgroundColor: '#f7f9fc' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="card border-0 shadow rounded-4">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4" style={{ color: '#1F4E79' }}>Admin Login</h3>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <form onSubmit={handleSubmit} className="d-grid gap-3">
                    <div>
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                    </div>
                    <div>
                      <label className="form-label">Password</label>
                      <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                    </div>
                    <button className="btn px-4 py-2 rounded-3" style={{ backgroundColor: '#D4AF37', color: '#1F4E79' }} type="submit">Login</button>
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

export default AdminLogin;
