/*import { useLocation, useNavigate } from "react-router-dom";
import { BookingDetails } from "../types";
import "./ConfirmationPage.css";
import "../App.css"

interface LocationState {
  booking: BookingDetails;
  error: string;
};


function formatBookingDate(isoString: string) {
  const date = new Date(isoString);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  return new Intl.DateTimeFormat("sv-SE", options).format(date);
}

function formatBookingId(id: string){
    return id.slice(0, 8)
}

function ConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const {booking, error} = (location.state as LocationState);

  if (!booking) return <p>Loading Booking</p>;


  // Om det finns ett error
  if (error) {
    return (
      <section className="confirmation-container">
        <section className="logo-wrapper">
          <img src="src/assets/logo-see-you-soon.png" alt="logotype" />
        </section>

        <div className="error-message">
          <p>{error}</p>
        </div>

        <button className="back-btn" onClick={() => navigate("/")}>
          BACK TO FORM
        </button>
      </section>
    );
  }

  return (
    <section className="confirmation-container">
      <section className="logo-wrapper">
        <img src="src/assets/logo-see-you-soon.png" alt="logotype" />
      </section>

      <h2 className="section-title">BOOKING DETAILS</h2>

      <div className="details-box">
        <div className="detail-row when">
          <section className="floating-details">
            <section className="detail-label">When</section>
            <section className="detail-input">{formatBookingDate(booking.when)}</section>
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
            <section className="detail-input">{formatBookingId(booking.bookingId)}</section>
          </section>
        </div>

        <div className="detail-row price">
          <section className="floating-details">
            <section className="detail-label">Total:</section>
            <section className="detail-input">{booking.price} SEK</section>
          </section>
        </div>

      </div>

      <button className="back-btn" onClick={() => navigate("/")}>
        SWEET, LETS GO!
      </button>
    </section>
  );
}

export default ConfirmationPage;*/
import { BookingDetails } from "../types";
import "./ConfirmationPage.css";
import "../App.css";
import { useLocation, useNavigate } from "react-router-dom";
import { formatBookingDate, formatBookingId } from "../utils/formatters";

interface LocationState {
  booking: BookingDetails; //BookingDetails
  error: string;
}

function ConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;
  const booking = state?.booking;
  const error = state?.error;

  return (
    <section className="confirmation-container">
      {error ? (
        <div className="error-message">
          <p>{error}. Try again in a few minutes! </p>
          <button className="back-btn" onClick={() => navigate("/")}>
            GO BACK
          </button>
        </div>
      ) : booking ? (
        <>
          <section className="logo-wrapper">
            <img src="src/assets/logo-see-you-soon.png" alt="logotype" />
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
                <section className="detail-input">
                  {booking.people} pers
                </section>
              </section>
            </div>

            <div className="detail-row id">
              <section className="floating-details">
                <section className="detail-label">Booking Number</section>
                <section className="detail-input">
                  {formatBookingId(booking.bookingId)}
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
            SWEET, LETS GO!
          </button>
        </>
      ) : (
        <p>Loading Booking! Hang Tight!</p>
      )}
    </section>
  );
}

export default ConfirmationPage;
