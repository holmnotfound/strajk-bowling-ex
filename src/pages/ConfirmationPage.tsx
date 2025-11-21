
import "./ConfirmationPage.css";
import "../App.css";
import { useLocation, useNavigate } from "react-router-dom";
import { formatBookingDate, formatBookingId } from "../utils/formatters";
import { BookingConfirmationData } from "../types";



function ConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as BookingConfirmationData;
  const booking = state?.booking;
  const error = state?.error;

  if (error) {
    return (
      <section className="confirmation-container">
        <div className="error-message">
          <p>{error}. Try again in a few minutes!</p>
          <button className="back-btn" onClick={() => navigate("/")}>
            GO BACK
          </button>
        </div>
      </section>
    );
  }

  if (!booking) {
    return (
      <section className="confirmation-container">
        <p>Loading Booking! Hang Tight!</p>
      </section>
    );
  }

  return (
    <section className="confirmation-container">
      <section className="logo-wrapper">
        <img src="src/assets/see-you-soon.png" alt="logotype" />
      </section>

      <h2 className="section-title">BOOKING DETAILS</h2>

      <div className="details-box">
        <div className="detail-row when">
          <section className="floating-details">
            <section className="detail-label">When</section>
            <section className="detail-input">
              {formatBookingDate(booking.when)}
            </section>
          </section>
        </div>

        <div className="detail-row lanes">
          <section className="floating-details">
            <section className="detail-label">Lanes</section>
            <section className="detail-input">{booking.lanes} lane</section>
          </section>
        </div>

        <div className="detail-row people">
          <section className="floating-details">
            <section className="detail-label">Who</section>
            <section className="detail-input">{booking.people} pers</section>
          </section>
        </div>

        <div className="detail-row id">
          <section className="floating-details">
            <section className="detail-label">Booking Number</section>
            <section className="detail-input">
              {booking.bookingId
                ? formatBookingId(booking.bookingId)
                : "N/A"}
            </section>
          </section>
        </div>

        <div className="detail-row price">
          <section className="floating-details">
            <section className="detail-label">Total</section>
            <section className="detail-input">{booking.price} SEK</section>
          </section>
        </div>
      </div>

      <button className="back-btn" onClick={() => navigate("/")}>
        SWEET, LET'S GO!
      </button>
    </section>
  );
}

export default ConfirmationPage;



