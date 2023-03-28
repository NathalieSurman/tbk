import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Product } from "./pages/Product";
import { SignUp } from "./pages/SignUp";


export const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Product} />
          <Route path='/sign-up' component={SignUp} />
        </Routes>
      </Router>
    </>
  );
};
