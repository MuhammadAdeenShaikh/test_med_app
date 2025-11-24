import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './navbar/navbar';
import Landing_Page from './Landing_Page/LandingPage';
import Login from "./Login/Login";
import SignUp from "./Sign_up/SignUp";  // Change 'Sign_Up' to 'Sign_up'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing_Page />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/instant-consultation" element={<InstantConsultation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;