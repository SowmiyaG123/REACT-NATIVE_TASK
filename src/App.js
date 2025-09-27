import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./Screens/LoginScreen";
import ScanScreen from "./Screens/ScanScreen";
import LocationScreen from "./Screens/LocationScreen";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/scan" element={<ScanScreen />} />
        <Route path="/location" element={<LocationScreen />} />
      </Routes>
    </Router>
  );
}
