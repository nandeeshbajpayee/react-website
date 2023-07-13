import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/pages/Home";
import Aboutus from "./components/pages/AboutUs";
import Contactus from "./components/pages/ContactUs";
import Navbar from "./components/inc/Navbar";
import './App.css'
import Footer from "./components/inc/Footer";
import Services from "./components/pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
