import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import MBookingForm from '../components/MBookingForm';
import TestBookingForm from '../components/TestBookingForm';
function MBooking() {
    const [emplId, setEmplId] = useState();
    const [emplName, setEmplName] = useState();
    console.log('page setEmplId', setEmplId)
    console.log('page EmplId', emplId)
    return (<>
        <Navbar mbooking={"book"}
            setEmplId={setEmplId}
            setEmplName={setEmplName}
            emplId={emplId} // Passing emplId to Navbar if you need it
            emplName={emplName} />
        {/* <MBookingForm emplId={emplId}
            emplName={emplName} /> */}

<TestBookingForm emplId={emplId}
            emplName={emplName} />
    </>
    );
}

export default MBooking;
