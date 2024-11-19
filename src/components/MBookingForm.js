import React, { useState, useEffect } from 'react';
import { decryptData } from '../utils/encryption';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import '../assets/css/form.css';
import taxi from '../assets/images/taxi.png';
import { Typography } from '@mui/material';
import Preloader from './Preloader';
import { getEmployeeLookup } from '../apis/GetEmplLookup';
import { getModel } from '../apis/GetModel';
import { updateAction } from '../apis/UpdateAction';
import Map from './Map';
const MBookingForm = ({
    emplId,
    emplName,
    desg,
    mob,
    comp,
    approver,
    costCenter
}) => {

    const [mapStatus, setMapStatus] = useState(false);
    const [mobile, setMobile] = useState(mob);
    const [passengerLimit, setPassengerLimit] = useState(7);

    // var [passengerSection, setPassengerSection] = useState(0);

    var [passengerSection, setPassengerSection] = useState(0); // Example value, adjust as needed
    var [passenger, setPassenger] = useState(0);

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
    const [waypoint, setWaypoint] = useState();
    var [approxKM, setAproxKM] = useState();

    console.log('pickup1', pickup);
    console.log('waypoint1', waypoint);
    console.log('approxKM', approxKM);
    console.log(waypoint);
    // const [costCenter, setCostCenter] = useState();
    const [dtime, setDtime] = useState();
    const [atime, setAtime] = useState();

    //   const [UserName, setUserName] = useState("");

    const [formattedPassengerData, setFormattedPassengerData] = useState(''); // For storing the formatted data



    useEffect(() => {

        try {
            setPassengerSection(Math.ceil(passenger / 2));
        } catch (error) {
            console.error('Error fetching approver data:', error);
        } finally {
            //setLoading(false); // Stop loading after the API call
        }

    }, [passenger]);

    // const [passengerData, setPassengerData] = useState(
    //     Array(passengerSection).fill({
    //         pStaffId: "",
    //         pName: "",
    //         pMob: "",
    //         pDept: "",
    //     })
    // // );
    // const [passengerSection, setPassengerSection] = useState(Math.ceil(passenger / 2));
    var [passengerData, setPassengerData] = useState([]);
    const [pStaffId1, setPStaffId1] = useState("");
    const [pName1, setPName1] = useState("");
    const [pMob1, setPMob1] = useState("");
    const [pDept1, setPDept1] = useState("");

    // useEffect(() => {
    //     setPassengerData(prevData => {
    //         const newPassengerData = Array.from({ length: passenger }, (_, index) => 
    //             prevData[index] || { pStaffId: "", pName: "", pMob: "", pDept: "" }
    //         );
    //         return newPassengerData;
    //     });
    // }, [passenger]);

    // useEffect(() => {
    //     setPassengerSection(Math.ceil(passenger / 2)); // Update the passengerSection based on passenger count
    //     setPassengerData(Array(passengerSection).fill({
    //         pStaffId: "",
    //         pName: "",
    //         pMob: "",
    //         pDept: "",
    //     }));
    // }, [passenger, passengerSection]);



    console.log('mobile', mobile)
    console.log('mob', mob)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const URL = process.env.REACT_APP_API_URL;
    const API = URL + '/Services/GetEmployeeProfile';

    const [UserName, setUserName] = useState(localStorage.getItem('UserName'));
    const [authToken, setAuthToken] = useState(localStorage.getItem('token'));

    var [currentSection, setCurrentSection] = useState(1);


    const [approverName, setApproverName] = useState();
    const [model, setModel] = useState([]);
    const [chooseTaxi, setChooseTaxi] = useState();
    console.log(chooseTaxi);

    const [editableFields, setEditableFields] = useState({
        name: false,
        designation: false,
    });




    useEffect(() => {
        // Function to call API
        const fetchData = async () => {
            try {
                setLoading(true);
                console.log("employee api call");
                const employeeLookup = await getEmployeeLookup(approver);// Replace with your API URL
                console.log("model api call");
                const model = await getModel();
                console.log(model);
                setApproverName(decryptData(employeeLookup.Name));
                setModel(model);
                //  setChooseTaxi(model[0].MODL_CODE);// Assuming the approver is in the response's data
            } catch (error) {
                console.error('Error fetching approver data:', error);
            } finally {
                setLoading(false); // Stop loading after the API call
            }
        };

        fetchData(); // Call the function
    }, [approver], [chooseTaxi]);

    useEffect(() => {
        setPassengerSection(Math.ceil(passenger / 2));
        setPassengerData(prevData => {
            const newPassengerData = Array.from({ length: passenger }, (_, index) =>
                prevData[index] || { pStaffId: "", pName: "", pMob: "", pDept: "" }
            );
            return newPassengerData;
        });
    }, [passenger]);

    const handleChange = (index, field, value) => {
        console.log("Onchange event call", index, field, value);
        setPassengerData(prevData =>
            prevData.map((item, idx) =>
                idx === index ? { ...item, [field]: value } : item
            )
        );
        console.log(passengerData);
    };

    const handleEmployeeSearch = async (index) => {
        setLoading(true);
        console.log("index", index);
        console.log("passenger", passengerData);
        const pStaffId = passengerData[index].pStaffId;
        console.log(pStaffId);
        const employeeLookup = await getEmployeeLookup(pStaffId);

        if (employeeLookup) {
            setPassengerData(prevData =>
                prevData.map((item, idx) =>
                    idx === index
                        ? {
                            ...item,
                            pName: decryptData(employeeLookup.Name),
                            pMob: decryptData(employeeLookup.MOB_NO),
                            pDept: decryptData(employeeLookup.Dept),
                        }
                        : item
                )
            );
        }
        setLoading(false);
    };


    const handleEmployeeSearch4 = async () => {
        if (pStaffId4 === '000000') {
            // Update editable fields based on pStaffId1
            setEditableFields({
                name: pStaffId4 === '000000',
                designation: pStaffId4 === '000000',
            });
        } else {
            try {
                setLoading(true);
                setEditableFields({
                    name: false,
                    designation: false,
                });
                const employeeLookup = await getEmployeeLookup(pStaffId4); // Wait for the fetchData to resolve
                console.log("employeeLookup ", employeeLookup);// Set the data into the state
                setPName4(decryptData(employeeLookup.Name));
                setPMob4(decryptData(employeeLookup.MOB_NO));
                console.log('hi', decryptData(employeeLookup.MOB_NO));
                console.log(pMob4);
                setPDept4(decryptData(employeeLookup.Dept));
            } catch (error) {
                console.error("Error in useEffect:", error);
            } finally {
                setLoading(false); // Stop loading after the API call
            }
        }
    };

    const [bgColor, setBgColor] = useState();
    // if(currentSection)
    // const [staffId, setStaffId] = useState();
    // const [desg, setDesg] = useState();

    // const [comp, setComp] = useState();
    // const [approver, setApprover] = useState();
    // const [poVisit, setPoVisit] = useState();

    // const [pickup, setPickup] = useState();
    // const [destination, setDestination] = useState();
    // const [waypoints, setWaypoints] = useState();
    // const [approxKM, setAproxKM] = useState();

    // // const [costCenter, setCostCenter] = useState();
    // const [dtime, setDtime] = useState();
    // const [atime, setAtime] = useState();

    // State for first set


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



    // Initialize the state with the default values for controlled inputs

    // Function to handle adding a new passenger
    const addPassenger = () => {
        setCurrentSection(3);
        setPassenger(++passenger);
        // if (currentSection != 3 && currentSection != 4) {
        //     setCurrentSection(3);
        // }
        // setPassengerSection(++passengerSection);
        // if (passengerSection == 3 || passengerSection == 4) {
        //     setCurrentSection(4);
        // }
        // setPassengers(prevPassengers => [
        //     ...prevPassengers,
        //     { passengerNumber: prevPassengers.length + 1 }
        // ]);
    };

    const handleSetSection = (sectionNumber) => {
        setCurrentSection(sectionNumber);
        console.log('handleSetSection', sectionNumber);
    };
    const handleSetPassengerSection = (sectionNumber) => {
        setCurrentSection(3);
        setPassengerSection(sectionNumber);
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


    const [formData, setFormData] = useState({
        expenseType: '',
        amount: '',
        currency: 'INR',
        spentAt: '',
        description: '',
        cityName: '',
        category: '',
        dateOfExpense: '',
        timeOfExpense: '',
    });


    var [statusCount, setStatusCount] = useState(0);


    //     useEffect(() => {
    //     const handleEmployeeSearch = async ()=> {
    //         console.log('Employee Search Call');
    //         console.log(authToken);
    //         axios.post(API, {
    //             UserName: decryptData(UserName)
    //         }, {
    //             headers: {
    //                 "authToken": authToken
    //             }
    //         })
    //             .then((response) => {
    //                 if (response.status === 200) {
    //                     console.log("Hello ", response);
    //                     console.log("Hello ", response);
    //                     setEmplId(decryptData(response.data.Value.Table1[0].EMPL_ID));
    //                     setEmplName(decryptData(response.data.Value.Table1[0].EMPL_NAME));
    //                     // setProfilePhoto(response.data.Value.Table1[0].profile_photo);
    //                     // swal("Good job!", "Successfully saved", "success");
    //                 } else {
    //                     swal("Unfortunately!", "Unsuccessfully saved", "error");
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //                 swal("Unfortunately!", error.response.data.error, "error");
    //             });

    //     };
    //     handleEmployeeSearch();
    //     //   }
    // }, [API, authToken, UserName]);

    const handleStatusCount = (e) => {
        console.log(statusCount);
        console.log("Before");
        setStatusCount(++statusCount);
        console.log("After");
        console.log(statusCount);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleNextSection = (e) => {
        setCurrentSection(++currentSection);
    };

    const handlePreviousSection = (e) => {
        setCurrentSection(--currentSection);
    };

    const handleReset = () => {
        setFormData({
            expenseType: '',
            amount: '',
            currency: 'INR',
            spentAt: '',
            description: '',
            cityName: '',
            category: '',
            dateOfExpense: '',
            timeOfExpense: '',
        });
        // setCurrentSection(1);
    };
    const handleSubmit = async () => {
        console.group("Handle Submit button click");
        const formattedData = passengerData
            .map(item => `${item.pStaffId}~${item.pName}~${item.pMob}~${item.pDept}`)
            .join('#') + '#';

        setFormattedPassengerData(formattedData);
        console.log('Formatted Passenger Data:', formattedData);
        try {
            setLoading(true);
            console.log("updateAction api call");

            const updateActionResponse = await updateAction(
                AppName,
                RequestID,
                RequestStatus,
                TourType,
                RequestorType,
                RequestorID,
                RequestorMobile,
                pickup,
                destination,
                dtime,
                atime,
                waypoint,
                RequestorModel,
                ApproverModel,
                AllotedModel,
                VendorID,
                VehicleRegNo,
                DriverID,
                CreatorID,
                Action,
                Comments,
                formattedPassengerData,
                poVisit,
                ExtraBills,
                BillCatg,
                UserName
            );

            console.log("update Action", updateActionResponse);
        } catch (error) {
            console.error('Error fetching update data:', error);
        } finally {
            setLoading(false); // Stop loading after the API call
            swal("Congratulations 🎉", "Taxi has been booked successfully", "success");
        }
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
    const handleTaxiChange = (e) => {
        const selectedTaxi = e.target.value;  // Get the selected taxi model
        setChooseTaxi(selectedTaxi);  // Set the selected taxi

        // Find the car model in the 'model' array and update passenger limit
        const selectedCar = model.find(car => car.MODL_CODE === selectedTaxi);
        if (selectedCar) {
            setPassengerLimit(selectedCar.MODL_PASS_CAP);  // Update the passenger limit based on selected taxi
        }
    };
    return (
        <div className="main-banner wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.25s">
            {loading && <Preloader />}
            {!mapStatus ?
                <div className="container">
                    <div className="row">


                        <div className="expense-form">
                            <div className="title-form wow fadeInDown" data-wow-duration="2s" data-wow-delay="2.4s">
                                <span className="span-form"> <h4>Self Taxi Booking </h4></span>
                                <span className='span-form'>
                                    <span
                                        className='span1'
                                        onClick={() => handleSetSection(1)}
                                        style={{
                                            backgroundColor:
                                                mob && poVisit // All inputs filled
                                                    ? '#28a745'
                                                    : (!mob || !poVisit) && currentSection === 1 // Any input is empty and current section is 1
                                                        ? 'yellow'
                                                        : 'white', // Any input is empty and current section is not 1
                                            color:
                                                mob && poVisit // All inputs filled
                                                    ? 'white'  // Set text color to white only when background is green
                                                    : 'black', // Default text color for other backgrounds
                                        }}
                                    >
                                        <i className="material-icons">person</i>&nbsp; Personal Details &nbsp;

                                        {/* Conditional rendering based on background color */}
                                        {mob && poVisit ? (
                                            <i className="material-icons" style={{ fontSize: 15 }}>task_alt</i>
                                        ) : (
                                            <i className="material-icons" style={{ fontSize: 15 }}>arrow_forward_ios</i>
                                        )}
                                    </span>

                                    <span
                                        className='span2'
                                        onClick={() => handleSetSection(2)}
                                        style={{
                                            backgroundColor:
                                                pickup && destination && waypoint && chooseTaxi && dtime && atime // All inputs filled
                                                    ? '#28a745'
                                                    : (!pickup || !destination || !waypoint || !chooseTaxi || !dtime || !atime) && currentSection === 2 // Any input is empty and current section is 2
                                                        ? 'yellow'
                                                        : 'white', // Any input is empty and current section is not 2
                                            color:
                                                pickup && destination && waypoint && chooseTaxi && dtime && atime // All inputs filled
                                                    ? 'white'  // Set text color to white only when background is green
                                                    : 'black', // Default text color for other backgrounds
                                        }}
                                    >
                                        <i className="material-icons">directions_car</i>&nbsp; Travel Details &nbsp;

                                        {/* Conditional rendering based on background color */}
                                        {pickup && destination && waypoint && chooseTaxi && dtime && atime ? (
                                            <i className="material-icons" style={{ fontSize: 15 }}>task_alt</i>
                                        ) : (
                                            <i className="material-icons" style={{ fontSize: 15 }}>arrow_forward_ios</i>
                                        )}
                                    </span>

                                    <span className='dropdown span3'
                                        style={{
                                            backgroundColor: getBackgroundColor(),
                                            color: getTextColor()
                                        }}
                                    >


                                        {/* <li className="dropdown"> */}
                                        <span
                                            data-toggle="dropdown"
                                            className="dropdown-toggle"
                                        //  onClick={() => handleSetSection(3)}

                                        >
                                            {/* Conditional rendering for passengerSection */}
                                            {passengerSection === 0 ? (
                                                // Show the person_add icon if passengerSection is 0
                                                <>
                                                    <i className="material-icons">person_add</i>
                                                    <span style={{ marginTop: 3.5 }}>
                                                        &nbsp; Passenger Details &nbsp;
                                                    </span>
                                                    <span className="caret" style={{ marginTop: 11 }}></span> &nbsp;
                                                </>
                                            ) : (
                                                // Show a badge with the value of passengerSection if it's not 0
                                                <>
                                                    <span className="badge" style={{ backgroundColor: 'tomato', color: 'white' }}>
                                                        {passengerSection}
                                                    </span>
                                                    <span>
                                                        &nbsp; Passenger Details &nbsp;
                                                    </span>
                                                    <span className="caret" style={{ marginTop: 6 }}></span> &nbsp;
                                                </>
                                            )}
                                        </span>

                                        <ul className="dropdown-menu" style={{ marginLeft: 12 }}>
                                            {passenger < passengerLimit && (
                                                <li onClick={addPassenger}><a style={{ display: 'flex' }}> <span style={{ marginTop: 0, fontSize: 12 }}>Add Passenger &nbsp;&nbsp; &nbsp; &nbsp;  </span>
                                                    <i className="material-icons" style={{ fontSize: 18 }}>  add_circle</i></a></li>
                                            )}
                                            {passenger >= 1 && (
                                                Array.from({ length: passenger }).map((_, index) => (
                                                    <li key={index} onClick={() => handleSetPassengerSection(Math.ceil((index + 1) / 2))} className="mbooking">
                                                        <a style={{ display: 'flex' }}>
                                                            <span style={{ marginTop: 0, marginRight: -2, fontSize: 12 }}>
                                                                Passenger Details {index + 1} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            </span>
                                                            {/* Optional delete icon */}
                                                            {/* <i className="material-icons" style={{ fontSize: 18 }}>delete</i> */}
                                                        </a>
                                                    </li>
                                                ))
                                            )}

                                            {/* <li className={props.mbooking} ><a href="/mbook" style={{ display: 'flex' }}> <span style={{ marginTop: 0, marginRight: -2, fontSize: 12 }}>Passenger : 1&nbsp;&nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  </span>
                                            <i className="material-icons" style={{ fontSize: 18 }}>  delete</i></a></li> */}

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


                                            <div className="button-group wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                                {/* Clear Button with subtle styling (unforced) */}

                                                <button
                                                    type="button"
                                                    id='clearButton'
                                                    onClick={handleReset}
                                                    style={{
                                                        backgroundColor: 'white',
                                                        border: '2px solid #FFD700',  // Taxi yellow border
                                                        color: '#333',                // Neutral dark gray text
                                                        padding: '10px 20px',
                                                        borderRadius: '5px',
                                                        boxShadow: 'none',            // No shadow for subtlety
                                                        cursor: 'pointer',
                                                        transition: 'background-color 0.3s ease'
                                                    }}
                                                    onMouseOver={(e) => e.target.style.backgroundColor = '#f9f9f9'}  // Subtle hover effect
                                                    onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
                                                ><i className="material-icons" style={{ fontSize: 18, verticalAlign: 'middle', marginBottom: '1px' }}>delete_forever</i>
                                                    Clear
                                                </button>

                                                {/* Save & Next Button (forced, highlighted) */}
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
                                                        // fontWeight: 'bold',           // Bold text for emphasis
                                                        cursor: 'pointer',
                                                        transition: 'background-color 0.3s ease'
                                                    }}
                                                    onMouseOver={(e) => e.target.style.backgroundColor = '#F6E871'}  // Hover for a slightly lighter yellow
                                                    onMouseOut={(e) => e.target.style.backgroundColor = '#FFD700'}
                                                >
                                                    Save & Next <i className="material-icons" style={{ fontSize: 12 }}>send</i>
                                                </button>
                                            </div>



                                        </form>
                                    )}


                                    {/* Section 2 */}
                                    {currentSection === 2 && (
                                        <form>

                                            <div className="form-test wow fadeIn" data-wow-duration="2s" data-wow-delay="1.6s">

                                                <div className="form-group-t">
                                                    <label>Pickup Point *</label>
                                                    <input
                                                        type="text"
                                                        className='input-t'
                                                        placeholder="e.g. New Delhi"
                                                        value={pickup}
                                                        onClick={(e) => setMapStatus(true)}
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
                                                        value={waypoint}
                                                        onChange={(e) => setWaypoint(e.target.value)}
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
                                                        value={chooseTaxi}
                                                        onChange={handleTaxiChange}
                                                    >
                                                        {model.map((car) => (
                                                            <option key={car.MODL_CODE} value={car.MODL_CODE}>
                                                                {car.MODL_CODE}
                                                            </option>
                                                        ))}
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

                                                {passengerSection === 0 ? (
                                                    // Submit Button when passengerSection is 0
                                                    <button
                                                        type="button"
                                                        id="submitButton"
                                                        onClick={handleSubmit}
                                                        //  disabled={true}  // Disable the button
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
                                    )}



















































                                    {/* Current section Section 3 */}
                                    {/* {(currentSection === 3) && ( */}



                                    {/* )} */}
                                    {/* 
////////////////////////////////////////////// */}
                                    {/* Current section Section 4 */}







                                    {currentSection >= 3 && (
                                        <form>
                                            <div>
                                                {/* Loop through passenger sections, with pairs determined by currentSection */}
                                                {Array.from({ length: passenger }).map((_, index) => {
                                                    const currentPassengerSection = Math.ceil((index + 1) / 2); // Calculate current passenger section

                                                    return (
                                                        <div key={index}>
                                                            {currentPassengerSection === passengerSection && (
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
                                                                        &nbsp;&nbsp;&nbsp;Passenger Details {index + 1}
                                                                        {passenger === index + 1 && (
                                                                            <i
                                                                                className="material-icons"
                                                                                onClick={() => setPassenger(passenger - 1)}
                                                                                style={{ fontSize: 18, float: 'right', marginRight: 10 }}
                                                                            >
                                                                                delete
                                                                            </i>
                                                                        )}
                                                                    </Typography>
                                                                    <div className="form-test">
                                                                        <div className="form-group-t" style={{ position: 'relative', display: 'inline-block' }}>
                                                                            <label>Passenger Staff Id *</label>

                                                                            <div style={{ position: 'relative', display: 'inline-block' }}>
                                                                                <input
                                                                                    type="number" style={{ paddingRight: '50px' }}
                                                                                    className='input-t'
                                                                                    placeholder="eg. 598801"
                                                                                    defaultValue={passengerData[index] ? passengerData[index].pStaffId : ""}

                                                                                    onChange={(e) => handleChange(index, 'pStaffId', e.target.value)}
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
                                                                                    onClick={() => handleEmployeeSearch(index)}
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
                                                                                value={passengerData[index] ? passengerData[index].pName : ""}
                                                                                onChange={(e) => handleChange(index, 'pName', e.target.value)}
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
                                                                                value={passengerData[index] ? passengerData[index].pMob : ""}
                                                                                onChange={(e) => handleChange(index, 'pMob', e.target.value)}
                                                                                required
                                                                            />
                                                                        </div>
                                                                        <div className="form-group-t">
                                                                            <label>Passenger Dept. *</label>
                                                                            <input
                                                                                type="text"
                                                                                className='input-t'
                                                                                placeholder="e.g. APPS"
                                                                                value={passengerData[index] ? passengerData[index].pDept : ""}
                                                                                onChange={(e) => handleChange(index, 'pDept', e.target.value)}
                                                                                required
                                                                                readOnly={!editableFields.designation}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                </>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            {/* Button Group */}
                                            <div className="button-group wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                                {/* Back Button */}
                                                <button
                                                    type="button"
                                                    id="backButton"
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
                                    )}



                                    {/* {(currentSection === 3) && (passengers.length === 0) && (
                                    <div className="animation-container-form">
                                        <DotLottieReact className='ani'
                                            src="/animations/animation2.lottie"
                                            loop
                                            autoplay
                                        />
                                    </div>
                                )} */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : null}
            {mapStatus ? <Map setPickup={setPickup} setDestination={setDestination} setMapStatus={setMapStatus} setAproxKM={setAproxKM} setWaypoint={setWaypoint} /> : null}

        </div>
    );
};

export default MBookingForm;
