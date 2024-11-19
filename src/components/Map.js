import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";

const Map = ({ setPickup, setDestination, setMapStatus, setAproxKM, setWaypoint }) => {
  const mapRef = useRef(null);
  const pickupInputRef = useRef(null); // Ref for pickup input
  const destinationInputRef = useRef(null); // Ref for destination input
  const [map, setMap] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const [pickup, setPickupState] = useState("New Delhi, India"); // Default value for Pickup
  const [destination, setDestinationState] = useState("Agra, India"); // Default value for Destination
  const [waypoints, setWaypoints] = useState([]); // Array of waypoints
  const [totalDistance, setTotalDistance] = useState(0); // Total distance in km


  const addWaypoint = () => {

    setWaypoints([...waypoints, { value: "", ref: React.createRef() }]);

  };



  const calculateRoute = () => {
    console.log("calculateRoute clicked");
    console.log(totalDistance);
    console.log(waypoints);
setPickup(pickup); setDestination(destination); setAproxKM(totalDistance);
console.log('Pickup', pickup);

const waypointsString = waypoints.map(wp => wp.value).join(", ");
console.log('waypointsString', waypointsString);
setWaypoint(waypointsString);
    if (!pickup || !destination || !directionsService || !directionsRenderer) {

      alert("Please enter both pickup and destination!");

      return;

    }



    const waypointLocations = waypoints

      .filter((wp) => wp.value)

      .map((wp) => ({ location: wp.value, stopover: true }));



    directionsService.route(

      {

        origin: pickup,

        destination: destination,

        waypoints: waypointLocations,

        travelMode: window.google.maps.TravelMode.DRIVING,

      },

      (result, status) => {

        if (status === window.google.maps.DirectionsStatus.OK) {

          directionsRenderer.setDirections(result);



          // Calculate total distance

          const totalDistance = result.routes[0].legs.reduce(

            (sum, leg) => sum + leg.distance.value,

            0

          );

          setTotalDistance((totalDistance / 1000).toFixed(2)); // Convert to km

        } else {

          alert("Could not calculate route: " + status);

        }

      }

    );

  };



  useEffect(() => {

    loadGoogleMapsScript(() => initializeMap());

  }, []);



  useEffect(() => {

    // Add autocomplete to each new waypoint field

    waypoints.forEach((wp) => {

      if (wp.ref.current && !wp.ref.current.autocomplete) {

        const options = { componentRestrictions: { country: "in" } };

        const autocomplete = new window.google.maps.places.Autocomplete(

          wp.ref.current,

          options

        );



        autocomplete.addListener("place_changed", () => {

          const place = autocomplete.getPlace();

          if (place && place.formatted_address) {

            wp.value = place.formatted_address;

            setWaypoints([...waypoints]); // Trigger re-render

          }

        });



        wp.ref.current.autocomplete = autocomplete; // Prevent duplicate initialization

      }

    });

  }, [waypoints]);



  const handleHideMap = () => {
    setAproxKM(totalDistance);
    setMapStatus(false); // Correctly using the setMapStatus function passed as a prop

  };







  const loadGoogleMapsScript = (callback) => {
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD2JT4dMG7dL0UvuXdZg5ynsfEjikTiQ30&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = callback;
      document.body.appendChild(script);
    } else {
      callback();
    }
  };

  const initializeMap = () => {
    // Initialize Map
    const mapOptions = {
      center: { lat: 28.6139, lng: 77.209 },
      zoom: 10,
    };
    const mapInstance = new window.google.maps.Map(mapRef.current, mapOptions);

    setMap(mapInstance);

    // Initialize Directions Service & Renderer
    const service = new window.google.maps.DirectionsService();
    const renderer = new window.google.maps.DirectionsRenderer();
    renderer.setMap(mapInstance);

    setDirectionsService(service);
    setDirectionsRenderer(renderer);

    // Autocomplete for Pickup and Destination
    const options = { componentRestrictions: { country: "in" } };
    if (pickupInputRef.current instanceof HTMLInputElement) {
      const pickupAutocomplete = new window.google.maps.places.Autocomplete(
        pickupInputRef.current, // Correct ref for pickup input
        options
      );
      pickupAutocomplete.addListener("place_changed", () => {
        const place = pickupAutocomplete.getPlace();
        if (place && place.formatted_address) {
          setPickup(place.formatted_address);
        }
      });
    }

    if (destinationInputRef.current instanceof HTMLInputElement) {
      const destinationAutocomplete = new window.google.maps.places.Autocomplete(
        destinationInputRef.current, // Correct ref for destination input
        options
      );
      destinationAutocomplete.addListener("place_changed", () => {
        const place = destinationAutocomplete.getPlace();
        if (place && place.formatted_address) {
          setDestination(place.formatted_address);
        }
      });
    }
  };

  useEffect(() => {
    loadGoogleMapsScript(() => initializeMap());
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="expense-form">
          <div className="form-container" style={{ zIndex: "+99", position: "" }}>
            <div className="left-side">
              <form>
                <div className="form-test wow fadeIn" data-wow-duration="2s" data-wow-delay="1.6s">
                  <div ref={mapRef} style={{ width: "100%", height: "400px", border: "1px solid black" }}></div>
                </div>
              </form>
            </div>

            <div className="right-side">
              <form>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "left",
                    marginBottom: "20px",
                    padding: "5px",
                    backgroundColor: "#3f51b5",
                    color: "#fff",
                    borderRadius: "0px",
                    fontWeight: "bold",
                    fontFamily: "Arial, sans-serif",
                    letterSpacing: "1px",
                  }}
                >
                  &nbsp;&nbsp;&nbsp;Travel Details
                </Typography>

                <div className="form-test wow fadeIn" data-wow-duration="2s" data-wow-delay="1.6s">
                  <div className="form-group-t">
                    <label>Pickup Point *</label>
                    <input
                      ref={pickupInputRef} // Use pickupInputRef here
                      type="text"
                      className="input-t"
                      placeholder="Enter Pickup Location"
                      value={pickup}
                      onChange={(e) => {
                        setPickupState(e.target.value);
                        setPickup(e.target.value); // Pass the value to parent
                      }}
                    />
                  </div>
                  <div className="form-group-t">
                    <label>Destination Point *</label>
                    <input
                      ref={destinationInputRef} // Use destinationInputRef here
                      type="text"
                      className="input-t"
                      placeholder="Enter Destination Location"
                      value={destination}
                      onChange={(e) => {
                        setDestinationState(e.target.value);
                        setDestination(e.target.value); // Pass the value to parent
                      }}
                    />
                  </div>
                </div>

                <div className="form-test wow fadeIn" data-wow-duration="2s" data-wow-delay="1.4s">
                  <div className="form-group-t">
                    <label>Approx KM *</label>
                    <input
                      type="number"
                      className="input-t"
                      placeholder="e.g. 20"
                      value={totalDistance}
                      required
                      readOnly
                    />
                  </div>
                  <div className="form-group-t">
                    <label>Waypoints</label>
                    {/* Dynamic Waypoints */}
                    {waypoints.map((wp, index) => (
                      <div key={index} style={{ marginBottom: "10px" }}>
                        <input
                          ref={wp.ref}
                          type="text"
                          className="input-t"
                          placeholder={`Enter Waypoint ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="button-group wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                  <button
                    type="button"
                    id="clearButton"
                    onClick={addWaypoint}
                    style={{
                      backgroundColor: "white",
                      border: "2px solid #FFD700",
                      color: "#333",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      boxShadow: "none",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = "#f9f9f9"}
                    onMouseOut={(e) => e.target.style.backgroundColor = "white"}
                  >
                    <i className="material-icons" style={{ fontSize: 18, marginRight: "5px" }}>
                      add_location
                    </i>
                    Add Waypoint
                  </button>
                </div>

                <div className="form-test wow fadeIn" data-wow-duration="2s" data-wow-delay="1.6s">
                  <div className="form-group-t">
                    <button
                      type="button"
                      onClick={calculateRoute}
                      style={{
                        backgroundColor: "#3f51b5",
                        color: "#fff",
                        borderRadius: "3px",
                        padding: "10px 20px",
                        cursor: "pointer",
                        width: "100%",
                        transition: "background-color 0.3s ease",
                      }}
                    >
                      Calculate Route
                    </button>
                  </div>
                </div>
                <div className="map-footer">

                  <button

                    onClick={handleHideMap}

                    style={{

                      backgroundColor: "red",

                      color: "#fff",

                      padding: "10px 20px",

                      border: "none",

                      borderRadius: "5px",

                      cursor: "pointer",

                      position: "",

                      top: "10px",

                      right: "10px",

                    }}

                  >

                    Hide Map

                  </button>

                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
