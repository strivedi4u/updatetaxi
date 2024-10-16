import React from 'react';

import Navbar from '../components/Navbar';
import ViewForm from '../components/ViewForm';
function View() {
    return (<>
        <Navbar vrequest={"book"} />
        <ViewForm />
    </>
    );
}

export default View;
