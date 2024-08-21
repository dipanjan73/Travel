import React from 'react'
import Destinations from './components/Page/Destinations/Destinations';
import Home from './components/Home/Home';
import DestinationDetail from './components/Page/Destinations/DestinationDetail';
import BookingPage from './components/Page/Destinations/BookingPage';
import NavBar from './components/NavBar/NavBar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About/About ';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact'


const Routing = () => {
    return (
        <Router>
          <div>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/destinations/:id" element={<DestinationDetail />} />
              <Route path="/book/:id" element={<BookingPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} /> {/* Add this line */}
            </Routes>
            <Footer/>
          </div>
        </Router>
      );
}

export default Routing
