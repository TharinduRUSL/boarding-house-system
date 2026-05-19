import { useEffect, useState } from "react";
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
    <div className="page">
      <div className="page-header">
        <h1>Available Boarding Places</h1>
        <p>
          Search suitable boarding places by location, gender type, room type,
          and monthly price.
        </p>
      </div>

      <div className="filter-box">
        <input
          type="text"
          placeholder="Search by location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <select
          value={genderType}
          onChange={(e) => setGenderType(e.target.value)}
        >
          <option value="">Gender Type</option>
          <option value="BOYS_ONLY">Boys Only</option>
          <option value="GIRLS_ONLY">Girls Only</option>
          <option value="BOYS_AND_GIRLS">Boys and Girls</option>
          <option value="ANY">Any</option>
        </select>

        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <button className="btn primary" onClick={handleSearch}>
          Search
        </button>

        <button className="btn secondary" onClick={loadBoardings}>
          Reset
        </button>
      </div>

      {boardings.length === 0 ? (
        <p className="empty-text">No boarding places found.</p>
      ) : (
        <div className="boarding-grid">
          {boardings.map((boarding) => (
            <div className="boarding-card" key={boarding.id}>
              <div className="boarding-image">
                {boarding.genderType === "GIRLS_ONLY" ? "🏠👩" : "🏠👨"}
              </div>

              <div className="boarding-content">
                <h3>{boarding.title}</h3>
                <p className="location">📍 {boarding.location}</p>
                <p>{boarding.description}</p>

                <div className="boarding-tags">
                  <span>{boarding.genderType}</span>
                  <span>{boarding.roomType}</span>
                  <span>Rs. {boarding.monthlyPrice}</span>
                </div>

                <div className="facility-list">
                  {boarding.wifiAvailable && <span>Wi-Fi</span>}
                  {boarding.foodAvailable && <span>Food</span>}
                  {boarding.parkingAvailable && <span>Parking</span>}
                  {boarding.cctvAvailable && <span>CCTV</span>}
                  {boarding.femaleWardenAvailable && <span>Female Warden</span>}
                  {boarding.secureGateAvailable && <span>Secure Gate</span>}
                </div>

                <p className="contact">📞 {boarding.contactNumber}</p>

                <button className="btn primary">Request Booking</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Boardings;