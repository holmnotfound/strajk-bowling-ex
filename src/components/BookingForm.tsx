/*import React, { useState } from 'react';
import { BookingRequest, BookingResponse} from "../../src/types";
import { getApiKey, createBooking } from '../../src/api/api';

const BookingForm: React.FC = () => {
  const [response, setResponse] = useState<BookingResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleBooking = async () => {
    setLoading(true);

    try {
      const apiKey = await getApiKey();
      console.log("Api key:", apiKey)

      const booking: BookingRequest = {
        when: '2022-11-11T18:00',
        lanes: 1,
        people: 4,
        shoes: [38, 39, 44, 43],
      };

      console.log("booking req:", booking)

      const res = await createBooking(booking, apiKey);

      console.log("booking res:", res)
      setResponse(res);
    } catch (err) {
      console.error(err);
      alert('Kunde inte skapa bokning');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleBooking} disabled={loading}>
        {loading ? 'Skickar...' : 'Boka'}
      </button>

      {response && (
        <div>
          <h3>Bokning skapad!</h3>
          <p>ID: {response.id}</p>
          <p>Price: {response.price} SEK</p>
          <p>Active: {response.active ? 'Ja' : 'Nej'}</p>
        </div>
      )}
    </div>
  );
};

export default BookingForm;*/
import { useState } from "react";

import { BookingRequest} from "../../src/types";


interface BookingFormProps {
  onSubmit: (data: BookingRequest) => void;
}

function BookingForm({ onSubmit }: BookingFormProps) {
  const [date, setDate] = useState("2025-11-11");
  const [time, setTime] = useState("18:00");
  const [lanes, setLanes] = useState(1);
  const [people, setPeople] = useState(4);
  const [shoes, setShoes] = useState<number[]>([38, 39, 44, 42]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const when = `${date}T${time}`;
    const bookingRequest: BookingRequest = { when, lanes, people, shoes };
    console.log('Form submitted:', bookingRequest);
    onSubmit(bookingRequest);
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
    setShoes([...shoes, 44]);
  };

  return (
    <form className="booking-container" onSubmit={handleSubmit}>
      <h2>WHEN, WHAT & WHO</h2>
      <div>
        <label>Date</label>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      </div>
      <div>
        <label>Time</label>
        <input type="time" value={time} onChange={e => setTime(e.target.value)} />
      </div>
      <div>
        <label>Lanes</label>
        <input type="number" min={1} value={lanes} onChange={e => setLanes(Number(e.target.value))} />
      </div>
      <div>
        <label>People</label>
        <input type="number" min={1} value={people} onChange={e => setPeople(Number(e.target.value))} />
      </div>

      <h2>SHOES</h2>
      {shoes.map((size, index) => (
        <div key={index}>
          <input type="number" value={size} onChange={e => updateShoeSize(index, Number(e.target.value))} />
          <button type="button" onClick={() => removeShoe(index)}>–</button>
        </div>
      ))}
      <button type="button" onClick={addShoe}>+</button>
      <button type="submit">STRIIIIIIKE!</button>
    </form>
  );
}

export default BookingForm;

