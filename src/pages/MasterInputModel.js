import React from "react";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
import MasterHome from "../components/MasterHome";
import TaxiDetailsForm from "../components/TaxiDetailsForm";
import App from "../components/TaxiDetailsForm";
import InputModel from "../components/InputModel"
const MasterInputModel = () => {

  return (
    <>
      <Navbar home={"book"} />
      <InputModel/>

    </>
  );
};


export default MasterInputModel;
