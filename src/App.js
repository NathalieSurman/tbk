import React from "react";
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/pages/Home";
import { Services } from "./components/pages/Services";
import { Product } from "./components/pages/Product";
import { SignUp } from "./components/pages/SignUp";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Product />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
