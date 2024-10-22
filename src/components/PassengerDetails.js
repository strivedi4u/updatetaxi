import React, { useState, useEffect } from 'react';
import { decryptData } from '../utils/encryption';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import '../assets/css/form.css';
import taxi from '../assets/images/taxi.png';
import { Typography } from '@mui/material';
const PassengerDetails = ({ emplId }, { emplName }) => {
    const navigate = useNavigate();

    const URL = process.env.REACT_APP_API_URL;
    const API = URL + '/Services/GetEmployeeProfile';

    const [UserName, setUserName] = useState(localStorage.getItem('UserName'));
    const [authToken, setAuthToken] = useState(localStorage.getItem('token'));

    var [currentSection, setCurrentSection] = useState(1);
    var [passengerSection, setPassengerSection] = useState(0);


    const [pStaffId1, setPStaffId1] = useState();
    const [pName1, setPName1] = useState();
    const [pMob1, setPMob1] = useState();
    const [pDept1, setPDept1] = useState();

    // State for second set
    const [pStaffId2, setPStaffId2] = useState();
    const [pName2, setPName2] = useState();
    const [pMob2, setPMob2] = useState();
    const [pDept2, setPDept2] = useState();

    // State for third set
    const [pStaffId3, setPStaffId3] = useState();
    const [pName3, setPName3] = useState();
    const [pMob3, setPMob3] = useState();
    const [pDept3, setPDept3] = useState();

    // State for fourth set
    const [pStaffId4, setPStaffId4] = useState();
    const [pName4, setPName4] = useState();
    const [pMob4, setPMob4] = useState();
    const [pDept4, setPDept4] = useState();


    // const [emplId, setEmplId] = useState();
    // const [emplName, setEmplName] = useState();

    const [passengers, setPassengers] = useState([]);
    console.log(passengers)
    console.log(passengers.length)


    const addPassenger = () => {
        if (currentSection != 3 && currentSection != 4) {
            setCurrentSection(3);
        }
        setPassengerSection(++passengerSection);
        if (passengerSection == 3 || passengerSection == 4) {
            setCurrentSection(4);
        }
        setPassengers(prevPassengers => [
            ...prevPassengers,
            { passengerNumber: prevPassengers.length + 1 }
        ]);
    };

    const handleSetSection = (sectionNumber) => {
        setCurrentSection(sectionNumber);
        console.log('handleSetSection', sectionNumber);
    };

    const handleDeletePassengerSection = () => {
        setPassengerSection(--passengerSection);
        if (passengerSection == 1 || passengerSection == 2) {
            handleSetSection(3);
        }
        if (passengerSection == 0) {
            handleSetSection(2);
        }
    }

    console.log("current Section ", currentSection);
    console.log("passenger Section", passengerSection);

    const handleNextSection = (e) => {
        setCurrentSection(++currentSection);
    };

    const handlePreviousSection = (e) => {
        setCurrentSection(--currentSection);
    };

    const handleReset = () => {
        setFormData({
        });
        // setCurrentSection(1);
    };

    const handleSubmit = () => {
        swal("Congratulations 🎉", "Taxi has been booked successfully", "success");
        navigate("/view");
    };

    // const handlePassengerSection = (e) => {
    //     // e.preventDefault();
    //     console.log('handlePassengerSection', e)
    //     setCurrentSection(e);
    // }
    const getBackgroundColor = () => {
        if (passengerSection === 1) {
            return pStaffId1 && pName1 && pMob1 && pDept1 // All inputs filled for passengerSection 1
                ? '#28a745' // Green
                : (!pStaffId1 || !pName1 || !pMob1 || !pDept1
                ) && ((currentSection === 3) || (currentSection === 4))
                    ? 'yellow'
                    : 'white'// Background color yellow if inputs are missing
        } else if (passengerSection === 2) {
            return pStaffId1 && pName1 && pMob1 && pDept1 && pStaffId2 && pName2 && pMob2 && pDept2 // All inputs filled for passengerSection 2
                ? '#28a745' // Green
                : (!pStaffId1 || !pName1 || !pMob1 || !pDept1 ||
                    !pStaffId2 || !pName2 || !pMob2 || !pDept2
                ) && ((currentSection === 3) || (currentSection === 4))
                    ? 'yellow'
                    : 'white'// Background color yellow if inputs are missing
        } else if (passengerSection === 3) {
            return pStaffId1 && pName1 && pMob1 && pDept1 && pStaffId2 && pName2 && pMob2 && pDept2 &&
                pStaffId3 && pName3 && pMob3 && pDept3 // All inputs filled for passengerSection 3
                ? '#28a745' // Green
                : (!pStaffId1 || !pName1 || !pMob1 || !pDept1 ||
                    !pStaffId2 || !pName2 || !pMob2 || !pDept2 ||
                    !pStaffId3 || !pName3 || !pMob3 || !pDept3
                ) && ((currentSection === 3) || (currentSection === 4))
                    ? 'yellow'
                    : 'white'// Background color yellow if inputs are missing
        } else if (passengerSection === 4) {
            return pStaffId1 && pName1 && pMob1 && pDept1 && pStaffId2 && pName2 && pMob2 && pDept2 &&
                pStaffId3 && pName3 && pMob3 && pDept3 && pStaffId4 && pName4 && pMob4 && pDept4  // All inputs filled for passengerSection 4
                ? '#28a745' // Green
                : (!pStaffId1 || !pName1 || !pMob1 || !pDept1 ||
                    !pStaffId2 || !pName2 || !pMob2 || !pDept2 ||
                    !pStaffId3 || !pName3 || !pMob3 || !pDept3 ||
                    !pStaffId4 || !pName4 || !pMob4 || !pDept4
                ) && ((currentSection === 3) || (currentSection === 4))
                    ? 'yellow'
                    : 'white'// Background color yellow if inputs are missing
        }

        // return 'white'; // Default fallback color
    };

    const getTextColor = () => {
        return (pStaffId1 && pName1 && pMob1 && pDept1 && passengerSection === 1) ||
            (pStaffId1 && pName1 && pMob1 && pDept1 && pStaffId2 && pName2 && pMob2 && pDept2 && passengerSection === 2) ||
            (pStaffId1 && pName1 && pMob1 && pDept1 && pStaffId2 && pName2 && pMob2 && pDept2 && pStaffId3 && pName3 && pMob3 && pDept3 && passengerSection === 3) ||
            (pStaffId1 && pName1 && pMob1 && pDept1 && pStaffId2 && pName2 && pMob2 && pDept2 && pStaffId3 && pName3 && pMob3 && pDept3 && pStaffId4 && pName4 && pMob4 && pDept4 && passengerSection === 4)
            ? 'white' // Text should be white if background is green
            : 'black'; // Default text color
    };

    return (

        <>
            {/* Current section Section 3 */}
            {
                (currentSection === 3) && (

                    <form>
                        {(passengerSection >= 1) && (
                            <div> <Typography
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
                                &nbsp;&nbsp;&nbsp;Passenger Details 1
                                {(passengerSection === 1) && (
                                    <i className="material-icons" onClick={handleDeletePassengerSection} style={{ fontSize: 18, float: 'right', marginRight: 10 }}>delete</i>
                                )}
                            </Typography>

                                <div className="form-test">
                                    <div className="form-group-t">
                                        <label>Passenger Staff Id *</label>
                                        <input
                                            type="number"
                                            className='input-t'
                                            placeholder="eg. 598801"
                                            value={pStaffId1}
                                            onChange={(e) => setPStaffId1(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group-t">
                                        <label>Passenger Name *</label>
                                        <input
                                            type="text"
                                            className='input-t'
                                            placeholder="e.g. Shashank Trivedi"
                                            value={pName1}
                                            onChange={(e) => setPName1(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-test">
                                    <div className="form-group-t">
                                        <label>Passenger Mobile No. *</label>
                                        <input
                                            type="number"
                                            className='input-t'
                                            placeholder="e.g. 9999999999"
                                            value={pMob1}
                                            onChange={(e) => setPMob1(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group-t">
                                        <label>Passenger Dept. *</label>
                                        <input
                                            type="text"
                                            className='input-t'
                                            placeholder="e.g. APPS"
                                            value={pDept1}
                                            onChange={(e) => setPDept1(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>



                        )}
                        {/* Passenger section Section 2 */}

                        {(passengerSection >= 2) && (
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
                                    &nbsp;&nbsp;&nbsp;Passenger Details 2
                                    {(passengerSection === 2) && (
                                        <i className="material-icons" onClick={handleDeletePassengerSection} style={{ fontSize: 18, float: 'right', marginRight: 10 }}>delete</i>
                                    )}
                                </Typography>
                                <div className="form-test">
                                    <div className="form-group-t">
                                        <label>Passenger Staff Id *</label>
                                        <input
                                            type="number"
                                            className='input-t'
                                            placeholder="eg. 598801"
                                            value={pStaffId2}
                                            onChange={(e) => setPStaffId2(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group-t">
                                        <label>Passenger Name *</label>
                                        <input
                                            type="text"
                                            className='input-t'
                                            placeholder="e.g. Shashank Trivedi"
                                            value={pName2}
                                            onChange={(e) => setPName2(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-test">
                                    <div className="form-group-t">
                                        <label>Passenger Mobile No. *</label>
                                        <input
                                            type="number"
                                            className='input-t'
                                            placeholder="e.g. 9999999999"
                                            value={pMob2}
                                            onChange={(e) => setPMob2(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group-t">
                                        <label>Passenger Dept. *</label>
                                        <input
                                            type="text"
                                            className='input-t'
                                            placeholder="e.g. APPS"
                                            value={pDept2}
                                            onChange={(e) => setPDept2(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        )}



                        <div className="button-group wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                            {/* Back Button */}
                            <button
                                type="button"
                                id='backButton'
                                onClick={handlePreviousSection}
                                style={{
                                    backgroundColor: 'white',
                                    border: '2px solid #FFD700',  // Taxi yellow border
                                    color: '#333',                // Neutral dark gray text
                                    padding: '10px 20px',
                                    borderRadius: '5px',
                                    boxShadow: 'none',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s ease'
                                }}
                                onMouseOver={(e) => e.target.style.backgroundColor = '#f9f9f9'}
                                onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
                            >
                                <i className="material-icons" style={{ fontSize: 18, verticalAlign: 'middle', marginBottom: '1px' }}>arrow_back</i>
                                Back
                            </button>

                            {/* Submit Button (Disabled) */}

                            {passengerSection <= 2 ? (
                                // Submit Button when passengerSection is 0
                                <button
                                    type="button"
                                    id="submitButton"
                                    onClick={handleSubmit}
                                    disabled={true}  // Disable the button
                                    style={{
                                        backgroundColor: '#28a745',   // Official green color
                                        border: 'none',               // No border for simplicity
                                        color: 'white',               // White text for contrast
                                        padding: '10px 20px',
                                        borderRadius: '5px',
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',  // Slight shadow for emphasis
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease'
                                    }}
                                >
                                    Submit <i
                                        className="material-icons"
                                        style={{
                                            fontSize: 17,
                                            backgroundColor: 'transparent',  // Ensure no background color for the icon
                                            color: 'inherit',                 // Inherit text color from the button
                                            verticalAlign: 'middle', marginBottom: '1px'
                                        }}
                                    >task_alt</i>
                                </button>
                            ) : (
                                // Save & Next Button when passengerSection is not 0
                                <button
                                    type="button"
                                    id="saveNextButton"
                                    onClick={handleNextSection}
                                    style={{
                                        backgroundColor: '#F6E871',   // Bold Taxi yellow
                                        border: '2px solid #FFD700',
                                        color: 'black',               // Black text for strong contrast
                                        padding: '10px 20px',
                                        borderRadius: '5px',
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',  // Slight shadow for emphasis
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease'
                                    }}
                                    onMouseOver={(e) => e.target.style.backgroundColor = '#F6E871'}  // Hover for a slightly lighter yellow
                                    onMouseOut={(e) => e.target.style.backgroundColor = '#FFD700'}
                                >
                                    Save & Next <i className="material-icons" style={{ fontSize: 12 }}>send</i>
                                </button>
                            )}


                        </div>
                    </form>

                )
            }


            {/* Current section Section 4 */}
            {
                (currentSection === 4) && (

                    <form>
                        {((passengerSection === 3) || (passengerSection === 4)) && (
                            <div> <Typography
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
                                &nbsp;&nbsp;&nbsp;Passenger Details 3
                                {(passengerSection === 3) && (
                                    <i className="material-icons" onClick={handleDeletePassengerSection} style={{ fontSize: 18, float: 'right', marginRight: 10 }}>delete</i>
                                )}
                            </Typography>
                                <div className="form-test">
                                    <div className="form-group-t">
                                        <label>Passenger Staff Id *</label>
                                        <input
                                            type="number"
                                            className='input-t'
                                            placeholder="eg. 598801"
                                            value={pStaffId3}
                                            onChange={(e) => setPStaffId3(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group-t">
                                        <label>Passenger Name *</label>
                                        <input
                                            type="text"
                                            className='input-t'
                                            placeholder="e.g. Shashank Trivedi"
                                            value={pName3}
                                            onChange={(e) => setPName3(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-test">
                                    <div className="form-group-t">
                                        <label>Passenger Mobile No. *</label>
                                        <input
                                            type="number"
                                            className='input-t'
                                            placeholder="e.g. 9999999999"
                                            value={pMob3}
                                            onChange={(e) => setPMob3(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group-t">
                                        <label>Passenger Dept. *</label>
                                        <input
                                            type="text"
                                            className='input-t'
                                            placeholder="e.g. APPS"
                                            value={pDept3}
                                            onChange={(e) => setPDept3(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>


                        )}
                        {/* Passenger section Section 2 */}

                        {(passengerSection === 4) && (
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
                                    &nbsp;&nbsp;&nbsp;Passenger Details 4
                                    {(passengerSection === 4) && (
                                        <i className="material-icons" onClick={handleDeletePassengerSection} style={{ fontSize: 18, float: 'right', marginRight: 10 }}>delete</i>
                                    )}
                                </Typography>
                                <div className="form-test">
                                    <div className="form-group-t">
                                        <label>Passenger Staff Id *</label>
                                        <input
                                            type="number"
                                            className='input-t'
                                            placeholder="eg. 598801"
                                            value={pStaffId4}
                                            onChange={(e) => setPStaffId4(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group-t">
                                        <label>Passenger Name *</label>
                                        <input
                                            type="text"
                                            className='input-t'
                                            placeholder="e.g. Shashank Trivedi"
                                            value={pName4}
                                            onChange={(e) => setPName4(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-test">
                                    <div className="form-group-t">
                                        <label>Passenger Mobile No. *</label>
                                        <input
                                            type="number"
                                            className='input-t'
                                            placeholder="e.g. 9999999999"
                                            value={pMob4}
                                            onChange={(e) => setPMob4(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group-t">
                                        <label>Passenger Dept. *</label>
                                        <input
                                            type="text"
                                            className='input-t'
                                            placeholder="e.g. APPS"
                                            value={pDept4}
                                            onChange={(e) => setPDept4(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        )}



                        <div className="button-group wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                            {/* Back Button */}
                            <button
                                type="button"
                                id='backButton'
                                onClick={handlePreviousSection}
                                style={{
                                    backgroundColor: 'white',
                                    border: '2px solid #FFD700',  // Taxi yellow border
                                    color: '#333',                // Neutral dark gray text
                                    padding: '10px 20px',
                                    borderRadius: '5px',
                                    boxShadow: 'none',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s ease'
                                }}
                                onMouseOver={(e) => e.target.style.backgroundColor = '#f9f9f9'}
                                onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
                            >
                                <i className="material-icons" style={{ fontSize: 18, verticalAlign: 'middle', marginBottom: '1px' }}>arrow_back</i>
                                Back
                            </button>

                            {/* Submit Button (Disabled) */}



                            <button
                                type="button"
                                id="submitButton"
                                onClick={handleSubmit}
                                disabled={true}  // Disable the button
                                style={{
                                    backgroundColor: '#28a745',   // Official green color
                                    border: 'none',               // No border for simplicity
                                    color: 'white',               // White text for contrast
                                    padding: '10px 20px',
                                    borderRadius: '5px',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',  // Slight shadow for emphasis
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s ease'
                                }}
                            >
                                Submit <i
                                    className="material-icons"
                                    style={{
                                        fontSize: 17,
                                        backgroundColor: 'transparent',  // Ensure no background color for the icon
                                        color: 'inherit',                 // Inherit text color from the button
                                        verticalAlign: 'middle', marginBottom: '1px'
                                    }}
                                >task_alt</i>
                            </button>



                        </div>
                    </form>

                )
            }

            {
                (currentSection === 3) && (passengers.length === 0) && (
                    <div className="animation-container-form">
                        <DotLottieReact className='ani'
                            src="/animations/animation2.lottie"
                            loop
                            autoplay
                        />
                    </div>
                )
            }
        </>

    );
};

export default PassengerDetails;
