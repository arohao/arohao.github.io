import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import BookingSuccess from './pages/BookingSuccess';
import Contact from './pages/Contact';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';

import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/booking-success" element={<BookingSuccess/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about-us" element={<AboutUs />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
