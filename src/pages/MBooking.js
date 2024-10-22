import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import MBookingForm from '../components/MBookingForm';
import TestBookingForm from '../components/TestBookingForm';
import BookingForm from '../components/booking';
function MBooking() {
    const [emplId, setEmplId] = useState();
    const [emplName, setEmplName] = useState();
    const [desg, setDesg] = useState();
    const [mob, setMob] = useState();
    const [comp, setComp] = useState();
    const [approver, setApprover] = useState();
    const [costCenter, setCostCenter] = useState();
    console.log('page setEmplId', setEmplId)
    console.log('page EmplId', emplId)
    return (<>
        <Navbar mbooking={"book"}
            setEmplId={setEmplId}
            setEmplName={setEmplName}
            setDesg={setDesg}
            setMob={setMob}
            setComp={setComp}
            setApprover={setApprover}
            setCostCenter={setCostCenter}

            emplId={emplId}
            emplName={emplName}
            desg={desg}
            mob={mob}
            comp={comp}
            approver={approver}
            costCenter={costCenter} />


        <MBookingForm
            emplId={emplId}
            emplName={emplName}
            desg={desg}
            mob={mob}
            comp={comp}
            approver={approver}
            costCenter={costCenter}
        />
    </>
    );
}

export default MBooking;
