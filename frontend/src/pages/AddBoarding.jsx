import { useState } from "react";
import { createBoarding } from "../services/api";

function AddBoarding() {
  const [formData, setFormData] = useState({
    ownerId: 1,
    title: "",
    description: "",
    location: "",
    address: "",
    monthlyPrice: "",
    advancePayment: "",
    genderType: "",
    roomType: "",
    availableRooms: "",
    availableBeds: "",
    foodAvailable: false,
    wifiAvailable: false,
    parkingAvailable: false,
    cctvAvailable: false,
    femaleWardenAvailable: false,
    secureGateAvailable: false,
    kitchenAvailable: false,
    laundryAvailable: false,
    rules: "",
    contactNumber: "",
    status: "APPROVED",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const boardingData = {
      ...formData,
      monthlyPrice: Number(formData.monthlyPrice),
      advancePayment: Number(formData.advancePayment),
      availableRooms: Number(formData.availableRooms),
      availableBeds: Number(formData.availableBeds),
    };

    try {
      await createBoarding(boardingData);
      alert("Boarding place added successfully!");

      setFormData({
        ownerId: 1,
        title: "",
        description: "",
        location: "",
        address: "",
        monthlyPrice: "",
        advancePayment: "",
        genderType: "",
        roomType: "",
        availableRooms: "",
        availableBeds: "",
        foodAvailable: false,
        wifiAvailable: false,
        parkingAvailable: false,
        cctvAvailable: false,
        femaleWardenAvailable: false,
        secureGateAvailable: false,
        kitchenAvailable: false,
        laundryAvailable: false,
        rules: "",
        contactNumber: "",
        status: "APPROVED",
      });
    } catch (error) {
      console.error("Error adding boarding:", error);
      alert("Failed to add boarding place. Please check backend server.");
    }
  };

  return (
    <div className="add-boarding-page">
      <section className="add-boarding-hero">
        <div>
          <span className="premium-badge">➕ Boarding Owner Panel</span>
          <h1>Add a New Boarding Place</h1>
          <p>
            Add boarding details, price, room information, facilities, safety
            features, rules, and owner contact details.
          </p>
        </div>

        <div className="add-hero-card">
          <div className="add-hero-icon">🏠</div>
          <h3>New Boarding Listing</h3>
          <p>Make your boarding visible to students and workers.</p>
        </div>
      </section>

      <form className="premium-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form-section-title">
            <span>01</span>
            <div>
              <h2>Basic Boarding Details</h2>
              <p>Enter the main details about your boarding place.</p>
            </div>
          </div>

          <div className="premium-form-grid">
            <div className="input-group full-width">
              <label>Boarding Title</label>
              <input
                type="text"
                name="title"
                placeholder="Example: Green Boys Boarding"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Location</label>
              <input
                type="text"
                name="location"
                placeholder="Example: Colombo"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Owner Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                placeholder="Example: 0771234567"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group full-width">
              <label>Full Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter full boarding address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group full-width">
              <label>Description</label>
              <textarea
                name="description"
                placeholder="Write a short description about the boarding place"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="form-section-title">
            <span>02</span>
            <div>
              <h2>Price and Room Details</h2>
              <p>Add monthly price, advance payment and room details.</p>
            </div>
          </div>

          <div className="premium-form-grid">
            <div className="input-group">
              <label>Monthly Price</label>
              <input
                type="number"
                name="monthlyPrice"
                placeholder="Example: 15000"
                value={formData.monthlyPrice}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Advance Payment</label>
              <input
                type="number"
                name="advancePayment"
                placeholder="Example: 30000"
                value={formData.advancePayment}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Gender Type</label>
              <select
                name="genderType"
                value={formData.genderType}
                onChange={handleChange}
                required
              >
                <option value="">Select gender type</option>
                <option value="BOYS_ONLY">Boys Only</option>
                <option value="GIRLS_ONLY">Girls Only</option>
                <option value="BOYS_AND_GIRLS">Boys and Girls</option>
                <option value="ANY">Any</option>
              </select>
            </div>

            <div className="input-group">
              <label>Room Type</label>
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                required
              >
                <option value="">Select room type</option>
                <option value="SINGLE">Single Room</option>
                <option value="SHARED">Shared Room</option>
                <option value="DOUBLE">Double Room</option>
                <option value="DORMITORY">Dormitory</option>
              </select>
            </div>

            <div className="input-group">
              <label>Available Rooms</label>
              <input
                type="number"
                name="availableRooms"
                placeholder="Example: 4"
                value={formData.availableRooms}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Available Beds</label>
              <input
                type="number"
                name="availableBeds"
                placeholder="Example: 8"
                value={formData.availableBeds}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="form-section-title">
            <span>03</span>
            <div>
              <h2>Facilities and Safety Features</h2>
              <p>Select the available facilities and safety features.</p>
            </div>
          </div>

          <div className="facility-check-grid">
            <label>
              <input
                type="checkbox"
                name="foodAvailable"
                checked={formData.foodAvailable}
                onChange={handleChange}
              />
              <span>🍽️ Food Available</span>
            </label>

            <label>
              <input
                type="checkbox"
                name="wifiAvailable"
                checked={formData.wifiAvailable}
                onChange={handleChange}
              />
              <span>📶 Wi-Fi Available</span>
            </label>

            <label>
              <input
                type="checkbox"
                name="parkingAvailable"
                checked={formData.parkingAvailable}
                onChange={handleChange}
              />
              <span>🅿️ Parking Available</span>
            </label>

            <label>
              <input
                type="checkbox"
                name="cctvAvailable"
                checked={formData.cctvAvailable}
                onChange={handleChange}
              />
              <span>📹 CCTV Available</span>
            </label>

            <label>
              <input
                type="checkbox"
                name="femaleWardenAvailable"
                checked={formData.femaleWardenAvailable}
                onChange={handleChange}
              />
              <span>👩‍💼 Female Warden</span>
            </label>

            <label>
              <input
                type="checkbox"
                name="secureGateAvailable"
                checked={formData.secureGateAvailable}
                onChange={handleChange}
              />
              <span>🔐 Secure Gate</span>
            </label>

            <label>
              <input
                type="checkbox"
                name="kitchenAvailable"
                checked={formData.kitchenAvailable}
                onChange={handleChange}
              />
              <span>🍳 Kitchen Available</span>
            </label>

            <label>
              <input
                type="checkbox"
                name="laundryAvailable"
                checked={formData.laundryAvailable}
                onChange={handleChange}
              />
              <span>🧺 Laundry Available</span>
            </label>
          </div>
        </div>

        <div className="form-section">
          <div className="form-section-title">
            <span>04</span>
            <div>
              <h2>Boarding Rules</h2>
              <p>Add important rules students should know before booking.</p>
            </div>
          </div>

          <div className="input-group full-width">
            <label>Rules</label>
            <textarea
              name="rules"
              placeholder="Example: No visitors after 8.00 PM. Keep rooms clean."
              value={formData.rules}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn primary large-btn">
            Save Boarding Place
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBoarding;