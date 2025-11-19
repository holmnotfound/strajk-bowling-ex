/*import './App.css';
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

export default App;*/


// App.tsx
import './App.css';
import BookingForm from './components/BookingForm/BookingForm';
import ConfirmationPage from './pages/ConfirmationPage';
import { BookingRequest} from './types';
import { getApiKey, createBooking } from './api/api';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function BookingFormWrapper() {
  const navigate = useNavigate();

  const handleSubmit = async (data: BookingRequest) => {
    try {
      const apiKey = await getApiKey();
      const response = await createBooking(data, apiKey);
      console.log("Booking response:", response);

      // navigera till confirmation-sidan med state
      navigate("/confirmation", { state: { booking: response.bookingDetails } });
    } catch (err) {
      console.error("Booking error:", err);
    }
  };

  return (
    <section>
      <section className="logo-wrapper">
        <img src="src/assets/logo.png" alt="logotype" />
      </section>
      <BookingForm onSubmit={handleSubmit} />
    </section>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookingFormWrapper />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;



