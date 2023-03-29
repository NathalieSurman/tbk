import React from "react";
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/pages/Home";
import { ContactUs } from "./components/pages/ContactUs";
import { Weather } from "./components/pages/Weather";
import { Booknow } from "./components/pages/Booknow";
import { Footer } from "./components/Footer";
import { AboutUs } from "./components/pages/AboutUs";

export const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/booknow" element={<Booknow />} />
          <Route path="/about-us" element={<AboutUs />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
};
