// src/components/Home.js
import React from "react";

import Table from "../components/Table";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

const PendingRequest = () => {

    return (
        <>   
        <div className="templatemo-flex-row">
           <Sidebar/>
            <div class="templatemo-content col-1 light-gray-bg">
                 <Navbar />
                 <Table />
            </div>
        </div>
          
        </>
    );
};

export default PendingRequest;
