import React from 'react';

import Navbar from '../components/Navbar';
import TaxiDetailsForm from '../components/TaxiDetailsForm';
import Sidebar from '../components/Sidebar';
import MasterSidebar from '../components/MasterSidebar';

function Taximaster() {
    return (<>
        <Navbar TaxiDetailsForm={""} />
        <TaxiDetailsForm />
        <MasterSidebar/>
    </>
    );
}

export default Taximaster;
