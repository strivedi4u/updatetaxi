import React,{useState} from "react";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
// import MasterHome from "../components/MasterHome";
// import TaxiDetailsForm from "../components/TaxiDetailsForm";
import App from "../components/InputModel";
import InputModel from "../components/InputModel";

const MasterInputModel = () => {
  const [emplId, setEmplId] = useState();
  const [emplName, setEmplName] = useState();
  return (
    <>
    
          <Navbar master={"book"}
            setEmplId={setEmplId}
            setEmplName={setEmplName}
            emplId={emplId} // Passing emplId to Navbar if you need it
            emplName={emplName} />
      <App/>

    </>
  );
};


export default MasterInputModel;
