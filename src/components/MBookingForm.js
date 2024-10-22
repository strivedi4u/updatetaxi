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
const MBookingForm = ({
    emplId,
    emplName,
    desg,
    mob,
    comp,
    approver,
    costCenter
}) => {
    const [mobile, setMobile] = useState(mob);
    console.log('mobile', mobile)
    console.log('mob', mob)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const URL = process.env.REACT_APP_API_URL;
    const API = URL + '/Services/GetEmployeeProfile';

    const [UserName, setUserName] = useState(localStorage.getItem('UserName'));
    const [authToken, setAuthToken] = useState(localStorage.getItem('token'));

    var [currentSection, setCurrentSection] = useState(1);
    var [passengerSection, setPassengerSection] = useState(0);

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
                const employeeLookup = await getEmployeeLookup(approver);// Replace with your API URL
                const model = await getModel();
                setApproverName(decryptData(employeeLookup.Name));
                setModel(model); 
                setChooseTaxi(model.Value[0].MODL_ID);// Assuming the approver is in the response's data
            } catch (error) {
                console.error('Error fetching approver data:', error);
            } finally {
                setLoading(false); // Stop loading after the API call
            }
        };

        fetchData(); // Call the function
    }, [approver], [chooseTaxi]);

    const handleEmployeeSearch1 = async () => {
        if (pStaffId1 === '000000') {
            // Update editable fields based on pStaffId1
            setEditableFields({
                name: pStaffId1 === '000000',
                designation: pStaffId1 === '000000',
            });
        } else {
            try {
                setLoading(true);
                setEditableFields({
                    name: false,
                    designation: false,
                });
                const employeeLookup = await getEmployeeLookup(pStaffId1); // Wait for the fetchData to resolve
                console.log("employeeLookup ", employeeLookup);// Set the data into the state
                setPName1(decryptData(employeeLookup.Name));
                setPMob1(decryptData(employeeLookup.MOB_NO));
                console.log('hi', decryptData(employeeLookup.MOB_NO))
                console.log(pMob1);
                setPDept1(decryptData(employeeLookup.Dept));
            } catch (error) {
                console.error("Error in useEffect:", error);
            }
            finally {
                setLoading(false); // Stop loading after the API call
            }
        }


    };

    const handleEmployeeSearch2 = async () => {
        if (pStaffId1 === '000000') {
            // Update editable fields based on pStaffId1
            setEditableFields({
                name: pStaffId2 === '000000',
                designation: pStaffId2 === '000000',
            });
        } else {
            try {
                setLoading(true);
                setEditableFields({
                    name: false,
                    designation: false,
                });
                const employeeLookup = await getEmployeeLookup(pStaffId2); // Wait for the fetchData to resolve
                console.log("employeeLookup ", employeeLookup);// Set the data into the state
                setPName2(decryptData(employeeLookup.Name));
                setPMob2(decryptData(employeeLookup.MOB_NO));
                console.log('hi', decryptData(employeeLookup.MOB_NO))
                console.log(pMob2);
                setPDept2(decryptData(employeeLookup.Dept));
            } catch (error) {
                console.error("Error in useEffect:", error);
            } finally {
                setLoading(false); // Stop loading after the API call
            }
        }
    };

    const handleEmployeeSearch3 = async () => {
        if (pStaffId3 === '000000') {
            // Update editable fields based on pStaffId1
            setEditableFields({
                name: pStaffId3 === '000000',
                designation: pStaffId3 === '000000',
            });
        } else {
            try {
                setLoading(true);
                setEditableFields({
                    name: false,
                    designation: false,
                });
                const employeeLookup = await getEmployeeLookup(pStaffId3);
                console.log("employeeLookup ", employeeLookup);// Set the data into the state
                setPName3(decryptData(employeeLookup.Name));
                setPMob3(decryptData(employeeLookup.MOB_NO));
                console.log('hi', decryptData(employeeLookup.MOB_NO))
                console.log(pMob3);
                setPDept3(decryptData(employeeLookup.Dept));
            } catch (error) {
                console.error("Error in useEffect:", error);
            } finally {
                setLoading(false); // Stop loading after the API call
            }
        }
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
    const [poVisit, setPoVisit] = useState();

    const [pickup, setPickup] = useState();
    const [destination, setDestination] = useState();
    const [waypoints, setWaypoints] = useState();
    const [approxKM, setAproxKM] = useState();

    // const [costCenter, setCostCenter] = useState();
    const [dtime, setDtime] = useState();
    const [atime, setAtime] = useState();

    // State for first set
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



    // Initialize the state with the default values for controlled inputs

    // Function to handle adding a new passenger
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
        <div className="main-banner wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.25s">
            {loading && <Preloader />}
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
                                            pickup && destination && waypoints && chooseTaxi && dtime && atime // All inputs filled
                                                ? '#28a745'
                                                : (!pickup || !destination || !waypoints || !chooseTaxi || !dtime || !atime) && currentSection === 2 // Any input is empty and current section is 2
                                                    ? 'yellow'
                                                    : 'white', // Any input is empty and current section is not 2
                                        color:
                                            pickup && destination && waypoints && chooseTaxi && dtime && atime // All inputs filled
                                                ? 'white'  // Set text color to white only when background is green
                                                : 'black', // Default text color for other backgrounds
                                    }}
                                >
                                    <i className="material-icons">directions_car</i>&nbsp; Travel Details &nbsp;

                                    {/* Conditional rendering based on background color */}
                                    {pickup && destination && waypoints && chooseTaxi && dtime && atime ? (
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
                                        {passengerSection < 4 && (
                                            <li onClick={addPassenger}><a style={{ display: 'flex' }}> <span style={{ marginTop: 0, fontSize: 12 }}>Add Passenger &nbsp;&nbsp; &nbsp; &nbsp;  </span>
                                                <i className="material-icons" style={{ fontSize: 18 }}>  add_circle</i></a></li>
                                        )}

                                        {/* <li className={props.mbooking} ><a href="/mbook" style={{ display: 'flex' }}> <span style={{ marginTop: 0, marginRight: -2, fontSize: 12 }}>Passenger : 1&nbsp;&nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  </span>
                                            <i className="material-icons" style={{ fontSize: 18 }}>  delete</i></a></li> */}
                                        {passengerSection >= 1 && (
                                            <li onClick={(e) => handleSetSection(3)} className={`mbooking`}>
                                                <a style={{ display: 'flex' }}>
                                                    <span style={{ marginTop: 0, marginRight: -2, fontSize: 12 }}>
                                                        Passenger Details 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    </span>
                                                    {/* <i className="material-icons" style={{ fontSize: 18 }}>delete</i> */}
                                                </a>
                                            </li>
                                        )}

                                        {passengerSection >= 3 && (
                                            <li className={`mbooking`}>
                                                <a onClick={(e) => handleSetSection(4)} style={{ display: 'flex' }}>
                                                    <span style={{ marginTop: 0, marginRight: -2, fontSize: 12 }}>
                                                        Passenger Details 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    </span>
                                                    {/* <i className="material-icons" style={{ fontSize: 18 }}>delete</i> */}
                                                </a>
                                            </li>
                                        )}

                                        {/* {passengerSection >= 3 && (
                                            <li className={`mbooking`}>
                                                <a style={{ display: 'flex' }}>
                                                    <span style={{ marginTop: 0, marginRight: -2, fontSize: 12 }}>
                                                        Passenger: {passengerSection}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    </span>
                                                    <i className="material-icons" style={{ fontSize: 18 }}>delete</i>
                                                </a>
                                            </li>
                                        )}
                                        {passengerSection === 4 && (
                                            <li className={`mbooking`}>
                                                <a style={{ display: 'flex' }}>
                                                    <span style={{ marginTop: 0, marginRight: -2, fontSize: 12 }}>
                                                        Passenger: {passengerSection}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    </span>
                                                    <i className="material-icons" style={{ fontSize: 18 }}>delete</i>
                                                </a>
                                            </li>
                                        )} */}
                                        {/* {passengers.map((passenger, index) => (
                                                <li key={index} className={`mbooking-${index + 1}`}>
                                                    <a style={{ display: 'flex' }}>
                                                        <span style={{ marginTop: 0, marginRight: -2, fontSize: 12 }}>
                                                            Passenger: {passenger.passengerNumber}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        </span>
                                                        <i className="material-icons" style={{ fontSize: 18 }}>delete</i>
                                                    </a>
                                                </li>
                                            ))} */}
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
                                                <label>Staff No. *</label>
                                                <input
                                                    type="number"
                                                    className='input-t'
                                                    value={emplId}
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
                                                    value={mob}
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
                                                    value={chooseTaxi}
                                                    onChange={(e) => setChooseTaxi(e.target.value)}
                                                >
                                                    {model.map((car) => (
                                                        <option key={car.MODL_ID} value={car.MODL_ID}>
                                                            {car.MODL_NAME}
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
                                )}



















































                                {/* Current section Section 3 */}
                                {(currentSection === 3) && (

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
                                                    <div className="form-group-t" style={{ position: 'relative', display: 'inline-block' }}>
                                                        <label>Passenger Staff Id *</label>

                                                        <div style={{ position: 'relative', display: 'inline-block' }}>
                                                            <input
                                                                type="number" style={{ paddingRight: '50px' }}
                                                                className='input-t'
                                                                placeholder="eg. 598801"
                                                                value={pStaffId1}
                                                                onChange={(e) => setPStaffId1(e.target.value)}
                                                                required
                                                            />
                                                            {/* Submit Icon */}
                                                            <i
                                                                className="material-icons" // FontAwesome icon (or use an image <img src="..."/>)
                                                                style={{
                                                                    position: 'absolute',
                                                                    right: '15px',
                                                                    top: '50%',
                                                                    fontSize: 18,
                                                                    transform: 'translateY(-50%)',
                                                                    cursor: 'pointer',
                                                                    color: '#888'  // Change the color as per your design
                                                                }} onClick={handleEmployeeSearch1}>
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
                                                            value={pName1}
                                                            onChange={(e) => setPName1(e.target.value)}
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
                                                            readOnly={!editableFields.designation}
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
                                                    <div className="form-group-t" style={{ position: 'relative', display: 'inline-block' }}>
                                                        <label>Passenger Staff Id *</label>

                                                        <div style={{ position: 'relative', display: 'inline-block' }}>
                                                            <input
                                                                type="number" style={{ paddingRight: '50px' }}
                                                                className='input-t'
                                                                placeholder="eg. 598801"
                                                                value={pStaffId2}
                                                                onChange={(e) => setPStaffId2(e.target.value)}
                                                                required
                                                            />
                                                            {/* Submit Icon */}
                                                            <i
                                                                className="material-icons" // FontAwesome icon (or use an image <img src="..."/>)
                                                                style={{
                                                                    position: 'absolute',
                                                                    right: '15px',
                                                                    top: '50%',
                                                                    fontSize: 18,
                                                                    transform: 'translateY(-50%)',
                                                                    cursor: 'pointer',
                                                                    color: '#888'  // Change the color as per your design
                                                                }} onClick={handleEmployeeSearch2}>
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
                                                            value={pName2}
                                                            onChange={(e) => setPName2(e.target.value)}
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
                                                            readOnly={!editableFields.designation}
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

                                )}


                                {/* Current section Section 4 */}
                                {(currentSection === 4) && (

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
                                                    <div className="form-group-t" style={{ position: 'relative', display: 'inline-block' }}>
                                                        <label>Passenger Staff Id *</label>

                                                        <div style={{ position: 'relative', display: 'inline-block' }}>
                                                            <input
                                                                type="number" style={{ paddingRight: '50px' }}
                                                                className='input-t'
                                                                placeholder="eg. 598801"
                                                                value={pStaffId3}
                                                                onChange={(e) => setPStaffId3(e.target.value)}
                                                                required
                                                            />
                                                            {/* Submit Icon */}
                                                            <i
                                                                className="material-icons" // FontAwesome icon (or use an image <img src="..."/>)
                                                                style={{
                                                                    position: 'absolute',
                                                                    right: '15px',
                                                                    top: '50%',
                                                                    fontSize: 18,
                                                                    transform: 'translateY(-50%)',
                                                                    cursor: 'pointer',
                                                                    color: '#888'  // Change the color as per your design
                                                                }} onClick={handleEmployeeSearch3}>
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
                                                            value={pName3}
                                                            onChange={(e) => setPName3(e.target.value)}
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
                                                            readOnly={!editableFields.designation}
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
                                                    <div className="form-group-t" style={{ position: 'relative', display: 'inline-block' }}>
                                                        <label>Passenger Staff Id *</label>

                                                        <div style={{ position: 'relative', display: 'inline-block' }}>
                                                            <input
                                                                type="number" style={{ paddingRight: '50px' }}
                                                                className='input-t'
                                                                placeholder="eg. 598801"
                                                                value={pStaffId4}
                                                                onChange={(e) => setPStaffId4(e.target.value)}
                                                                required
                                                            />
                                                            {/* Submit Icon */}
                                                            <i
                                                                className="material-icons" // FontAwesome icon (or use an image <img src="..."/>)
                                                                style={{
                                                                    position: 'absolute',
                                                                    right: '15px',
                                                                    top: '50%',
                                                                    fontSize: 18,
                                                                    transform: 'translateY(-50%)',
                                                                    cursor: 'pointer',
                                                                    color: '#888'  // Change the color as per your design
                                                                }} onClick={handleEmployeeSearch4}>
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
                                                            value={pName4}
                                                            onChange={(e) => setPName4(e.target.value)}
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
                                                            readOnly={!editableFields.designation}
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

export default MBookingForm;
