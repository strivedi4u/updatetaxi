import React, { useState } from 'react';
import { TextField, Checkbox, Button, FormControlLabel, Box, CircularProgress, CardMedia } from '@mui/material'; 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Lottie from 'react-lottie';
import animationData from '../animations/envelope.json';
import { Grid2 } from '@mui/material'; // Import Grid2 from Material-UI
import 'react-pro-sidebar/dist/css/styles.css';
import taxitravel1 from '../assets/images/taxitravel1.gif';
import axios from 'axios'; // Import Axios for HTTP requests
import MasterSidebar from './MasterSidebar';

const InputTaxi = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for handling loader

  const initialValues = {
    taxiId: '',
    registrationNumber: '',
    modelId: '',
    vendorId: '',
    isActive: false,
    username: '548596',
  };

  const validationSchema = Yup.object().shape({
    registrationNumber: Yup.string().required('Registration Number is required'),
    modelId: Yup.string().required('Taxi Model ID is required'),
    vendorId: Yup.string().required('Taxi Vendor ID is required'),
  });


  const handleSubmit = async (values) => {
    setLoading(true); 
    try {
     
      const token = localStorage.getItem('token'); 
      console.log(token);
      const API_ENDPOINT =  process.env.REACT_APP_API_URL + '/Services/UpdateTaxi';
 
      const response = await axios.post(
        API_ENDPOINT,
        {
          TaxiID: values.taxiId,
         RegNo: values.registrationNumber,
         ModelID: values.modelId,
         VendorID: values.vendorId,
         ActiveFlag: values.isActive ? 'Y' : 'N',
          username: '588180',
        },
        {
          headers: {
            'AuthToken': token,  // Custom header for token
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Form submitted successfully:', response.data);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false); 
    }
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
        animation: 'fadeIn 1s',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '200px', color: '#000', paddingTop: '50px' }}>Taxi Details Input</h2>
      {submitted ? (
        <Lottie options={defaultOptions} height={150} width={150} />
      ) : (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <Field
                as={TextField}
                name="taxiId"
                label="Taxi ID"
                variant="outlined"
                fullWidth
                margin="normal"
                helperText={<ErrorMessage name="taxiId" />}
                sx={{
                  '& .MuiFormHelperText-root': {
                    color: 'red',
                    fontSize: '10px',
                  },
                }}
              />
              <Field
                as={TextField}
                name="registrationNumber"
                label="Registration Number"
                variant="outlined"
                fullWidth
                margin="normal"
                helperText={<ErrorMessage name="registrationNumber" />}
                sx={{
                  '& .MuiFormHelperText-root': {
                    color: 'red',
                    fontSize: '10px',
                  },
                }}
              />
              <Field
                as={TextField}
                name="modelId"
                label="Taxi Model ID"
                variant="outlined"
                fullWidth
                margin="normal"
                helperText={<ErrorMessage name="modelId" />}
                sx={{
                  '& .MuiFormHelperText-root': {
                    color: 'red',
                    fontSize: '10px',
                  },
                }}
              />
              <Field
                as={TextField}
                name="vendorId"
                label="Taxi Vendor ID"
                variant="outlined"
                fullWidth
                margin="normal"
                helperText={<ErrorMessage name="vendorId" />}
                sx={{
                  '& .MuiFormHelperText-root': {
                    color: 'red',
                    fontSize: '10px',
                  },
                }}
              />
              <FormControlLabel control={<Field as={Checkbox} name="isActive" color="primary" />} label="Active" />
              {loading ? (
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <CircularProgress /> 
                </Box>
              ) : (
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }} disabled={isSubmitting}>
                  Submit
                </Button>
              )}
            </Form>
          )}
        </Formik>
      )}
    </Box>
  );
};

const App = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', paddingTop:'50px'}}>
      {/* <ProSidebar>
        <Menu iconShape="square">
          <MenuItem icon={<HomeIcon />}>Home</MenuItem>
          <SubMenu title="Input Taxi" icon={<DirectionsCarIcon />}>
            <MenuItem icon={<ViewListIcon />}>Taxi Input</MenuItem>
            <MenuItem icon={<FilterListIcon />}>View Taxi</MenuItem>
          </SubMenu>
          <SubMenu title="Input Model" icon={<DirectionsCarIcon />}>
            <MenuItem icon={<ViewListIcon />}>Model Input</MenuItem>
            <MenuItem icon={<FilterListIcon />}>View Model</MenuItem>
          </SubMenu>
          <SubMenu title="Input Vendor" icon={<DirectionsCarIcon />}>
            <MenuItem icon={<ViewListIcon />}>Vendor Input</MenuItem>
            <MenuItem icon={<FilterListIcon />}>View Vendor</MenuItem>
          </SubMenu>
          <SubMenu title="Input Driver" icon={<DirectionsCarIcon />}>
            <MenuItem icon={<ViewListIcon />}>Driver Input</MenuItem>
            <MenuItem icon={<FilterListIcon />}>View Driver</MenuItem>
          </SubMenu>
          <SubMenu title="Input Taxi Class" icon={<DirectionsCarIcon />}>
            <MenuItem icon={<ViewListIcon />}>Class Input</MenuItem>
            <MenuItem icon={<FilterListIcon />}>View Class</MenuItem>
          </SubMenu>
          <SubMenu title="Filter Options" icon={<FilterListIcon />}>
            <MenuItem>Filter by Model</MenuItem>
            <MenuItem>Filter by Vendor</MenuItem>
            <MenuItem>Filter by Status</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar> */}
<MasterSidebar/>
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#f5f5f5' }}>
        <Grid2 container spacing={2}>
          <Grid2 item xs={12} md={4}>
            <CardMedia
              component="img"
              height="450"
              src={taxitravel1}
              alt="Taxi Image"
              sx={{ borderRadius: '10px', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',marginTop:'150px' }}
            />
          </Grid2>
          <Grid2 item xs={12} md={8}>
            <InputTaxi />
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default App;
