import React, { useState, useEffect } from 'react';
import { decryptData } from '../utils/encryption';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import '../assets/css/form.css';
import taxi from '../assets/images/taxi.png';

const TestBookingForm = ({ emplId }, {emplName}) => {
    const navigate = useNavigate();

    const [passengers, setPassengers] = useState([]);
    console.log(passengers)
    console.log(passengers.length)
    const [currentSection, setCurrentSection] = useState(1);
    var [selectedPassengerIndex, setSelectedPassengerIndex] = useState(null);
    const [passengerDetails, setPassengerDetails] = useState({});
    const addPassenger = () => {
        setPassengers(prevPassengers => [
            ...prevPassengers,
            { passengerNumber: prevPassengers.length + 1, details: {} }
        ]);
        setSelectedPassengerIndex(1);
        
        ++selectedPassengerIndex;
    };

    const deletePassenger = (index) => {
        const updatedPassengers = passengers.filter((_, i) => i !== index);
        setPassengers(updatedPassengers);
        if (selectedPassengerIndex === index) {
            setSelectedPassengerIndex(null); // Clear selected passenger if deleted
        }
    };

    const handlePassengerDetailChange = (index, e) => {
        const { name, value } = e.target;
        setPassengerDetails(prevDetails => ({
            ...prevDetails,
            [index]: {
                ...prevDetails[index],
                [name]: value
            }
        }));
    };
    const handleSetSection = (e) => {
        // e.preventDefault(); 
        setCurrentSection(e);
    };



  

    var [statusCount, setStatusCount] = useState(0);

    const handleStatusCount = (e) => {
        console.log(statusCount);
        console.log("Before");
        setStatusCount(++statusCount);
        console.log("After");
        console.log(statusCount);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        // setFormData({ ...formData, [id]: value });
    };

    const handleNextSection = (e) => {
        setCurrentSection(currentSection + 1);
        handleStatusCount();
    };

    

    const handleSubmit = () => {
        swal("Congratulations 🎉", "Taxi has been booked successfully", "success");
        navigate("/view");
    };


    return (
        <div className="main-banner wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.25s">
            <div className="container">
                <div className="row">


                    <div className="expense-form">
                        <div className="title-form wow fadeInDown" data-wow-duration="2s" data-wow-delay="2.4s">
                            <span className="span-form"> <h4>Self Taxi Booking </h4></span>
                            <span className='span-form'>
                                <span className='span1' onClick={() => handleSetSection(1)}>
                                    <i className="material-icons">person</i>&nbsp; Personal Details &nbsp;
                                    <i className="material-icons" style={{ fontSize: 15 }}>arrow_forward_ios</i>
                                </span>
                                <span className='span2' onClick={() => handleSetSection(2)}>  <i className="material-icons">directions_car</i>&nbsp; Travel Details &nbsp;
                                    <i className="material-icons" style={{ fontSize: 15 }}>arrow_forward_ios</i></span>
                                <span className='dropdown span3' onClick={() => handleSetSection(3)}>


                                    {/* <li className="dropdown"> */}
                                    <span
                                        data-toggle="dropdown"
                                        className="dropdown-toggle"

                                    >
                                        <i className="material-icons" >  person_add</i>
                                        <span style={{ marginTop: 3.5 }}>   &nbsp; Passenger Details &nbsp; </span><span className="caret" style={{ marginTop: 11 }}></span> &nbsp;
                                    </span>

                                    <ul className="dropdown-menu" style={{ marginLeft: 12 }}>
                                        <li  onClick={addPassenger}><a style={{ display: 'flex' }}> <span style={{ marginTop: 0, fontSize: 12 }}>Add Passenger &nbsp;&nbsp; &nbsp; &nbsp;  </span>
                                            <i className="material-icons" style={{ fontSize: 18 }}>  add_circle</i></a></li>


                                        {/* <li className={props.mbooking} ><a href="/mbook" style={{ display: 'flex' }}> <span style={{ marginTop: 0, marginRight: -2, fontSize: 12 }}>Passenger : 1&nbsp;&nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  </span>
                                            <i className="material-icons" style={{ fontSize: 18 }}>  delete</i></a></li> */}

                                        {passengers.map((passenger, index) => (
                                            <li key={index} className={`mbooking-${index + 1}`}>
                                                <a style={{ display: 'flex' }}>
                                                    <span style={{ marginTop: 0, marginRight: -2, fontSize: 12 }}>
                                                        Passenger: {passenger.passengerNumber}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    </span>
                                                    <i 
                                                        className="material-icons" 
                                                        style={{ fontSize: 18 }} 
                                                        onClick={() => deletePassenger(index)} // Add click handler here
                                                    >
                                                        delete
                                                    </i>
                                                </a>
                                            </li>
                                        ))}
                                        {/* <li className={props.gbooking}><a href="/gbook">On Behalf Booking</a></li>
                                        <li className={props.gbooking}><a href="/gbook">Guest Booking</a></li> */}
                                    </ul>
                                    {/* </li> */}

                                </span>
                            </span>
                        </div>



                        <div className="form-container">

                            <div className="left-side wow fadeInLeft" data-wow-duration="2s" data-wow-delay="1.8s">
                                <img src={taxi} style={{ marginTop: -50 }} alt="team meeting" />
                                {/* <div className="animation-container-form">
                                    <DotLottieReact
                                        src="/animations/animation3.lottie"
                                        loop
                                        autoplay
                                    />
                                </div> */}
                            </div>

                            <div className="right-side wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s"><br></br>
                                {currentSection === 1 && (
                                    <form>

                                        <div className="form-test wow fadeIn" data-wow-duration="2s" data-wow-delay="1.6s">


                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Staff No. *</label>
                                                <input
                                                    type="number" readOnly
                                                    className='input-t'
                                                    value={emplId}
                                                    required
                                                />
                                            </div>




                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Designation *</label>
                                                <input
                                                    type="text"
                                                    id="timeOfExpense" className='input-t'
                                                    placeholder="e.g. Gurugram"
                                                    // value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-test wow fadeIn" data-wow-duration="2s" data-wow-delay="1.6s">
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Mobile *</label>
                                                <input
                                                    type="text"
                                                    id="timeOfExpense" className='input-t'
                                                    placeholder="e.g. New Delhi"
                                                    // value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />

                                            </div>
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Company Name *</label>
                                                <input
                                                    type="text"
                                                    id="timeOfExpense" className='input-t'
                                                    placeholder="e.g. Gurugram"
                                                    // value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group wow fadeIn" data-wow-duration="2s" data-wow-delay="1.0s">
                                            <label htmlFor="currency">Approver Name *</label>
                                            <input
                                                type="text"
                                                id="dateOfExpense" className='input-t' readOnly
                                                placeholder="e.g. Arun Kumar Vasistha"
                                                // value={formData.dateOfExpense}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                                            <label htmlFor="amount">Purpose of Visit *</label>
                                            <input className='input-t'
                                                type="text"
                                                id="amount"
                                                // value={formData.amount}
                                                onChange={handleInputChange}
                                                placeholder="e.g. Business Meeting"
                                                required
                                            />
                                        </div>


                                        <div className="button-group wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                            <button type="button" id='successButton' onClick={handleNextSection}>
                                                Submit
                                            </button>
                                            <button type="button" id="addButton" onClick={handleNextSection}>
                                                Add Passenger
                                            </button>

                                        </div>
                                    </form>
                                )}


                                {/* Section 2 */}
                                {currentSection === 2 && (
                                    <form>

                                        <div className="form-test wow fadeIn" data-wow-duration="2s" data-wow-delay="1.6s">
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Pickup Point *</label>
                                                <input
                                                    type="text"
                                                    id="timeOfExpense" className='input-t'
                                                    placeholder="e.g. New Delhi"
                                                    // value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />

                                            </div>
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Destination Point *</label>
                                                <input
                                                    type="text"
                                                    id="timeOfExpense" className='input-t'
                                                    placeholder="e.g. Gurugram"
                                                    // value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>


                                        <div className="form-test wow fadeIn" data-wow-duration="2s" data-wow-delay="1.4s">
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Waypoints</label>
                                                <input
                                                    type="text"
                                                    id="timeOfExpense" className='input-t'
                                                    placeholder="e.g. Redfort"
                                                    // value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />

                                            </div>
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Approx KM *</label>
                                                <input
                                                    type="number"
                                                    id="timeOfExpense" className='input-t' readOnly
                                                    placeholder="e.g. 20"
                                                    // value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>


                                        </div>

                                        {/* <div className="form-group">
                                            <label htmlFor="currency">Date of Travel *</label>
                                            <input
                                                type="date"
                                                id="dateOfExpense" className='input-t'
                                                value={formData.dateOfExpense}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div> */}
                                        <div className="form-test wow fadeIn" data-wow-duration="2s" data-wow-delay="1.2s">
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Choose Taxi *</label>

                                                <select id="currency" className='select-t'
                                                //  value={formData.currency}
                                                  onChange={handleInputChange}>
                                                    <option value="Dzire">Dzire</option>
                                                    <option value="Swift">Swift</option>
                                                    <option value="Baleno">Baleno</option>
                                                </select>


                                            </div>
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Cost Center *</label>
                                                <input
                                                    type="number"
                                                    id="timeOfExpense" className='input-t' readOnly
                                                    placeholder="e.g. 8723"
                                                    // value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>


                                        </div>



                                        <div className="form-test wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Departure Time *</label>
                                                <input
                                                    type="datetime-local"
                                                    id="timeOfExpense" className='input-t'
                                                    // value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />

                                            </div>
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Arrival Time *</label>
                                                <input
                                                    type="datetime-local"
                                                    id="timeOfExpense" className='input-t'
                                                    // value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>


                                        </div>




                                        <div className="button-group wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                            <button type="button" id='successButton' onClick={handleNextSection}>
                                                Submit
                                            </button>
                                            <button type="button" id="addButton" onClick={handleNextSection}>
                                                Add Passenger
                                            </button>

                                        </div>
                                    </form>
                                )}



















































                                {/* Section 2 */}
                                {currentSection === 3 && (
                                    <div>
                                        <h4>Passenger Details</h4>
                                        {selectedPassengerIndex !== null ? (
                                            <div>
                                                <h5>Passenger {selectedPassengerIndex + 1} Details</h5>
                                                <form>
                                        <div className="form-test">
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Co-Passenger Name</label>
                                                <input
                                                    type="text"
                                                    id="timeOfExpense" className='input-t'
                                                    placeholder="e.g. Jigyasu"
                                              //      value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />

                                            </div>
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Co-Passenger Mobile No.</label>
                                                <input
                                                    type="number"
                                                    id="timeOfExpense" className='input-t'
                                                    placeholder="e.g. 1234567890"
                                              //      value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>


                                        </div>
                                        <div className="form-test">
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Co-Passenger Name</label>
                                                <input
                                                    type="text"
                                                    id="timeOfExpense" className='input-t'
                                                    placeholder="e.g. Jigyasu"
                                              //      value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />

                                            </div>
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Co-Passenger Mobile No.</label>
                                                <input
                                                    type="number"
                                                    id="timeOfExpense" className='input-t'
                                                    placeholder="e.g. 1234567890"
                                              //      value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>


                                        </div>
                                        <div className="form-test">
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Co-Passenger Name</label>
                                                <input
                                                    type="text"
                                                    id="timeOfExpense" className='input-t'
                                                    placeholder="e.g. Jigyasu"
                                              //      value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />

                                            </div>
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Co-Passenger Mobile No.</label>
                                                <input
                                                    type="number"
                                                    id="timeOfExpense" className='input-t'
                                                    placeholder="e.g. 1234567890"
                                              //      value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>


                                        </div>
                                        <div className="form-test">
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Co-Passenger Name</label>
                                                <input
                                                    type="text"
                                                    id="timeOfExpense" className='input-t'
                                                    placeholder="e.g. Jigyasu"
                                              //      value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />

                                            </div>
                                            <div className="form-group-t">
                                                <label htmlFor="timeOfExpense">Co-Passenger Mobile No.</label>
                                                <input
                                                    type="number"
                                                    id="timeOfExpense" className='input-t'
                                                    placeholder="e.g. 1234567890"
                                              //      value={formData.timeOfExpense}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>


                                        </div>
                                        <div className="button-group">
                                            <button type="button" id="successButton" onClick={handleSubmit}>
                                                Submit
                                            </button>
                                            <button type="button" id="addButton" onClick={handleStatusCount}>
                                                Add More Passenger
                                            </button>
                                        </div>
                                    </form>
                                            </div>
                                        ) : (
                                            <p>Please select a passenger to view details.</p>
                                        )}
                                        <button onClick={handleSubmit}>Submit</button>
                                    </div>
                                )}

                                {(currentSection === 3) && (passengers.length === 0) && (
                                    <div className="animation-container-form">
                                        <DotLottieReact className='ani'
                                            src="/animations/animation2.lottie"
                                            loop
                                            autoplay
                                        />
                                    </div>
                                )}

                            </div>
                        </div>
                    </div></div></div></div>
    );
};

export default TestBookingForm;
