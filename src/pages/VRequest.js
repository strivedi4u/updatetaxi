import React from 'react';

import Navbar from '../components/Navbar';
import Request from '../components/Request';

function vRequest() {
    return (<>
        <Navbar vrequest={"book"} />
        <Request />
    </>
    );
}

export default vRequest;
