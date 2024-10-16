import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { encryptData } from '../utils/encryption';
import '../assets/css/profile.css';
import '../assets/css/login.css';
import Navbar from '../components/Navbar';
import UserProfile from '../components/UserProfile';

function TestLogin() {
    const API_KEY = process.env.REACT_X_API_KEY;
    const URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    // Initialize the state with the default values for controlled inputs
    var [UserName, setUserName] = useState('598801');
    var [UserPassword, setUserPassword] = useState('Wh@t!5Th1s?');
    const API = URL + '/login';

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let encryptUserName = encryptData(UserName);
        let encryptUserPassword = encryptData(UserPassword);

        // Make the API request using axios
        axios.post(API, {
            UserName: encryptUserName,
            Password: encryptUserPassword
        }, {
            headers: {
                "x-api-key": API_KEY
            }
        })
            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('UserName', encryptUserName);
                    swal("Good job!", "Successfully saved", "success");
                    navigate('/');
                } else {
                    swal("Unfortunately!", "Unsuccessfully saved", "error");
                }
            })
            .catch((error) => {
                console.log(error);
                swal("Unfortunately!", error.response.data.error, "error");
            });
    }

    return (
        <>
            {/* Navbar and UserProfile components can be rendered here if needed */}
            {/* <Navbar />
            <UserProfile /> */}

            {/* Login Form */}
            <div className="login-form">
                <form onSubmit={handleFormSubmit} method='post' encType='multipart/form-data'><br></br><br></br><br></br><br></br>
                    {/* <div className="avatar">
                        <img
                            src=""
                            // className="avatar"
                            alt="Avatar"
                        /> */}
                        {/* <i className="material-icons">&#xE7FF;</i> */}
                    {/* </div> */}
                    <h3 style={{alignItems:'center'}}>&nbsp;&nbsp;Welcome to Taxi Rental</h3><br></br><br></br>
                    <h4 className="modal-title">Login to Your Account</h4>

                    {/* Username Input Field */}
                    <div className="form-group">
                        <input
                            value={UserName}
                            onChange={e => setUserName(e.target.value)}
                            type="text"
                            className="form-control"
                            required="required"
                        />
                    </div>

                    {/* Password Input Field */}
                    <div className="form-group">
                        <input
                            type="password"
                            value={UserPassword}
                            onChange={e => setUserPassword(e.target.value)}
                            className="form-control"
                            placeholder="Password"
                            required="required"
                        />
                    </div>

                    {/* Submit Button */}
                    <input
                        type="submit"
                        className="btn btn-primary btn-block btn-lg"
                        value="Login"
                    />
                </form>
            </div>
        </>
    );
}

export default TestLogin;
