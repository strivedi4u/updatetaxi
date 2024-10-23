import React, { useState, useEffect } from "react";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Preloader from "../components/Preloader";

const Home = ({ userName, role, emplId, emplName, profilePhoto }) => {
  const navigate = useNavigate();

  console.log('Home Page', userName);
  console.log('role', role);

  // const [emplId, setEmplId] = useState();
  // const [emplName, setEmplName] = useState();


  useEffect(() => {
    const checkNavigate = async () => {
      if (role === 'ADMIN') {
        navigate('/masterScreen');
      } else if (role === 'SUPERVISOR') {
        navigate('/');
      }
      else if (role === 'USER') {
      }
      else if (role === 'Error') {
        navigate('/login');
      }
    };

    checkNavigate();
  }, [userName, role, navigate]);

  if (!userName || !role) {
    return <Preloader />;
  }


  return (
    <>
      <Navbar
        home="book"
        emplId={emplId}
        emplName={emplName}
        profilePhoto={profilePhoto}
      />
      <MainContent />
    </>
  );
};

export default Home;
