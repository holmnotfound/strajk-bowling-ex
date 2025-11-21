
import './App.css';
import BookingForm from './components/BookingForm/BookingForm';
import ConfirmationPage from './pages/ConfirmationPage';
import HamburgerMenu from './components/Navbar/Navbar';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import { BookingRequest } from './types';
import { getApiKey, createBooking } from './api/api';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BookingFormWrapper() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("loading");
    } else {
      document.body.classList.remove("loading");
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [isLoading]);

  if (isLoading) return <LoadingScreen />;

  const handleSubmit = async (data: BookingRequest) => {
    try {
      const apiKey = await getApiKey();
      const response = await createBooking(data, apiKey);

      navigate("/confirmation", { state: { booking: response.bookingDetails } });

    } catch (err: any) {
      console.error("Booking error:", err);
      navigate("/confirmation", {
        state: { error: err.message || "Kunde inte genomföra bokningen. API:et verkar nere just nu!" }
      });
    }
  };

  return (
    <section>
      <section className="logo-wrapper">
        <img src="src/assets/booking.png" alt="logotype" />
      </section>
      <BookingForm onSubmit={handleSubmit} />
    </section>
  );
}

function App() {
  return (
    <Router>
      <HamburgerMenu />
      <Routes>
        <Route path="/" element={<BookingFormWrapper />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;




