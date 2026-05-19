function Home() {
  return (
    <div className="page">
      <section className="hero">
        <h1>Boarding House Finding and Booking System</h1>
        <p>
          Find suitable boarding places based on location, price, gender type,
          room type, facilities, and safety.
        </p>

        <div className="hero-buttons">
          <a href="/boardings" className="btn primary">Find Boarding</a>
          <a href="/add-boarding" className="btn secondary">Add Boarding</a>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>For Girls</h3>
          <p>CCTV, female warden, secure gate, privacy, and safety rules.</p>
        </div>

        <div className="feature-card">
          <h3>For Boys</h3>
          <p>Price, location, food, parking, Wi-Fi, and room type.</p>
        </div>

        <div className="feature-card">
          <h3>For Owners</h3>
          <p>Add boarding details and manage booking requests easily.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;