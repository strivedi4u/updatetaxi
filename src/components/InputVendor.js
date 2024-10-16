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

const InputVendor = () => {
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
      const token = 'UU5aMjFMQWtQNVZkejRCVmlEditjOG9xQ2NJY2Q3Zm04cGdUYkljVk9IbzVzSGFwL0JrU2FQd2lNWGI0RnZ5NjBzQXl1R2NVcGZ3N00xck1iZ250MkJNdVRPYzV5ODIwdVJOWXVpd2NaMTdVYWJMRnc4UjkrN0d1MTRtaEEyK1BFaWxLMHVjSlp6bktMMDBQVXZzZTFHVmw0WWhlb2lMYWUwd3o2a0xxcGliMVJ1a0pzU0VjOXhVRVQvTEUyZkRQSTg2dTA0b0dNdG1zNEtPWWlzeUs5VU1GVkJHVTVJNWpRajhESElOV3BNekJVYWRpV0FOd3VjdWJ6U0tpVytQMElObW5Vb2hIWk4xTTZabEN0ZlpDNS8yVnVvMklRK1pYWFg3UjBZdHdBSEhmUWQrelVFaHZENkVZZk81OEVNWjQ3ZDJtYkRkQ25Ld3lYUkFaeUF0YkdYVG5VK0gvTGZGMS9FZnBVNWlhVFdKQlFXMDBMTE5XbnNtRHNGaGc1cDhXei9qdkdzVzJMUDdKaU15a3k2SkxqbmFMb2lJOUtSUHpDOGRpL1FWdlBZQTgzREVHK1VDV1JmTFBEekpEQm83MSs1cDB5N2ZJNWVnbk5pQnloVHdxUmR5Wm53NlA2UW9CSG5CUFo0TkxCeFVlUktmRzhDZVlyNkZ3K0lPWkVaTXk='; 

      const API_ENDPOINT = 'https://swifttest.maruti.co.in/HrAssist/API/Services/UpdateTaxi';

      //const API_ENDPOINT1 = 'https://swifttest.maruti.co.in/HrAssist/API/Services/GetEmployeeProfile'

      const response = await axios.post(
        API_ENDPOINT,
        {
          TaxiID: values.taxiId,
         RegNo: values.registrationNumber,
         ModelID: values.modelId,
         VendorID: values.vendorId,
         ActiveFlag: values.isActive ? 'Y' : 'N',
          username: '548596',
        },
        {
          headers: {
            'AuthToken': token,  // Custom header for token
            'Content-Type': 'application/json',
          },
        }
      );

      
    
      console.log('Hi');
      console.log('Form submitted successfully2:', response.data);
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
      <h2 style={{ textAlign: 'center', marginBottom: '200px', color: '#000', paddingTop: '50px' }}>Vendor Details Input</h2>
      {submitted ? (
        <Lottie options={defaultOptions} height={150} width={150} />
      ) : (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <Field
                as={TextField}
                name="VendorId"
                label="Vendor ID"
                variant="outlined"
                fullWidth
                margin="normal"
                helperText={<ErrorMessage name="VendorId" />}
                sx={{
                  '& .MuiFormHelperText-root': {
                    color: 'red',
                    fontSize: '10px',
                  },
                }}
              />
              <Field
                as={TextField}
                name="VendorName"
                label="Vendor Name"
                variant="outlined"
                fullWidth
                margin="normal"
                helperText={<ErrorMessage name="VendorName" />}
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
                name="EmailID"
                label="Vendor Email ID"
                variant="outlined"
                fullWidth
                margin="normal"
                helperText={<ErrorMessage name="EmailID" />}
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
      {}
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
            <InputVendor />
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default App;
