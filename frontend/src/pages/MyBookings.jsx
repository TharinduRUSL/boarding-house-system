import { useEffect, useState } from "react";
import { getBookingsByUserId } from "../services/api";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadMyBookings();
  }, []);

  const loadMyBookings = async () => {
    try {
      const data = await getBookingsByUserId(1);
      setBookings(data);
    } catch (error) {
      console.error("Error loading bookings:", error);
    }
  };

  const getStatusClass = (status) => {
    if (status === "APPROVED") return "status-approved";
    if (status === "REJECTED") return "status-rejected";
    if (status === "CANCELLED") return "status-cancelled";
    return "status-pending";
  };

  return (
    <div className="my-bookings-page">
      <section className="my-bookings-hero">
        <div>
          <span className="premium-badge">📋 My Booking Requests</span>
          <h1>Track Your Boarding Booking Requests</h1>
          <p>
            View your submitted booking requests and check whether they are
            pending, approved, rejected, or cancelled.
          </p>
        </div>

        <div className="booking-summary-card">
          <div className="summary-icon">📩</div>
          <h3>{bookings.length}</h3>
          <p>Total Requests</p>
        </div>
      </section>

      {bookings.length === 0 ? (
        <div className="booking-empty-state">
          <div>🏘️</div>
          <h3>No booking requests yet</h3>
          <p>
            You have not requested any boarding place yet. Go to the Boardings
            page and send a booking request.
          </p>
          <a href="/boardings" className="btn primary">
            Find Boarding
          </a>
        </div>
      ) : (
        <div className="booking-table-card">
          <div className="booking-table-header">
            <h2>Your Booking Requests</h2>
            <button className="btn secondary" onClick={loadMyBookings}>
              Refresh
            </button>
          </div>

          <div className="booking-list">
            {bookings.map((booking) => (
              <div className="booking-item" key={booking.id}>
                <div className="booking-icon-box">🏠</div>

                <div className="booking-info">
                  <h3>Boarding ID: {booking.boardingId}</h3>
                  <p>{booking.message}</p>

                  <div className="booking-meta">
                    <span>📅 {booking.bookingDate}</span>
                    <span>👤 User ID: {booking.userId}</span>
                  </div>
                </div>

                <div className="booking-status-box">
                  <span className={`booking-status ${getStatusClass(booking.status)}`}>
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MyBookings;