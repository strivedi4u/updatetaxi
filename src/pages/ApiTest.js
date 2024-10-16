import React, { useEffect, useState } from "react";
import { GoogleMap, DirectionsService, DirectionsRenderer, LoadScript } from "@react-google-maps/api";
import axios from 'axios';

const ApiTest = () => {
  const [response, setResponse] = useState(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [startLocation] = useState('Gurugram, Haryana');
  const [endLocation] = useState('Chaudhary Charan Singh International Airport, Kanpur');
  const [waypoints] = useState([
    { location: "New Delhi, India", stopover: true },
    { location: "Agra, India", stopover: true }
  ]);

  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 28.7041,
    lng: 77.1025
  };

  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === 'OK') {
        setResponse(response);
        setDistance(response.routes[0].legs.reduce((acc, leg) => acc + leg.distance.value, 0) / 1000); // Distance in km
        setDuration(response.routes[0].legs.reduce((acc, leg) => acc + leg.duration.value, 0) / 3600); // Duration in hours
      } else {
        console.error('Error fetching directions:', response);
      }
    }
  };

  return (
    <div>
      <h1>Taxi Rental Route Planner</h1>
      <div>
        <p><strong>Start Location:</strong> {startLocation}</p>
        <p><strong>End Location:</strong> {endLocation}</p>
        {distance && <p><strong>Distance:</strong> {distance.toFixed(2)} km</p>}
        {duration && <p><strong>Duration:</strong> {duration.toFixed(2)} hours</p>}
      </div>
      
      <LoadScript googleMapsApiKey="AIzaSyBxIaW4wjjG6-iDA5Jonz0LshWXvn14eEA">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={6}
        >
          { /* Directions Service: Computes directions between start and end with waypoints */ }
          <DirectionsService
            options={{
              origin: startLocation,
              destination: endLocation,
              travelMode: 'DRIVING',
              waypoints: waypoints
            }}
            callback={directionsCallback}
          />

          { /* Directions Renderer: Displays the computed directions on the map */ }
          {response && (
            <DirectionsRenderer
              options={{
                directions: response
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default ApiTest;
