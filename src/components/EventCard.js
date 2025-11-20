import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ image, title, description }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ transition: 'transform .2s, box-shadow .2s' }}>
        <div className="overflow-hidden" style={{ maxHeight: 220 }}>
          <img src={image} className="card-img-top" alt={title} style={{ objectFit: 'cover', height: 220 }} />
        </div>
        <div className="card-body">
          <h5 className="card-title" style={{ color: '#1F4E79' }}>{title}</h5>
          <p className="card-text text-muted">{description}</p>
          <Link to="/register" className="btn btn-lg rounded-3" style={{ backgroundColor: '#D4AF37', color: '#1F4E79' }}>
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
