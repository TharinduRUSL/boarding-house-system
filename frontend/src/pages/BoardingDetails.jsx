import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBoardingById, createBooking } from "../services/api";

function BoardingDetails() {
  const { id } = useParams();
  const [boarding, setBoarding] = useState(null);

  useEffect(() => {
    loadBoardingDetails();
  }, []);

  const loadBoardingDetails = async () => {
    const data = await getBoardingById(id);
    setBoarding(data);
  };

  const handleBookingRequest = async () => {
    const bookingData = {
      userId: 1,
      boardingId: Number(id),
      bookingDate: new Date().toISOString().split("T")[0],
      message: "I would like to request this boarding place.",
      status: "PENDING",
    };

    try {
      await createBooking(bookingData);
      alert("Booking request sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to send booking request.");
    }
  };

  if (!boarding) {
    return (
      <div className="page">
        <p className="empty-text">Loading boarding details...</p>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="details-container">
        <div
          className={`details-image ${
            boarding.genderType === "GIRLS_ONLY"
              ? "girls-card-image"
              : boarding.genderType === "BOYS_ONLY"
              ? "boys-card-image"
              : "any-card-image"
          }`}
        >
          <span className="details-icon">
            {boarding.genderType === "GIRLS_ONLY"
              ? "👩‍🎓"
              : boarding.genderType === "BOYS_ONLY"
              ? "👨‍🎓"
              : "🏠"}
          </span>
          <h2>{boarding.genderType}</h2>
        </div>

        <div className="details-content">
          <h1>{boarding.title}</h1>
          <p className="location">📍 {boarding.location}</p>
          <p>{boarding.description}</p>

          <div className="details-price">
            Rs. {boarding.monthlyPrice} / month
          </div>

          <div className="details-grid">
            <div>
              <strong>Address:</strong>
              <p>{boarding.address}</p>
            </div>

            <div>
              <strong>Room Type:</strong>
              <p>{boarding.roomType}</p>
            </div>

            <div>
              <strong>Available Rooms:</strong>
              <p>{boarding.availableRooms}</p>
            </div>

            <div>
              <strong>Available Beds:</strong>
              <p>{boarding.availableBeds}</p>
            </div>

            <div>
              <strong>Advance Payment:</strong>
              <p>Rs. {boarding.advancePayment}</p>
            </div>

            <div>
              <strong>Owner Contact:</strong>
              <p>{boarding.contactNumber}</p>
            </div>
          </div>

          <h3>Facilities and Safety Features</h3>

          <div className="facility-list details-facilities">
            {boarding.wifiAvailable && <span>Wi-Fi</span>}
            {boarding.foodAvailable && <span>Food Available</span>}
            {boarding.parkingAvailable && <span>Parking</span>}
            {boarding.cctvAvailable && <span>CCTV</span>}
            {boarding.femaleWardenAvailable && <span>Female Warden</span>}
            {boarding.secureGateAvailable && <span>Secure Gate</span>}
            {boarding.kitchenAvailable && <span>Kitchen</span>}
            {boarding.laundryAvailable && <span>Laundry</span>}
          </div>

          <h3>Rules</h3>
          <p className="rules-box">{boarding.rules}</p>

          <button className="btn primary" onClick={handleBookingRequest}>
            Request Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default BoardingDetails;