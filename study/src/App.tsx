// App.js
// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import  About  from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Login from "./components/Login";

export default function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 text-white flex gap-6 justify-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/services" className="hover:underline">Services</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}



