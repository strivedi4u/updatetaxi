import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { Typography } from '@mui/material';
import L from "leaflet";
import "../assets/css/form.css";
import taxi from "../assets/images/taxi.png";
import { getGeneralReport } from "../apis/GetGeneralReport";

// Fix Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const ViewForm1 = (
//     {
//     emplId,
//     emplName,
//     desg,
//     mob,
//     comp,
//     approver,
//     costCenter
// }
) => {
    const navigate = useNavigate();
    let { reqId } = useParams();
    const [reqData, setReqData] = useState([]);

    useEffect(() => {
        const getReqData = async () => {
            let res = getGeneralReport(reqId);
            setReqData(res.data);
        };
        getReqData();
    }, []);

    const [passenger, setPassenger] = useState(1); // Number of passengers
    const [passengerData, setPassengerData] = useState([
        { pStaffId: '', pName: '', pMob: '', pDept: '' },
    ]);
    const [editableFields, setEditableFields] = useState({
        name: true,
        designation: true,
    });

    // Handlers
    const handleChange = (index, field, value) => {
        setPassengerData((prevData) =>
            prevData.map((item, idx) =>
                idx === index ? { ...item, [field]: value } : item
            )
        );
    };

    const handleEmployeeSearch = (index) => {
        // Logic for searching employee details
        console.log(`Search triggered for passenger ${index}`);
    };

    const addPassenger = () => {
        setPassenger(passenger + 1);
        setPassengerData([
            ...passengerData,
            { pStaffId: '', pName: '', pMob: '', pDept: '' },
        ]);
    };
    const [AppName, setAppName] = useState("TAXI-BOOK");
    const [RequestID, setRequestID] = useState("");
    const [RequestStatus, setRequestStatus] = useState("DRAFT");
    const [TourType, setTourType] = useState("L");
    const [RequestorType, setRequestorType] = useState("S");
    const [RequestorID, setRequestorID] = useState(""); // Initialize with employee ID or another value
    const [RequestorMobile, setRequestorMobile] = useState(""); // Initialize with mobile number
    //   const [TripStartPoint, setTripStartPoint] = useState("Gurugram");
    //   const [TripEndPoint, setTripEndPoint] = useState("Delhi");
    //   const [TripStartTime, setTripStartTime] = useState("07-Nov-2024 10:23");
    //   const [TripEndTime, setTripEndTime] = useState("07-Nov-2024 12:23");
    //   const [TripWayPoint, setTripWayPoint] = useState("");
    const [RequestorModel, setRequestorModel] = useState("SWIFT");
    const [ApproverModel, setApproverModel] = useState("SWIFT");
    const [AllotedModel, setAllotedModel] = useState("SWIFT");
    const [VendorID, setVendorID] = useState("");
    const [VehicleRegNo, setVehicleRegNo] = useState("");
    const [DriverID, setDriverID] = useState("");
    const [CreatorID, setCreatorID] = useState("598801"); // Initialize with employee ID or another value
    const [Action, setAction] = useState("SUBMIT");
    const [Comments, setComments] = useState("");
    const [PassengerDet, setPassengerDet] = useState("");
    //  const [Purpose, setPurpose] = useState("");
    const [ExtraBills, setExtraBills] = useState("");
    const [BillCatg, setBillCatg] = useState("");

    const [poVisit, setPoVisit] = useState();

    const [pickup, setPickup] = useState();
    const [destination, setDestination] = useState();
    const [waypoints, setWaypoints] = useState();
    const [approxKM, setAproxKM] = useState();

    // const [costCenter, setCostCenter] = useState();
    const [dtime, setDtime] = useState();
    const [atime, setAtime] = useState();
    const [mob, setMob] = useState();
    const [comp, setComp] = useState();
    const [currentSection, setCurrentSection] = useState(1);
    const [formData, setFormData] = useState({
        expenseType: "",
        amount: "",
        currency: "INR",
        spentAt: "",
        description: "",
        cityName: "",
        category: "",
        dateOfExpense: "",
        timeOfExpense: "",
    });

    // For taxi selection
    const [chooseTaxi, setChooseTaxi] = useState(""); // Tracks the selected taxi option
    const [model, setModel] = useState(""); // Stores the taxi model details

    // For cost center
    const [costCenter, setCostCenter] = useState(""); // Tracks the cost center value

    // For employee details
    const [emplId, setEmplId] = useState(""); // Employee ID
    const [desg, setDesg] = useState(""); // Designation
    const [setMobile, updateMobile] = useState(""); // Employee mobile number

    // For approver details
    const [approverName, setApproverName] = useState(""); // Approver's name
    // Current location state
    const [currentLocation, setCurrentLocation] = useState([20.5937, 78.9629]); // Default: India's center
    const [zoom, setZoom] = useState(5); // Default zoom level

    // Fetch user's current location
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCurrentLocation([
                        position.coords.latitude,
                        position.coords.longitude,
                    ]);
                    setZoom(15); // Zoom in on the user's location
                },
                () => {
                    alert("Failed to fetch location");
                }
            );
        }
    }, []);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleNextSection = () => {
        setCurrentSection(currentSection + 1);
    };

    const handleTaxiChange = (e) => {
        // const selectedTaxi = e.target.value;  // Get the selected taxi model
        // setChooseTaxi(selectedTaxi);  // Set the selected taxi

        // // Find the car model in the 'model' array and update passenger limit
        // const selectedCar = model.find(car => car.MODL_CODE === selectedTaxi);
        // if (selectedCar) {
        //     setPassengerLimit(selectedCar.MODL_PASS_CAP);  // Update the passenger limit based on selected taxi
        // }
    };

    const handleSubmit = () => {
        swal("Congratulations 🎉", "Taxi has been booked successfully", "success");
        navigate("/view");
    };

    return (
        <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
            <div className="container">
                <div className="row">
                    <div className="expense-form">
                        <div className="form-container">
                            <div className="left-side">
                                <form style={{
                                    height: '520px', // Sets the fixed height of the container
                                    overflowX: 'hidden', // Enables horizontal scrolling if content overflows
                                    overflowY: 'auto', // Prevents vertical scrolling
                                    scrollbarWidth: 'thin', // Customizes scrollbar width (for Firefox)
                                    paddingRight: '16px',
                                    marginRight: "-30px"
                                }}>
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
                                                type="text"
                                                className='input-t'
                                                placeholder="e.g. New Delhi"
                                                value={pickup}
                                                onChange={(e) => setPickup(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group-t">
                                            <label>Destination Point *</label>
                                            <input
                                                type="text"
                                                className='input-t'
                                                placeholder="e.g. Gurugram"
                                                value={destination}
                                                onChange={(e) => setDestination(e.target.value)}
                                                required
                                            />
                                        </div>

                                    </div>

                                    <div className="form-test wow fadeIn" data-wow-duration="2s" data-wow-delay="1.4s">

                                        <div className="form-group-t">
                                            <label>Waypoints</label>
                                            <input
                                                type="text"
                                                className='input-t'
                                                placeholder="e.g. Redfort"
                                                value={waypoints}
                                                onChange={(e) => setWaypoints(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group-t">
                                            <label>Approx KM *</label>
                                            <input
                                                type="number"
                                                className='input-t'
                                                placeholder="e.g. 20"
                                                value={approxKM}
                                                onChange={(e) => setAproxKM(e.target.value)}
                                                required readOnly
                                            />
                                        </div>

                                    </div>

                                    <div className="form-test wow fadeIn" data-wow-duration="2s" data-wow-delay="1.2s">

                                        <div className="form-group-t">
                                            <label>Choose Taxi *</label>
                                            <select
                                                className='select-t'
                                                // value={chooseTaxi}
                                                onChange={handleTaxiChange}
                                            >
                                                {/* {model.map((car) => (
                                                    <option key={car.MODL_CODE} value={car.MODL_CODE}>
                                                        {car.MODL_CODE}
                                                    </option>
                                                ))} */}
                                            </select>
                                        </div>
                                        <div className="form-group-t">
                                            <label>Cost Center *</label>
                                            <input
                                                type="number"
                                                className='input-t'
                                                value={costCenter}
                                                required readOnly
                                            />
                                        </div>

                                    </div>

                                    <div className="form-test wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
                                        <div className="form-group-t">
                                            <label>Departure Time *</label>
                                            <input
                                                type="datetime-local"
                                                className='input-t'
                                                value={dtime}
                                                onChange={(e) => setDtime(e.target.value)}
                                                required
                                            />

                                        </div>
                                        <div className="form-group-t">
                                            <label>Arrival Time *</label>
                                            <input
                                                type="datetime-local"
                                                className='input-t'
                                                value={atime}
                                                onChange={(e) => setAtime(e.target.value)}
                                                required
                                            />
                                        </div>

                                    </div>
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
                                        &nbsp;&nbsp;&nbsp;Personal Details

                                    </Typography>
                                    <div className="form-test wow fadeIn" data-wow-duration="2s" data-wow-delay="1.6s">

                                        <div className="form-group-t">
                                            <label>Staff No. *</label>
                                            <input
                                                type="number"
                                                className='input-t'
                                                value={emplId}
                                                onChange={(e) => setRequestorID(e.target.value)}
                                                required readOnly
                                            />
                                        </div>
                                        <div className="form-group-t">
                                            <label>Designation *</label>
                                            <input
                                                type="text"
                                                className='input-t'
                                                value={desg}
                                                required readOnly
                                            />
                                        </div>

                                    </div>

                                    <div className="form-test wow fadeIn" data-wow-duration="2s" data-wow-delay="1.6s">
                                        <div className="form-group-t">
                                            <label>Mobile *</label>
                                            <input
                                                type="number"
                                                className='input-t'
                                                placeholder="e.g. 9999999999"
                                                defaultValue={mob}
                                                onChange={(e) => setMobile(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group-t">
                                            <label>Company Name *</label>
                                            <input
                                                type="text"
                                                className="input-t"
                                                value={comp === '101' ? 'Maruti Suzuki India Limited' : comp === '9158' ? 'Suzuki Motor Corporation Japan' : comp}
                                                required
                                                readOnly
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group wow fadeIn" data-wow-duration="2s" data-wow-delay="1.0s">
                                        <label>Approver Name *</label>
                                        <input
                                            type="text"
                                            className='input-t'
                                            value={approverName}
                                            required readOnly
                                        />
                                    </div>

                                    <div className="form-group wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                                        <label>Purpose of Visit *</label>
                                        <input className='input-t'
                                            type="text"
                                            value={poVisit}
                                            onChange={(e) => setPoVisit(e.target.value)}
                                            placeholder="e.g. Business Meeting"
                                            required
                                        />
                                    </div>
                                    {/* Other input fields remain unchanged */}<div>
                                        {/* <div key={index}>
                                                        {currentPassengerSection === passengerSection && ( */}
                                        <>
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
                                                &nbsp;&nbsp;&nbsp;Passenger Details
                                                {/* {passenger === index + 1 && (
                                                                        <i
                                                                            className="material-icons"
                                                                            onClick={() => setPassenger(passenger - 1)}
                                                                            style={{ fontSize: 18, float: 'right', marginRight: 10 }}
                                                                        >
                                                                            delete
                                                                        </i>
                                                                    )} */}
                                            </Typography>
                                            <div className="form-test">
                                                <div className="form-group-t" style={{ position: 'relative', display: 'inline-block' }}>
                                                    <label>Passenger Staff Id *</label>

                                                    <div style={{ position: 'relative', display: 'inline-block' }}>
                                                        <input
                                                            type="number" style={{ paddingRight: '50px' }}
                                                            className='input-t'
                                                            placeholder="eg. 598801"
                                                            //         defaultValue={passengerData[index] ? passengerData[index].pStaffId : ""}

                                                            //              onChange={(e) => handleChange(index, 'pStaffId', e.target.value)}
                                                            required
                                                        />
                                                        <i
                                                            className="material-icons"
                                                            style={{
                                                                position: 'absolute',
                                                                right: '15px',
                                                                top: '50%',
                                                                fontSize: 18,
                                                                transform: 'translateY(-50%)',
                                                                cursor: 'pointer',
                                                                color: '#888'
                                                            }}
                                                        //                 onClick={() => handleEmployeeSearch(index)}
                                                        >
                                                            send
                                                        </i>
                                                    </div>
                                                </div>
                                                <div className="form-group-t">
                                                    <label>Passenger Name *</label>
                                                    <input
                                                        type="text"
                                                        className='input-t'
                                                        placeholder="e.g. Shashank Trivedi"
                                                        //     value={passengerData[index] ? passengerData[index].pName : ""}
                                                        //       onChange={(e) => handleChange(index, 'pName', e.target.value)}
                                                        required
                                                        readOnly={!editableFields.name} // Controlled by editableFields
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-test">
                                                <div className="form-group-t">
                                                    <label>Passenger Mobile No. *</label>
                                                    <input
                                                        type="text"
                                                        className='input-t'
                                                        placeholder="e.g. 9999999999"
                                                        //       value={passengerData[index] ? passengerData[index].pMob : ""}
                                                        //          onChange={(e) => handleChange(index, 'pMob', e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group-t">
                                                    <label>Passenger Dept. *</label>
                                                    <input
                                                        type="text"
                                                        className='input-t'
                                                        placeholder="e.g. APPS"
                                                        //          value={passengerData[index] ? passengerData[index].pDept : ""}
                                                        //         onChange={(e) => handleChange(index, 'pDept', e.target.value)}
                                                        required
                                                        readOnly={!editableFields.designation}
                                                    />
                                                </div>
                                            </div>

                                        </>
                                        {/* )} */}
                                    </div>
                                </form>
                            </div>

                            <div className="right-side">
                                <form>
                                    {/* Map Integration */}
                                    {/* <h4>Your Current Location</h4> */}
                                    <MapContainer
                                        center={currentLocation}
                                        zoom={zoom}
                                        style={{ height: "445px", width: "100%" }}
                                    >
                                        <TileLayer
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        />
                                        <Marker position={currentLocation}>
                                            <Popup>You are here!</Popup>
                                        </Marker>
                                    </MapContainer><br></br>
                                    <div className="button-group wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                        {/* Back Button */}
                                        <button
                                            type="button"
                                            id="backButton"
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
                                            //   disabled={true}  // Disable the button
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

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewForm1;
