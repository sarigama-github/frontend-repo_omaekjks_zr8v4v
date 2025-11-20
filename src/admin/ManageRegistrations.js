import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getRegistrations, updateRegistrationStatus, deleteRegistration, isAdminLoggedIn } from '../utils/storage';
import { useNavigate } from 'react-router-dom';

const statusBadge = (s) => {
  const map = {
    Pending: 'warning',
    Approved: 'success',
    Rejected: 'danger',
  };
  return <span className={`badge bg-${map[s]}`}>{s}</span>;
};

const ManageRegistrations = () => {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminLoggedIn()) navigate('/admin');
    const sync = () => setRows(getRegistrations());
    sync();
    const i = setInterval(sync, 800);
    return () => clearInterval(i);
  }, [navigate]);

  const handleAction = (id, action) => {
    if (action === 'delete') {
      deleteRegistration(id);
    } else {
      updateRegistrationStatus(id, action);
    }
    setRows(getRegistrations());
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <section className="py-5">
        <div className="container">
          <h3 className="mb-4" style={{ color: '#1F4E79' }}>Manage Registrations</h3>
          <div className="table-responsive shadow rounded-4 overflow-hidden">
            <table className="table table-hover m-0 align-middle">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Event Type</th>
                  <th>Date</th>
                  <th>Guests</th>
                  <th>Status</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center py-5 text-muted">No registrations yet.</td>
                  </tr>
                )}
                {rows.map((r) => (
                  <tr key={r.id}>
                    <td>
                      <div className="fw-semibold">{r.name}</div>
                      <small className="text-muted">{r.email} · {r.phone}</small>
                    </td>
                    <td>{r.eventType}</td>
                    <td>{r.date}</td>
                    <td>{r.guests}</td>
                    <td>{statusBadge(r.status)}</td>
                    <td className="text-end d-flex gap-2 justify-content-end">
                      <button className="btn btn-sm btn-success" onClick={() => handleAction(r.id, 'Approved')}>
                        <i className="bi bi-check2 me-1"></i>Approve
                      </button>
                      <button className="btn btn-sm btn-danger" onClick={() => handleAction(r.id, 'Rejected')}>
                        <i className="bi bi-x me-1"></i>Reject
                      </button>
                      <button className="btn btn-sm btn-secondary" onClick={() => handleAction(r.id, 'delete')}>
                        <i className="bi bi-trash me-1"></i>Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ManageRegistrations;
