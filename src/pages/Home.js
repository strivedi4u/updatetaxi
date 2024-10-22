import React, { useState, useEffect } from "react";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Home = ({ userName, role }) => {
  console.log('Home Page', userName);
  console.log('role', role);
  const navigate = useNavigate();
  const [emplId, setEmplId] = useState();
  const [emplName, setEmplName] = useState();

  useEffect(() => {
    const checkNavigate = async () => {
      if (!userName) {  // Redirect to login if userName is not available
        navigate('/login');
      }else{
                // Redirect based on role
         if (!role) {
          navigate('/');
        // } else if (userRole === 'SUPERVISOR') {
        //   navigate('/home');
        // } else {
        //   navigate('/login');
        // }
      }
    };

    checkNavigate(); // Call the async function
  }, [userName, navigate]); // Ensure 'navigate' is added to the dependency array
  
  return (
    <>
      <Navbar 
        home="book"
        setEmplId={setEmplId}
        setEmplName={setEmplName}
        emplId={emplId} // Passing emplId to Navbar if you need it
        emplName={emplName}
      />
      <MainContent />
    </>
  );
};

export default Home;
