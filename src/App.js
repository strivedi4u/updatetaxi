import React, { useState, useEffect } from 'react';
import './assets/css/style.css';
import './assets/css/animated.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from './pages/Home';
import GBooking from './pages/GBooking';
import MBooking from './pages/MBooking';
import VRequest from './pages/VRequest';
import Profile from './pages/Profile';
import TaxiRentalSystem from './pages/ApiTest';
import Form from './components/Form';
import Request from './components/Request';
import View from './pages/View';
import View1 from './pages/View1';
import TestLogin from './pages/TestLogin';
import MasterLandingPage from './pages/MasterLandingPage';
import MasterInputTaxi from './pages/MasterInputTaxi';
import MasterInputModel from './pages/MasterInputModel';
import MasterInputDriver from './pages/MasterInputDriver';
import MasterInputVendor from './pages/MasterInputVendor';
import MasterInputTaxiRate from './pages/MasterInputTaxiRate';
import MasterInputTaxiClass from './pages/MasterInputTaxiClass';
import Map from './components/Map';
import { decryptData } from './utils/encryption';
import { GetUserRole } from './apis/GetUserRole';
import { GetEmployeeProfile } from './apis/GetEmployeeProfile';
import { WOW } from 'wowjs';
import './assets/css/animated.css'; // Import the animation CSS
import Preloader from './components/Preloader';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState(null);
  const [userName, setUserName] = useState(localStorage.getItem('UserName'));

  const [profilePhoto, setProfilePhoto] = useState();
  const [emplId, setEmplId] = useState();
  const [emplName, setEmplName] = useState();
  const [desg, setDesg] = useState();
  const [mob, setMob] = useState();
  const [comp, setComp] = useState();
  const [approver, setApprover] = useState();
  const [costCenter, setCostCenter] = useState();


  useEffect(() => {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
    });
    wow.init();
  }, []);


  useEffect(() => {
    const getUserData = async () => {
      console.log('  // Fetch user data and role', userName);
      setLoading(true);
      try {
        const emplData = await GetEmployeeProfile(userName);
        console.log(emplData);
        setEmplId(decryptData(emplData.EMPL_ID));
        console.log("hello");
        setEmplName(decryptData(emplData.EMPL_NAME));
        setProfilePhoto(emplData.profile_photo);
        setDesg(decryptData(emplData.EMPL_DESG_CODE));
        setMob(decryptData(emplData.PRESENT_PHONE));
        setComp(decryptData(emplData.EMPL_COMP_CODE));
        setApprover(decryptData(emplData.EMPL_REPORT_EMPL_ID));
        // setCostCenter(decryptData(emplData.COST_CENTER));

        const userRole = await GetUserRole(userName);
        setRole(userRole);


      } catch (error) {
        console.error("Error fetching user data:", error);
        setRole('Error');
        // navigate('/login'); // Redirect to login on error
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, [userName]);

  if (loading) {
    return <Preloader />; // Optionally show a loading indicator
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home userName={userName} role={role} emplId={emplId} emplName={emplName} profilePhoto={profilePhoto} />} />
          <Route exact path="/gbook" element={<GBooking />} />
          <Route exact path="/mbook" element={<MBooking userName={userName} role={role} emplId={emplId} emplName={emplName} profilePhoto={profilePhoto} desg={desg} mob={mob} comp={comp} approver={approver} costCenter={costCenter} />} />
          <Route exact path="/vrequest" element={<VRequest userName={userName} role={role} emplId={emplId} emplName={emplName} profilePhoto={profilePhoto} desg={desg} mob={mob} comp={comp} approver={approver} costCenter={costCenter} />} />
          
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/api" element={<TaxiRentalSystem />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/request" element={<Request />} />
          <Route exact path="/view" element={<View />} />
          <Route exact path="/view1/:reqId" element={<View1 userName={userName} role={role} emplId={emplId} emplName={emplName} profilePhoto={profilePhoto} desg={desg} mob={mob} comp={comp} approver={approver} costCenter={costCenter} />} />
          <Route exact path="/login" element={<TestLogin userName={userName} role={role} setUserName={setUserName} />} />
          <Route exact path="/master" element={<MasterLandingPage />} />
          <Route exact path="/masterInputTaxi" element={<MasterInputTaxi />} />
          <Route exact path="/masterInputModel" element={<MasterInputModel />} />
          <Route exact path="/masterInputDriver" element={<MasterInputDriver />} />
          <Route exact path="/masterInputVendor" element={<MasterInputVendor />} />
          <Route exact path="/masterInputTaxiRate" element={<MasterInputTaxiRate />} />
          <Route exact path="/MasterInputTaxiClass" element={<MasterInputTaxiClass />} />
          <Route exact path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
