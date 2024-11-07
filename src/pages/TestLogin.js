import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { encryptData } from '../utils/encryption';
import '../assets/css/profile.css';
import '../assets/css/login.css';
import Navbar from '../components/Navbar';
import UserProfile from '../components/UserProfile';
import Preloader from '../components/Preloader';
import { Login } from '../apis/Login';

function TestLogin({ userName, role, setUserName }) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    var [loginId, setLoginId] = useState();
    var [password, setPassword] = useState();


    useEffect(() => {
        const checkNavigate = async () => {
            if (!userName || !role) {
                navigate('/login');
                // return <Preloader />;
            }
            if (role === 'ADMIN') {
                navigate('/masterScreen');
            } else if (role === 'SUPERVISOR') {
                navigate('/');
            }
            else if (role === 'USER') {
                navigate('/');
            }
            else if (role === 'Error') {
                navigate('/login');
            }
        };

        checkNavigate();
    }, [userName, role, navigate]);






    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const login = await Login(loginId, password);
            console.log("login ", login);
            localStorage.setItem('token', login);
            localStorage.setItem('UserName', loginId);
            if (login != null) {
                console.log("login HI");
                setUserName(loginId);

                navigate('/');
                swal("Good job!", "Successfully saved", "success");
            } else {
                swal("Unfortunately!", "Unsuccessfully saved", "error");
            }
        } catch (error) {
            console.error("Error in useEffect:", error);
            swal("Unfortunately!", "Unsuccessfully saved", "error");
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <>
            {/* Navbar and UserProfile components can be rendered here if needed */}
            {/* <Navbar />
            <UserProfile /> */}

            {/* Login Form */}
            <div className="login-form">
                {loading && <Preloader />}
                <form onSubmit={handleFormSubmit} method='post' encType='multipart/form-data'><br></br><br></br><br></br><br></br>
                    {/* <div className="avatar">
                        <img
                            src=""
                            // className="avatar"
                            alt="Avatar"
                        /> */}
                    {/* <i className="material-icons">&#xE7FF;</i> */}
                    {/* </div> */}
                    <h3 style={{ alignItems: 'center' }}>&nbsp;&nbsp;Welcome to Taxi Rental</h3><br></br><br></br>
                    <h4 className="modal-title">Login to Your Account</h4>

                    {/* Username Input Field */}
                    <div className="form-group">
                        <input
                            value={loginId}
                            onChange={e => setLoginId(e.target.value)}
                            type="text"
                            placeholder="Staff Id"
                            className="form-control"
                            required="required"
                        />
                    </div>

                    {/* Password Input Field */}
                    <div className="form-group">
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
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
