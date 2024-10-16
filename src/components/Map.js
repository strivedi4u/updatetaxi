import React, { useState, useCallback, useRef } from 'react';
import { GoogleMap, Marker, DirectionsService, DirectionsRenderer, useLoadScript } from '@react-google-maps/api';
// import 'mapbox-gl/dist/mapbox-gl.css';

// Replace with your own API Key
const GOOGLE_MAPS_API_KEY = 'AIzaSyDqQgcT34Ix_8YMXQ-RA5f2U2d2muT7vIE';

const libraries = ['places'];

const Map = () => {
  const [pickup, setPickup] = useState(null);
  const [destination, setDestination] = useState(null);
  const [directions, setDirections] = useState(null);
  const mapRef = useRef(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const handlePickupChange = (latLng) => {
    setPickup(latLng);
  };

  const handleDestinationChange = (latLng) => {
    setDestination(latLng);
  };

  const calculateRoute = () => {
    if (pickup && destination) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: pickup,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result);
            if (mapRef.current) {
              mapRef.current.fitBounds(result.routes[0].bounds);
            }
          } else {
            console.error('Directions request failed due to ' + status);
          }
        }
      );
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <h1>Google Maps with Pickup and Destination</h1>
      <GoogleMap
        id="map"
        mapContainerStyle={{ width: '100vw', height: '100vh' }}
        zoom={10}
        center={{ lat: 20.5937, lng: 78.9629 }} // Center of India
        onLoad={onMapLoad}
      >
        {pickup && <Marker position={pickup} label="Pickup" />}
        {destination && <Marker position={destination} label="Destination" />}
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
      <div>
        <input
          type="text"
          placeholder="Search for pickup location"
          onBlur={(e) => handlePickupChange({ lat: 20.5937, lng: 78.9629 })} // Replace with actual search logic
        />
        <input
          type="text"
          placeholder="Search for destination"
          onBlur={(e) => handleDestinationChange({ lat: 20.5937, lng: 78.9629 })} // Replace with actual search logic
        />
        <button onClick={calculateRoute}>Calculate Route</button>
      </div>
    </div>
  );
};

export default Map;
