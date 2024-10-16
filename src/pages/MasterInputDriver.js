import React from "react";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
import MasterHome from "../components/MasterHome";
import TaxiDetailsForm from "../components/TaxiDetailsForm";
import App from "../components/TaxiDetailsForm";
import InputDriver from "../components/InputDriver"
const MasterInputDriver = () => {

  return (
    <>
      <Navbar home={"book"} />
      <InputDriver/>

    </>
  );
};


export default MasterInputDriver;
