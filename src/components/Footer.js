import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto py-4" style={{ backgroundColor: '#1F4E79', color: '#fff' }}>
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        <div>
          <h6 className="mb-1">Adiba Event Planners</h6>
          <small className="text-light">Bringing your moments to life with elegance.</small>
        </div>
        <div className="text-light">
          <i className="bi bi-geo-alt me-2"></i> 123 Royal Avenue, Blue City
          <span className="mx-3">|</span>
          <i className="bi bi-telephone me-2"></i> +1 555 123 4567
        </div>
        <div className="d-flex gap-3 fs-5">
          <a href="#" className="text-light"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-light"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-light"><i className="bi bi-twitter-x"></i></a>
          <a href="#" className="text-light"><i className="bi bi-whatsapp"></i></a>
        </div>
      </div>
      <div className="text-center mt-3">
        <small className="text-light">© {new Date().getFullYear()} Adiba Event Planners. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
