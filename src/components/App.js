import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NavBar } from "./NavBar";

export const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact />
      </Routes>
    </Router>
  );
};
