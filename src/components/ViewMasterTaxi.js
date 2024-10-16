// App.js
import React, { useState } from 'react';
import '../assets/css/view.css';
import '../assets/css/form.css';
import taxi from '../assets/images/taxi.png';
import '../assets/css/style.css';
import '../assets/css/animated.css';
// import ViewTaxiMaster from '../pages/ViewTaxiMaster';
import MasterSidebar from './MasterSidebar';
// import UpdateTaxi from './UpdateTaxi';
// import TaxiDetailsForm from './';
import Table from './Table';
import { TextField, Checkbox, Button, FormControlLabel, Box, CircularProgress, CardMedia } from '@mui/material'; 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Lottie from 'react-lottie';
import animationData from '../animations/envelope.json';
import { Grid2 } from '@mui/material'; // Import Grid2 from Material-UI
import 'react-pro-sidebar/dist/css/styles.css';
import taxitravel1 from '../assets/images/taxitravel1.gif';

const ViewMasterTaxi = () => {
  const [showFirstComponent, setShowFirstComponent] = useState(true); 
  const [isVisible, setIsVisible] = useState(true);
  const handleEditClick = () => {
        

    // Set the visibility to false, hiding the first component (display: none)
    setIsVisible(false);

}
  return (

<div >
<div className='UpdateTaxi' style={{ display: isVisible ? 'none' : 'block' }}> 


            {/* <TaxiDetailsForm /> */}
          

</div>

<div>
  
<div class="templatemo-content-container" style={{ display: !isVisible ? 'none' : 'block' }}>
<Box sx={{ display: 'flex', height: '100vh', paddingTop:'50px'}}>
<MasterSidebar/><br></br><br></br>
            <div className="templatemo-content-widget no-padding">
                <div className="panel panel-default table-responsive">
                    <table className="table table-striped table-bordered templatemo-user-table">
                        <thead>
                            <tr>
                                <td><a href="" className="white-text templatemo-sort-by"># <span className="caret"></span></a></td>
                                <td><a href="" className="white-text templatemo-sort-by">First Name <span className="caret"></span></a></td>
                                <td><a href="" className="white-text templatemo-sort-by">Last Name <span className="caret"></span></a></td>
                                <td><a href="" className="white-text templatemo-sort-by">User Name <span className="caret"></span></a></td>
                                <td><a href="" className="white-text templatemo-sort-by">Email <span className="caret"></span></a></td>
                                <td onClick={handleEditClick} >Edit</td>
                                <td>Action</td>
                                <td>Delete</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>John</td>
                                <td>Smith</td>
                                <td>@jS</td>
                                <td>js@company.com</td>
                                <td><a href="" className="templatemo-edit-btn">Edit</a></td>
                                <td><a href="" className="templatemo-link">Action</a></td>
                                <td><a href="" className="templatemo-link">Delete</a></td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>Bill</td>
                                <td>Jones</td>
                                <td>@bJ</td>
                                <td>bj@company.com</td>
                                <td><a href="" className="templatemo-edit-btn">Edit</a></td>
                                <td><a href="" className="templatemo-link">Action</a></td>
                                <td><a href="" className="templatemo-link">Delete</a></td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>Mary</td>
                                <td>James</td>
                                <td>@mJ</td>
                                <td>mj@company.com</td>
                                <td><a href="" className="templatemo-edit-btn">Edit</a></td>
                                <td><a href="" className="templatemo-link">Action</a></td>
                                <td><a href="" className="templatemo-link">Delete</a></td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td>Steve</td>
                                <td>Bride</td>
                                <td>@sB</td>
                                <td>sb@company.com</td>
                                <td><a href="" className="templatemo-edit-btn">Edit</a></td>
                                <td><a href="" className="templatemo-link">Action</a></td>
                                <td><a href="" className="templatemo-link">Delete</a></td>
                            </tr>
                            <tr>
                                <td>5.</td>
                                <td>Paul</td>
                                <td>Richard</td>
                                <td>@pR</td>
                                <td>pr@company.com</td>
                                <td><a href="" className="templatemo-edit-btn">Edit</a></td>
                                <td><a href="" className="templatemo-link">Action</a></td>
                                <td><a href="" className="templatemo-link">Delete</a></td>
                            </tr>
                            <tr>
                                <td>6.</td>
                                <td>Will</td>
                                <td>Brad</td>
                                <td>@wb</td>
                                <td>wb@company.com</td>
                                <td><a href="" className="templatemo-edit-btn">Edit</a></td>
                                <td><a href="" className="templatemo-link">Action</a></td>
                                <td><a href="" className="templatemo-link">Delete</a></td>
                            </tr>
                            <tr>
                                <td>7.</td>
                                <td>Steven</td>
                                <td>Eric</td>
                                <td>@sE</td>
                                <td>se@company.com</td>
                                <td><a href="" className="templatemo-edit-btn">Edit</a></td>
                                <td><a href="" className="templatemo-link">Action</a></td>
                                <td><a href="" className="templatemo-link">Delete</a></td>
                            </tr>
                            <tr>
                                <td>8.</td>
                                <td>Landi</td>
                                <td>Susan</td>
                                <td>@lS</td>
                                <td>ls@company.com</td>
                                <td><a href="" className="templatemo-edit-btn">Edit</a></td>
                                <td><a href="" className="templatemo-link">Action</a></td>
                                <td><a href="" className="templatemo-link">Delete</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            </Box>
            </div>
</div>



  
</div>



  )
};

export default ViewMasterTaxi;
