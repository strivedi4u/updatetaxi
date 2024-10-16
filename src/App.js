import React, { useEffect } from 'react';
import './assets/css/style.css';
import './assets/css/animated.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import TaxiRentalSystem from './pages/ApiTest';
import PendingRequest from './pages/PendingRequests';
import Map from './components/Map';
import Form from './components/Form';
import Request from './components/Request';
import View from './pages/View';
import View1 from './pages/View1';
import Profile from './pages/Profile';
import GBooking from './pages/GBooking';
import MBooking from './pages/MBooking';
import VRequest from './pages/VRequest';




import ViewTaxiMaster from './pages/ViewTaxiMaster';

import { WOW } from 'wowjs';
import 'animate.css'; // Import the animation CSS
import TestLogin from './pages/TestLogin';
import MasterLandingPage from './pages/MasterLandingPage';
import MasterInputTaxi from './pages/MasterInputTaxi';


const App = () => {
  useEffect(() => {
    const wow = new WOW({
      boxClass: 'wow', // Class for WOW.js to apply animations
      animateClass: 'animated', // Class for animations
      offset: 0, // Offset to trigger animations
      mobile: true, // Enable animations on mobile
      live: true, // Continuously check for newly added elements
    });
    wow.init();
  }, []);
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes >
          {/* <Route exact path="/" element={<Map />} /> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/gbook" element={<GBooking />} />
          <Route exact path="/mbook" element={<MBooking />} />
          <Route exact path="/vrequest" element={<VRequest />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/api" element={<TaxiRentalSystem />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/request" element={<Request />} />
          <Route exact path="/view" element={<View />} />
          <Route exact path="/view1" element={<View1 />} />
          <Route exact path="/login" element={<TestLogin />} />

          {/* 
          ////////////////// Master Routing */}

          <Route exact path="/master" element={<MasterLandingPage />} />
          <Route exact path="/masterInputTaxi" element={<MasterInputTaxi />} />
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;