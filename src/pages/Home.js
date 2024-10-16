import React,{useState} from "react";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
const Home = () => {
  const [emplId, setEmplId] = useState();
  const [emplName, setEmplName] = useState();
  return (<>
      <Navbar home={"book"}
          setEmplId={setEmplId}
          setEmplName={setEmplName}
          emplId={emplId} // Passing emplId to Navbar if you need it
          emplName={emplName} />
      <MainContent />
    </>
  );
};


export default Home;
