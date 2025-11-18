import './App.css';
import BookingForm from './components/BookingForm';
import { BookingRequest } from './types';
import { getApiKey, createBooking } from './api/api';

function App() {
  const handleSubmit = async (data: BookingRequest) => {
    console.log("Data från form:", data);
    try {
      const apiKey = await getApiKey();
      const response = await createBooking(data, apiKey);
      console.log("Booking response:", response);
    } catch (err) {
      console.error("Booking error:", err);
    }
  };

  return <BookingForm onSubmit={handleSubmit} />;
}

export default App;

