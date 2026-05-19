function Home() {
  return (
    <div className="page">
      <section className="hero hero-banner">
        <div className="hero-content">
          <p className="badge">Smart Boarding Finder</p>

          <h1>Boarding House Finding and Booking System</h1>

          <p>
            Find suitable boarding places online by comparing location, price,
            gender type, facilities, safety features, and owner contact details.
          </p>

          <div className="hero-buttons">
            <a href="/boardings" className="btn primary">Find Boarding</a>
            <a href="/add-boarding" className="btn secondary">Add Boarding</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="house-icon">🏠</div>
          <p>Safe • Affordable • Easy Booking</p>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">👩‍🎓</div>
          <h3>Girls Boarding</h3>
          <p>
            Find safe boarding places with CCTV, female warden, secure gate,
            privacy, and clear rules.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">👨‍🎓</div>
          <h3>Boys Boarding</h3>
          <p>
            Compare price, location, food, parking, Wi-Fi, and room type before
            selecting a boarding.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🧑‍💼</div>
          <h3>Boarding Owners</h3>
          <p>
            Add boarding details, facilities, price, contact details, and manage
            booking requests.
          </p>
        </div>
      </section>

      <section className="how-section">
        <h2>How It Works</h2>

        <div className="how-grid">
          <div className="how-card">
            <span>1</span>
            <h3>Search</h3>
            <p>Search boarding places by location, price, and gender type.</p>
          </div>

          <div className="how-card">
            <span>2</span>
            <h3>Compare</h3>
            <p>Check facilities, safety, rules, photos, and contact details.</p>
          </div>

          <div className="how-card">
            <span>3</span>
            <h3>Book</h3>
            <p>Send a booking request and wait for owner approval.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;