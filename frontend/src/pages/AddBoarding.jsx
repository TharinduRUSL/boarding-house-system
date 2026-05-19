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

    alert("Submit button clicked");

    const boardingData = {
      ...formData,
      monthlyPrice: Number(formData.monthlyPrice),
      advancePayment: Number(formData.advancePayment),
      availableRooms: Number(formData.availableRooms),
      availableBeds: Number(formData.availableBeds),
    };

    try {
      const result = await createBoarding(boardingData);
      console.log("Backend response:", result);

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
    <div className="page">
      <div className="page-header">
        <h1>Add Boarding Place</h1>
        <p>Add boarding details, price, facilities, and safety features.</p>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Boarding title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Full address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <div className="form-row">
          <input
            type="number"
            name="monthlyPrice"
            placeholder="Monthly price"
            value={formData.monthlyPrice}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="advancePayment"
            placeholder="Advance payment"
            value={formData.advancePayment}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
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

        <div className="form-row">
          <input
            type="number"
            name="availableRooms"
            placeholder="Available rooms"
            value={formData.availableRooms}
            onChange={handleChange}
          />

          <input
            type="number"
            name="availableBeds"
            placeholder="Available beds"
            value={formData.availableBeds}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <textarea
          name="rules"
          placeholder="Boarding rules"
          value={formData.rules}
          onChange={handleChange}
        ></textarea>

        <input
          type="text"
          name="contactNumber"
          placeholder="Owner contact number"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />

        <div className="checkbox-section">
          <h3>Facilities and Safety Features</h3>

          <label>
            <input
              type="checkbox"
              name="foodAvailable"
              checked={formData.foodAvailable}
              onChange={handleChange}
            />
            Food Available
          </label>

          <label>
            <input
              type="checkbox"
              name="wifiAvailable"
              checked={formData.wifiAvailable}
              onChange={handleChange}
            />
            Wi-Fi Available
          </label>

          <label>
            <input
              type="checkbox"
              name="parkingAvailable"
              checked={formData.parkingAvailable}
              onChange={handleChange}
            />
            Parking Available
          </label>

          <label>
            <input
              type="checkbox"
              name="cctvAvailable"
              checked={formData.cctvAvailable}
              onChange={handleChange}
            />
            CCTV Available
          </label>

          <label>
            <input
              type="checkbox"
              name="femaleWardenAvailable"
              checked={formData.femaleWardenAvailable}
              onChange={handleChange}
            />
            Female Warden Available
          </label>

          <label>
            <input
              type="checkbox"
              name="secureGateAvailable"
              checked={formData.secureGateAvailable}
              onChange={handleChange}
            />
            Secure Gate Available
          </label>

          <label>
            <input
              type="checkbox"
              name="kitchenAvailable"
              checked={formData.kitchenAvailable}
              onChange={handleChange}
            />
            Kitchen Available
          </label>

          <label>
            <input
              type="checkbox"
              name="laundryAvailable"
              checked={formData.laundryAvailable}
              onChange={handleChange}
            />
            Laundry Available
          </label>
        </div>

        <button type="submit" className="btn primary">
          Add Boarding
        </button>
      </form>
    </div>
  );
}

export default AddBoarding;