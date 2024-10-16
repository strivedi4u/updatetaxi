// src/components/Home.js
import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import '../assets/css/welcome.css';
const Welcome = () => {
    const typingRef = useRef(null);
    useEffect(() => {
      const typed = new Typed(typingRef.current, {
        strings: [
            "Book Your Taxi in Minutes",
            "Ride Comfortably, Anytime, Anywhere",
            "Safe, Affordable, and Fast Taxi Rentals",
            "Taxi Rentals for All Your Needs",
            "Your Ride, Your Way"
          ],
        typeSpeed: 280,
        backSpeed: 60,
        loop: true
      });
      return () => {
        typed.destroy();
      };
    }, []);
    return (
        <>
    <header className="welcome">
        <div className="overlay">
            <div className="content">
                <h1 className='typing'><span ref={typingRef}></span></h1>
                <h2 className="text2">Taxi Rental System</h2>
                <div className="buttons">
                    <a href="#" className="btn learn-more">Guest Booking</a>
                    <a href="/taxi" className="btn register-now">MSIL Employee Boooking</a>
                </div>
            </div>
        </div>
    </header>
        </>
    );
};

export default Welcome;
