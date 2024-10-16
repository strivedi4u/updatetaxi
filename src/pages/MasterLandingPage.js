import React,{useState} from "react";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
// import App from "../components/TaxiDetailsForm";
import MasterSidebar from "../components/MasterSidebar";
import  ViewMasterTaxi from "../components/ViewMasterTaxi"
const MasterLandingPage = () => {
  const [emplId, setEmplId] = useState();
  const [emplName, setEmplName] = useState();
  return (
    <>
    
          <Navbar master={"book"}
            setEmplId={setEmplId}
            setEmplName={setEmplName}
            emplId={emplId} // Passing emplId to Navbar if you need it
            emplName={emplName} />
      {/* <ViewMasterTaxi/> */}
      <MasterSidebar/>

    </>
  );
};


export default MasterLandingPage;
