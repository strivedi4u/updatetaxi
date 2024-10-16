import React from 'react';

import Navbar from '../components/Navbar';
import ViewForm1 from '../components/ViewForm1';
function View1() {
    return (<>
        <Navbar vrequest={"book"} />
        <ViewForm1 />
    </>
    );
}

export default View1;
