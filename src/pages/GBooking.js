import React,{useState} from 'react';

import Navbar from '../components/Navbar';
import GBookingForm from '../components/GBookingForm';

function GBooking() {
    const [emplId, setEmplId] = useState();
    const [emplName, setEmplName] = useState();
    return (<>
        <Navbar gbooking={"book"}
            setEmplId={setEmplId}
            setEmplName={setEmplName}
            emplId={emplId} // Passing emplId to Navbar if you need it
            emplName={emplName} />
        <GBookingForm emplId={emplId}
            emplName={emplName} />
    </>
    );
}

export default GBooking;
