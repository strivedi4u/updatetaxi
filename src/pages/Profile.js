import React from 'react';
import '../assets/css/profile.css';
import Navbar from '../components/Navbar';
import UserProfile from '../components/UserProfile';

function Profile() {
    return (<>
        <Navbar profile={"book"} />
        <div className="App">
            <UserProfile />
        </div>
    </>
    );
}

export default Profile;
