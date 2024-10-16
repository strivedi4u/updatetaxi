import React, { useState } from 'react';
import { TextField, Checkbox, Button, FormControlLabel, Box, CircularProgress, CardMedia, Typography, Grid } from '@mui/material'; 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Lottie from 'react-lottie';
import animationData from '../animations/envelope.json';
import 'react-pro-sidebar/dist/css/styles.css';
import taxitravel1 from '../assets/images/taxitravel1.gif';
import axios from 'axios'; 
import MasterSidebar from './MasterSidebar';
import { useMediaQuery } from '@mui/material';

const InputModel = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); 

  const initialValues = {
    taxiId: '',
    registrationNumber: '',
    modelId: '',
    vendorId: '',
    isActive: false,
    username: '548596',
  };

  const validationSchema = Yup.object().shape({
    ModelNumber: Yup.string().required('Model Class Id is required'),
    modelId: Yup.string().required('Taxi Model ID is required'),
    vendorId: Yup.string().required('Taxi Vendor ID is required'),
  });

  const handleSubmit = async (values) => {
    setLoading(true); 
    try {
      const token = ''; // Token simplified for example

      const API_ENDPOINT = 'https://swifttest.maruti.co.in/HrAssist/API/Services/UpdateTaxi';

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
            'AuthToken': token,
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

  const isMobile = useMediaQuery('(max-width:600px)');
  const animationSize = isMobile ? 200 : 400; // Adjust size based on screen width

  return (
    <Box
      sx={{
        marginTop: '250px',//'200px',
        marginBottom: '300px',
        marginRight:'100px',
        padding: '10px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
        animation: 'fadeIn 1s',
      }}
    >
      {submitted ? (
        <Box 
          sx={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            backgroundColor: 'rgba(255, 255, 255, 0.9)', 
            zIndex: 9999, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center'
          }}
        >
          <Lottie options={defaultOptions} height={animationSize} width={animationSize} />
        </Box>
      ) : (
        <>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              marginBottom: '20px',
              padding: '10px',
              backgroundColor: '#3f51b5',
              color: '#fff',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontFamily: 'Arial, sans-serif',
              letterSpacing: '1px',
            }}
          >
            Model Details Input
          </Typography>

          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <Grid container spacing={2}>
                  {/* Form fields in 2 columns */}
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="taxiId"
                      label="Model Id"
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
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="ModelNumber"
                      label="Model Class Id"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      helperText={<ErrorMessage name="ModelNumber" />}
                      sx={{
                        '& .MuiFormHelperText-root': {
                          color: 'red',
                          fontSize: '10px',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="modelId"
                      label="Model Name"
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
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="vendorId"
                      label="Model Maker"
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
                    </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="vendorId"
                      label="Model Maker"
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
                      </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="vendorId"
                      label="Model Maker"
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
                      </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="vendorId"
                      label="Model Maker"
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
                    
                    
                  </Grid>
                  <Grid item xs={12} sm={6}>
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
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControlLabel
                      control={<Field as={Checkbox} name="isActive" color="primary" />}
                      label="Active"
                    />
                  </Grid>
                </Grid>

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
        </>
      )}
    </Box>
  );
};

const App = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', paddingTop: '70px' }}> {/* Added space below navbar */}
      <MasterSidebar />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          backgroundColor: '#f5f5f5', 
          display: 'flex', 
          justifyContent: 'flex-start', // Aligns items leftward
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
          {/* Image on the Left */}
          <Grid item xs={12} md={6}> {/* Adjust the width to 6 columns */}
            <CardMedia
              component="img"
              height="450"
              src={taxitravel1}
              alt="Taxi Image"
              sx={{ 
                width:'60%',
                borderRadius: '10px', 
                boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)', 
                marginLeft: '20px', 
                marginRight: 'auto',
              }}
            />
          </Grid>

          {/* Form on the Right */}
          <Grid item xs={12} md={6}> {/* Form takes the other 6 columns */}
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100%',
              }}
            >
              <InputModel />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default App;
