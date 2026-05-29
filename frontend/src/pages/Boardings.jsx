import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getAllBoardings,
  searchBoardingsByLocation,
  filterBoardingsByGender,
  filterBoardingsByPrice,
} from "../services/api";

function Boardings() {
  const [boardings, setBoardings] = useState([]);
  const [location, setLocation] = useState("");
  const [genderType, setGenderType] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    loadBoardings();
  }, []);

  const loadBoardings = async () => {
    const data = await getAllBoardings();
    setBoardings(data);
  };

  const handleSearch = async () => {
    if (location.trim() !== "") {
      const data = await searchBoardingsByLocation(location);
      setBoardings(data);
      return;
    }

    if (genderType !== "") {
      const data = await filterBoardingsByGender(genderType);
      setBoardings(data);
      return;
    }

    if (maxPrice !== "") {
      const data = await filterBoardingsByPrice(maxPrice);
      setBoardings(data);
      return;
    }

    loadBoardings();
  };

  return (
    <div className="boardings-page">
      <section className="boardings-hero">
        <div>
          <span className="premium-badge">🏠 Available Boardings</span>
          <h1>Find a Boarding Place That Matches Your Needs</h1>
          <p>
            Compare boarding places by location, monthly price, gender type,
            room type, facilities, and safety features.
          </p>
        </div>

        <div className="boardings-hero-card">
          <h3>{boardings.length}</h3>
          <p>Available Boarding Places</p>
        </div>
      </section>

      <section className="premium-filter-box">
        <div className="filter-input-group">
          <label>Location</label>
          <input
            type="text"
            placeholder="Example: Colombo"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="filter-input-group">
          <label>Gender Type</label>
          <select
            value={genderType}
            onChange={(e) => setGenderType(e.target.value)}
          >
            <option value="">All</option>
            <option value="BOYS_ONLY">Boys Only</option>
            <option value="GIRLS_ONLY">Girls Only</option>
            <option value="BOYS_AND_GIRLS">Boys and Girls</option>
            <option value="ANY">Any</option>
          </select>
        </div>

        <div className="filter-input-group">
          <label>Max Price</label>
          <input
            type="number"
            placeholder="Example: 15000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>

        <button className="btn primary filter-btn" onClick={handleSearch}>
          🔍 Search
        </button>

        <button className="btn secondary filter-btn" onClick={loadBoardings}>
          Reset
        </button>
      </section>

      {boardings.length === 0 ? (
        <div className="empty-state">
          <div>🏘️</div>
          <h3>No boarding places found</h3>
          <p>Try another location, gender type, or price range.</p>
        </div>
      ) : (
        <div className="premium-boarding-grid">
          {boardings.map((boarding) => (
            <div className="premium-boarding-card" key={boarding.id}>
              <div
                className={`premium-boarding-image ${
                  boarding.genderType === "GIRLS_ONLY"
                    ? "girls-card-image"
                    : boarding.genderType === "BOYS_ONLY"
                    ? "boys-card-image"
                    : "any-card-image"
                }`}
              >
                <span>
                  {boarding.genderType === "GIRLS_ONLY"
                    ? "👩‍🎓"
                    : boarding.genderType === "BOYS_ONLY"
                    ? "👨‍🎓"
                    : "🏠"}
                </span>
              </div>

              <div className="premium-boarding-body">
                <div className="card-top">
                  <h3>{boarding.title}</h3>
                  <span className="status-badge">{boarding.status}</span>
                </div>

                <p className="boarding-location">📍 {boarding.location}</p>

                <p className="boarding-description">
                  {boarding.description || "No description available."}
                </p>

                <div className="premium-price">
                  Rs. {boarding.monthlyPrice} <span>/ month</span>
                </div>

                <div className="premium-tags">
                  <span>{boarding.genderType}</span>
                  <span>{boarding.roomType}</span>
                  <span>{boarding.availableBeds} Beds</span>
                </div>

                <div className="premium-facilities">
                  {boarding.wifiAvailable && <span>📶 Wi-Fi</span>}
                  {boarding.foodAvailable && <span>🍽️ Food</span>}
                  {boarding.parkingAvailable && <span>🅿️ Parking</span>}
                  {boarding.cctvAvailable && <span>📹 CCTV</span>}
                  {boarding.femaleWardenAvailable && <span>👩‍💼 Warden</span>}
                  {boarding.secureGateAvailable && <span>🔐 Secure Gate</span>}
                </div>

                <div className="card-footer">
                  <p>📞 {boarding.contactNumber}</p>

                  <Link to={`/boardings/${boarding.id}`} className="btn primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Boardings;