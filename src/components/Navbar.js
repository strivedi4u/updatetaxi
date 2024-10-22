import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/navbar.css';
import swal from 'sweetalert';
import logo from '../assets/images/logo.jpg';
import axios from 'axios';
import { decryptData } from '../utils/encryption';
import Preloader from './Preloader';
import { fetchData, GetEmployeeProfile } from '../apis/GetEmployeeProfile';

const Navbar = ({ setEmplId, emplId, setEmplName, emplName, setDesg, desg, setMob, mob, setComp, comp, setApprover, approver, setCostCenter, costCenter, home, mbooking, gbooking, vrequest, uManuals, profile }) => {
    const [userData, setUserData] = useState(null); // state for storing the user data
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    console.log(emplId, emplName)
    const URL = process.env.REACT_APP_API_URL;
    const API = `${URL}/Services/GetEmployeeProfile`;

    const [UserName, setUserName] = useState(localStorage.getItem('UserName'));
    const [authToken, setAuthToken] = useState(localStorage.getItem('token'));
    const [profilePhoto, setProfilePhoto] = useState('');
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/login';
    }

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };

    useEffect(() => {
        if (!UserName || !authToken) {
            //window.location.href = '/login';
        }
    }, [UserName, authToken]);


    // useEffect(() => {
    //     const empldata= async =await fetchData();
    //     setUserData(empldata);
    //     console.log("hello");
    //     console.log(empldata);
    //     // setUserName(empldata.Value.Table1[0].EMPL_ID)
    //     // console.log((empldata.Value.Table1[0].EMPL_ID));


    // }, [userData]);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const emplData = await GetEmployeeProfile(UserName); // Wait for the fetchData to resolve
                console.log("string1", emplData);
                console.log(emplData.EMPL_NAME);
                setEmplId(decryptData(emplData.EMPL_ID));
                setEmplName(decryptData(emplData.EMPL_NAME));
                setProfilePhoto(emplData.profile_photo);
                setDesg(decryptData(emplData.EMPL_DESG_CODE));
                setMob(decryptData(emplData.PRESENT_PHONE));
                setComp(decryptData(emplData.EMPL_COMP_CODE));
                setApprover(decryptData(emplData.EMPL_REPORT_EMPL_ID));
                setCostCenter();
                setUserData(emplData); // Set the data into the state

                console.log("Data fetched:", emplData);
            } catch (error) {
                console.error("Error in useEffect:", error);
            } finally {
                setLoading(false);
            }
        };

        getData(); // Call the async function
    }, []);

    return (
        <>
            {emplId ? (
                <nav className="navbar wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <span><img src={logo} alt="Logo" /></span>
                            <span>&nbsp;&nbsp;&nbsp;Taxi Rental<b> System</b></span>
                        </a>
                        <button
                            type="button"
                            data-target="#navbarCollapse"
                            data-toggle="collapse"
                            className="navbar-toggle"
                            onClick={toggleNavbar}
                        >
                            <span className="navbar-toggler-icon"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>

                    <div id="navbarCollapse" className={`collapse navbar-collapse ${!isCollapsed ? 'in' : ''}`}>
                        <ul className="nav navbar-nav">
                            <li className={home}><a href="/">Home</a></li>
                            <li className="dropdown">
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                    Booking <b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className={mbooking}><a href="/mbook">Self Booking</a></li>
                                    <li className={gbooking}><a href="/gbook">On Behalf Booking</a></li>
                                    <li className={gbooking}><a href="/gbook">Guest Booking</a></li>
                                    <li className={gbooking}><a href="/gbook">Master Screen</a></li>

                                </ul>
                            </li>
                            <li className={vrequest}><a href="/vrequest">View Request</a></li>
                            <li className={uManuals}><a href="/">User Manuals</a></li>
                            <li className={uManuals}><a href="/master">Master Screens</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#" className="notifications">
                                    <i className="fa fa-bell-o"></i>
                                    <span className="badge">1</span>
                                </a>
                            </li>
                            <li className={`${profile} dropdown`}>
                                <a href="#" data-toggle="dropdown" className="dropdown-toggle user-action">
                                    <img src={profilePhoto} className="avatar" alt="Avatar" />
                                    {emplName} <b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="/profile"><i className="fa fa-user-o"></i> Profile</a></li>
                                    <li className="divider"></li>
                                    <li><a onClick={handleLogout}><i className="material-icons">&#xE8AC;</i> Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            ) : <Preloader />}
        </>
    );
};

export default Navbar;
