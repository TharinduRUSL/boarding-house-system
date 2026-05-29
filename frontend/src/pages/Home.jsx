function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-text">
          <p className="home-badge">🏠 Smart Boarding Finder</p>

          <h1>Find Your Perfect Boarding Place Easily</h1>

          <p className="home-subtitle">
            A simple online platform for students and working people to find
            safe, affordable, and suitable boarding places by comparing price,
            location, facilities, room type, and safety features.
          </p>

          <div className="home-buttons">
            <a href="/boardings" className="btn primary">
              Find Boarding
            </a>
            <a href="/add-boarding" className="btn secondary">
              Add Boarding
            </a>
          </div>

          <div className="quick-stats">
            <div>
              <strong>Easy</strong>
              <span>Search</span>
            </div>
            <div>
              <strong>Safe</strong>
              <span>Boardings</span>
            </div>
            <div>
              <strong>Fast</strong>
              <span>Booking</span>
            </div>
          </div>
        </div>

        <div className="home-hero-image">
          <div className="hero-card-main">
            <div className="hero-house">🏘️</div>
            <h3>Compare Before You Book</h3>
            <p>Price • Location • Facilities • Safety</p>
          </div>
        </div>
      </section>

      <section className="audience-section">
        <div className="section-title">
          <h2>Choose the Right Boarding Type</h2>
          <p>
            Different users need different facilities. This system helps each
            user find the best match.
          </p>
        </div>

        <div className="audience-grid">
          <div className="audience-card girls-card">
            <div className="audience-image">👩‍🎓</div>
            <div className="audience-content">
              <h3>Girls Boarding</h3>
              <p>
                Find safe boarding places with CCTV, female warden, secure gate,
                privacy, clear rules, and comfortable rooms.
              </p>
              <div className="mini-tags">
                <span>CCTV</span>
                <span>Female Warden</span>
                <span>Secure Gate</span>
              </div>
            </div>
          </div>

          <div className="audience-card boys-card">
            <div className="audience-image">👨‍🎓</div>
            <div className="audience-content">
              <h3>Boys Boarding</h3>
              <p>
                Compare price, location, food, parking, Wi-Fi, room type, and
                nearby facilities before selecting a boarding.
              </p>
              <div className="mini-tags">
                <span>Wi-Fi</span>
                <span>Food</span>
                <span>Parking</span>
              </div>
            </div>
          </div>

          <div className="audience-card owners-card">
            <div className="audience-image">🧑‍💼</div>
            <div className="audience-content">
              <h3>Boarding Owners</h3>
              <p>
                Owners can add boarding details, price, facilities, contact
                details, photos, and manage booking requests.
              </p>
              <div className="mini-tags">
                <span>Add Details</span>
                <span>Manage</span>
                <span>Approve</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-section advanced-how">
        <div className="section-title">
          <h2>How It Works</h2>
          <p>Find and book a boarding place in a simple step-by-step process.</p>
        </div>

        <div className="how-grid">
          <div className="how-card">
            <div className="how-icon">🔍</div>
            <span>Step 01</span>
            <h3>Search Boardings</h3>
            <p>
              Search suitable boarding places by location, price, gender type,
              and room type.
            </p>
          </div>

          <div className="how-card">
            <div className="how-icon">📋</div>
            <span>Step 02</span>
            <h3>Compare Details</h3>
            <p>
              Compare facilities, safety features, rules, owner contact, and
              price details.
            </p>
          </div>

          <div className="how-card">
            <div className="how-icon">✅</div>
            <span>Step 03</span>
            <h3>Send Booking Request</h3>
            <p>
              Select a boarding and send a booking request to the boarding
              owner.
            </p>
          </div>

          <div className="how-card">
            <div className="how-icon">💳</div>
            <span>Step 04</span>
            <h3>Payment Later</h3>
            <p>
              Online payment feature can be added later for reservation or
              advance payment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;