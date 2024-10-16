// src/components/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import CSS specific to Home component
import Navbar from "./Navbar";
import MainContent from "./MainContent";

const Home = () => {

  return (
<>
<MainContent />
</>
  );
};

export default Home;
