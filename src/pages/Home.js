import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#ffffff' }}>
      <Navbar />

      {/* Hero */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #1F4E79, #213A5C)' }}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 text-white">
              <h1 className="display-5 fw-bold">Crafting Unforgettable Events</h1>
              <p className="lead opacity-75">From intimate weddings to grand corporate galas, we design seamless experiences with elegance and precision.</p>
              <a href="#events" className="btn btn-lg px-4 rounded-3" style={{ backgroundColor: '#D4AF37', color: '#1F4E79' }}>Explore Services</a>
            </div>
            <div className="col-lg-6">
              <div className="rounded-4 overflow-hidden shadow" style={{ border: '4px solid #D4AF37' }}>
                <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1470&auto=format&fit=crop" className="w-100" alt="Event" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-5" id="events">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold" style={{ color: '#1F4E79' }}>Our Signature Events</h2>
            <p className="text-muted">Handcrafted experiences tailored to your vision.</p>
          </div>
          <div className="row">
            <EventCard
              image="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1470&auto=format&fit=crop"
              title="Wedding Event"
              description="Elegant ceremonies and receptions, curated down to the finest detail."
            />
            <EventCard
              image="https://images.unsplash.com/photo-1561484930-998b6a7b22e3?q=80&w=1470&auto=format&fit=crop"
              title="Birthday Event"
              description="Personalized birthday celebrations that sparkle with joy."
            />
            <EventCard
              image="https://images.unsplash.com/photo-1542326237-94b1c5a538a8?q=80&w=1471&auto=format&fit=crop"
              title="Corporate Event"
              description="Professional conferences, launches, and retreats with impact."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
