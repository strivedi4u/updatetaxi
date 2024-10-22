import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Typography from '@mui/material/Typography';
const PassengerDetails = ({ index, passenger, handleDelete, handleChange }) => (
    <div>
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
        &nbsp;&nbsp;&nbsp;Passenger Details {index + 1}
        {index >= 2 && (
          <i
            className="material-icons"
            onClick={() => handleDelete(index)}
            style={{ fontSize: 18, float: 'right', marginRight: 10 }}
          >
            delete
          </i>
        )}
      </Typography>
      <div className="form-test">
        <div className="form-group-t">
          <label>Passenger Staff Id *</label>
          <input
            type="number"
            className="input-t"
            placeholder="eg. 598801"
            value={passenger.staffId}
            onChange={(e) => handleChange(index, 'staffId', e.target.value)}
            required
          />
        </div>
        <div className="form-group-t">
          <label>Passenger Name *</label>
          <input
            type="text"
            className="input-t"
            placeholder="e.g. Shashank Trivedi"
            value={passenger.name}
            onChange={(e) => handleChange(index, 'name', e.target.value)}
            required
          />
        </div>
      </div>
    </div>
  );
const BookingForm = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [passengers, setPassengers] = useState([]);
  const [travelDetails, setTravelDetails] = useState({ pickup: '', destination: '' });
  
  // Use the useNavigate hook instead of navigate directly
  const navigate = useNavigate();

  const handleSetSection = (section) => {
    setCurrentSection(section);
  };

  const handleAddPassenger = () => {
    if (passengers.length < 4) {
      setPassengers([...passengers, { staffId: '', name: '' }]);
    }
    if (passengers.length === 2) setCurrentSection(4);
    else setCurrentSection(3);
  };

  const handleDeletePassenger = (index) => {
    setPassengers(passengers.filter((_, i) => i !== index));
    if (passengers.length === 1) setCurrentSection(2);
  };

  const handlePassengerChange = (index, key, value) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index][key] = value;
    setPassengers(updatedPassengers);
  };

  const handleNextSection = () => {
    setCurrentSection(currentSection + 1);
  };

  const handlePreviousSection = () => {
    setCurrentSection(currentSection - 1);
  };

  const handleSubmit = () => {
    swal("Congratulations 🎉", "Taxi has been booked successfully", "success");
    // Use navigate from useNavigate hook
    navigate("/view");
  };

  const isSectionComplete = (section) => {
    if (section === 1) return travelDetails.pickup && travelDetails.destination;
    if (section === 2) return passengers.length > 0;
    return passengers.every(p => p.staffId && p.name);
  };

  const getButtonStyle = (isComplete) => ({
    backgroundColor: isComplete ? '#28a745' : '#F6E871',
    border: '2px solid #FFD700',
    color: isComplete ? 'white' : 'black',
    padding: '10px 20px',
    borderRadius: '5px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  });

  return (
    <div className="main-banner wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.25s">
      <div className="container">
        <div className="row">
          <div className="expense-form">
            <div className="form-container">

              {/* Section 1: Travel Details */}
              {currentSection === 1 && (
                <form>
                  <div className="form-test wow fadeIn" data-wow-duration="2s" data-wow-delay="1.6s">
                    <div className="form-group-t">
                      <label>Pickup Point *</label>
                      <input
                        type="text"
                        className="input-t"
                        placeholder="e.g. New Delhi"
                        value={travelDetails.pickup}
                        onChange={(e) => setTravelDetails({ ...travelDetails, pickup: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group-t">
                      <label>Destination Point *</label>
                      <input
                        type="text"
                        className="input-t"
                        placeholder="e.g. Gurugram"
                        value={travelDetails.destination}
                        onChange={(e) => setTravelDetails({ ...travelDetails, destination: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="button-group wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                    <button
                      type="button"
                      id="saveNextButton"
                      onClick={handleNextSection}
                      style={getButtonStyle(isSectionComplete(1))}
                      disabled={!isSectionComplete(1)}
                    >
                      Save & Next <i className="material-icons" style={{ fontSize: 12 }}>send</i>
                    </button>
                  </div>
                </form>
              )}

              {/* Section 3 and 4: Passenger Details */}
              {(currentSection === 3 || currentSection === 4) && (
                <form>
                  {passengers.map((passenger, index) => (
                    <PassengerDetails
                      key={index}
                      index={index}
                      passenger={passenger}
                      handleDelete={handleDeletePassenger}
                      handleChange={handlePassengerChange}
                    />
                  ))}
                  <div className="button-group wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                    <button
                      type="button"
                      id="backButton"
                      onClick={handlePreviousSection}
                      style={{
                        backgroundColor: 'white',
                        border: '2px solid #FFD700',
                        color: '#333',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease'
                      }}
                    >
                      <i className="material-icons" style={{ fontSize: 18 }}>arrow_back</i> Back
                    </button>
                    {passengers.length < 4 && (
                      <button
                        type="button"
                        onClick={handleAddPassenger}
                        style={getButtonStyle(true)}
                      >
                        Add Passenger <i className="material-icons" style={{ fontSize: 12 }}>person_add</i>
                      </button>
                    )}
                    <button
                      type="button"
                      id="submitButton"
                      onClick={handleSubmit}
                      style={getButtonStyle(isSectionComplete(3))}
                      disabled={!isSectionComplete(3)}
                    >
                      Submit <i className="material-icons" style={{ fontSize: 12 }}>task_alt</i>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
