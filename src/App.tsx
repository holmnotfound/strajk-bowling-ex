import './App.css';
import BookingForm from './components/BookingForm/BookingForm';
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

  return(
    <section>
      <section className="logo-wrapper">
        <img src="src/assets/logo.png" alt="logotype" />
      </section>
      <BookingForm onSubmit={handleSubmit} />
    </section>
    
  ) 
}

export default App;

