import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getStats, isAdminLoggedIn } from '../utils/storage';

const StatCard = ({ title, value, icon, color }) => (
  <div className="col-md-4 mb-4">
    <div className="card border-0 shadow rounded-4" style={{ borderTop: `4px solid ${color}` }}>
      <div className="card-body d-flex align-items-center gap-3">
        <span className="fs-1" style={{ color }}><i className={`bi ${icon}`}></i></span>
        <div>
          <h6 className="text-muted mb-1">{title}</h6>
          <div className="h3 mb-0" style={{ color: '#1F4E79' }}>{value}</div>
        </div>
      </div>
    </div>
  </div>
);

const AdminDashboard = () => {
  const [stats, setStats] = useState({ totalPending: 0, totalApproved: 0, totalRejected: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminLoggedIn()) navigate('/admin');
    const sync = () => setStats(getStats());
    sync();
    const i = setInterval(sync, 800);
    return () => clearInterval(i);
  }, [navigate]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <section className="py-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h3 className="m-0" style={{ color: '#1F4E79' }}>Dashboard</h3>
            <Link to="/admin/manage" className="btn px-4 py-2 rounded-3" style={{ backgroundColor: '#D4AF37', color: '#1F4E79' }}>Manage Registrations</Link>
          </div>
          <div className="row">
            <StatCard title="Total Pending" value={stats.totalPending} icon="bi-hourglass-split" color="#FFC107" />
            <StatCard title="Total Approved" value={stats.totalApproved} icon="bi-check-circle" color="#28A745" />
            <StatCard title="Total Rejected" value={stats.totalRejected} icon="bi-x-circle" color="#DC3545" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
