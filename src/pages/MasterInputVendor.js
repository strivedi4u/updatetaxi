import React from "react";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
import MasterHome from "../components/MasterHome";
import InputVendor from "../components/InputVendor";
import App from "../components/TaxiDetailsForm";
const MasterInputVendor = () => {

  return (
    <>
      <Navbar home={"book"} />
      <InputVendor/>

    </>
  );
};


export default MasterInputVendor;
