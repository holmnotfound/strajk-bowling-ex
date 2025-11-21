

import { useState } from "react";

import { BookingRequest } from "../../types";
import "../BookingForm/BookingForm.css"
import "../../Button.css"
import "../../App.css"
import { useNavigate } from "react-router-dom";
import { validateBooking } from "../../utils/validators";

interface BookingFormProps {
  onSubmit: (data: BookingRequest) => void;
}

function BookingForm({ onSubmit }: BookingFormProps) {
  const navigate = useNavigate();
  const [date, setDate] = useState("2025-11-11");
  const [time, setTime] = useState("18:00");
  const [lanes, setLanes] = useState(1);
  const [people, setPeople] = useState(4);
  const [shoes, setShoes] = useState<number[]>([38, 39, 44, 42]);
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const when = `${date}T${time}`;
  const bookingRequest: BookingRequest = { when, lanes, people, shoes};
    
  const validationError = validateBooking({
    lanes: bookingRequest.lanes,
    people: bookingRequest.people,
    shoeSizes: bookingRequest.shoes
  });

  if (validationError) {
    setError(validationError);
    return; 
  }

  setError(null); 
  onSubmit(bookingRequest);
  navigate("/confirmation", { state: { booking: bookingRequest } });
};

  const updateShoeSize = (index: number, size: number) => {
    const updated = [...shoes];
    updated[index] = size;
    setShoes(updated);
  };

  const removeShoe = (index: number) => {
    setShoes(shoes.filter((_, i) => i !== index));
  };

  const addShoe = () => {
    setShoes([...shoes, 38]);
  };

  return (
    <form className="booking-container" onSubmit={handleSubmit}>
      <h2 className="section-title">WHEN, WHAT & WHO</h2>

      <section className="date-time-wrapper">
        <div className="input-row">
          <section className="floating-input">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="hidden-date-input"
            />
          </section>
        </div>
        <div className="input-row">
          <section className="floating-input">
            <label>Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </section>
        </div>
      </section>

      <div className="input-row lanes">
        <div className="floating-input">
          <label>Number of Lanes</label>
          <input
            type="number"
            min={1}
            value={lanes}
            onChange={(e) => setLanes(Number(e.target.value))}
            required
          />
        </div>
      </div>

      <div className="input-row people">
        <section className="floating-input">
          <label>Number of awesome bowlers</label>
          <input
            type="number"
            min={1}
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
          />
        </section>
      </div>

      <div className="shoe-section">
        <h2 className="section-title">SHOES</h2>

        {shoes.map((size, index) => (
          <div key={index} className="shoe-item">
            <div className="input-prefix-wrapper">
              <input
                type="number"
                value={size}
                onChange={(e) => updateShoeSize(index, Number(e.target.value))}
              />
            </div>
            <button
              type="button"
              className="remove-btn"
              onClick={() => removeShoe(index)}
            >
              –
            </button>
          </div>
        ))}

        <button type="button" className="add-btn" onClick={addShoe}>
          +
        </button>
      </div>
        {error && <div className="form-error">{error}</div>}

      <button className="submit-btn" type="submit">
        STRIIIIIIKE!
      </button>
    </form>
  );
}

export default BookingForm;
