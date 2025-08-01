import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import BookNow from './Components/BookNow/BookNow'; // Import the BookNow component
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer'; // Import the Footer component
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Service from './Components/Service/Service';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Replace Switch with Routes */}
        <Route exact path="/" element={<Home />} /> {/* Replace component with element */}
        <Route path="/about" element={<About />} /> {/* Replace component with element */}
        <Route path="/services" element={<Service />} /> {/* Replace component with element */}
        <Route path="/contact" element={<Contact />} /> {/* Replace component with element */}
        <Route path="/booknow" element={<BookNow />} /> {/* Replace component with element */}
      </Routes>
      <Footer /> {/* Include the Footer component */}
    </Router>
  );
}

export default App;