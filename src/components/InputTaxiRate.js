import React, { useState, useEffect } from "react";
import {
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  Box,
  CircularProgress,
  CardMedia,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Lottie from "react-lottie";
import animationData from "../animations/envelope.json";
import { Grid } from "@mui/material"; // Import Grid2 from Material-UI
import "react-pro-sidebar/dist/css/styles.css";
import taxitravel1 from "../assets/images/taxitravel1.gif";
import axios from "axios"; // Import Axios for HTTP requests
import MasterSidebar from "./MasterSidebar";
import { useMediaQuery } from "@mui/material";
import { decryptData } from "../utils/encryption";
import { getVendor } from "../apis/GetVendor";
import { getModel } from "../apis/GetModel";

const InputTaxiRate = () => {
  const [submitted, setSubmitted] = useState(false);
  const [vendorData, setVendorData] = useState([]);
  const [vendorId1,setVendorId1]=useState();
  const [modelData,setModelData]=useState();
  const [modelId1,setModelId1]=useState();


  const [loading, setLoading] = useState(false); // Loading state for handling loader
  const [modelOptions, setModelOptions] = useState(false);



console.log("inputtaxi",vendorData);
  useEffect(() => {
    const getVendorData = async () => {
      try {
        const vendor = await getVendor(); // Wait for the fetchData to resolve
        console.log("vendor1 ",vendor.Value);// Set the data into the state
        setVendorData(vendor);
        console.log("Data fetched:", vendor);
      } catch (error) {
        console.error("Error in useEffect:", error);
      }
    };

    getVendorData(); // Call the async function
  }, []); 

console.log("Model Data : ",modelData);

  useEffect(() => {
    const getModelData = async () => {
      try {
        const taximodel = await getModel(); // Wait for the fetchData to resolve
        console.log("Taxi Model : ",taximodel.Value);// Set the data into the state
        setModelData(taximodel);
        console.log("Data fetched:", taximodel);
      } catch (error) {
        console.error("Error in useEffect:", error);
      }
    };

    getModelData(); // Call the async function
  }, []); 

 





  


  const initialValues = {
    taxiId: "",
    RegnNumber: "",
    modelId: "",
    //vendorId: "",
    isActive: "N",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    RegnNumber: Yup.string().required("Registration Number is required" ),
    //  ModelNumber: Yup.string().required("Please Select Model Name"),
    // VendorNumber: Yup.string().required("Please Select Vendor Name"),
  });

  const handleSubmit = async (values) => {
    console.log("hi");
    console.log(values);
    console.log("vendor id 1",vendorId1);
    console.log("model id 1 ",modelId1);

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const Username= localStorage.getItem("UserName");
      console.log(token);
      const API_ENDPOINT =
        process.env.REACT_APP_API_URL + "/Services/UpdateTaxi";

      const response = await axios.post(
        API_ENDPOINT,
        {
          TaxiID: values.taxiId,
          RegNo: values.RegnNumber,
          ModelID: modelId1,
          VendorID: vendorId1,
          ActiveFlag:  "Y",
          username: decryptData(Username)
        },
        {
          headers: {
            AuthToken: token, // Custom header for token
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Form submitted successfully:", response.data);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      alert("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };


 
 

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const isMobile = useMediaQuery("(max-width:100px)");
  const animationSize = isMobile ? '600px' : '400px'; // Adjust size based on screen width



  return (
    <Box
      sx={{
        marginTop: "250px", //'200px',
        marginBottom: "300px",
        marginRight: "100px",
        padding: "50px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
        animation: "fadeIn 1s",
      }}
    >
      {submitted ? (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Lottie
            options={defaultOptions}
            height={'100px'}
            width={'300px'}
          />
        </Box>
      ) : (
        <>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              marginBottom: "20px",
              padding: "10px",
              backgroundColor: "#3f51b5",
              color: "#fff",
              borderRadius: "8px",
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
              letterSpacing: "1px",
            }}
          >
            New Taxi Rate Details Input
          </Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
 
    

                <Grid container spacing={2}>
                  {/* Form fields in 2 columns */}
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="taxiId"
                      label="Taxi Id (blank)"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      helperText={<ErrorMessage name="taxiId" />}
                      sx={{
                        "& .MuiFormHelperText-root": {
                          color: "red",
                          fontSize: "10px",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="RegnNumber"
                      label="Registration Number"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      helperText={<ErrorMessage name="RegnNumber" />}
                      sx={{
                        "& .MuiFormHelperText-root": {
                          color: "red",
                          fontSize: "10px",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
        {/* Model Class Id Dropdown */}
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="model-class-id-label">Model Name</InputLabel>
          <Field
            as={Select}
            name="ModelNumber"
            labelId="model-class-id-label"
            label="Model Class Id"
            fullWidth
            sx={{
              '& .MuiFormHelperText-root': {
                color: 'red',
                fontSize: '10px',
              },
            }}
            onChange={(e) => setModelId1( e.target.value)} // Handle change

          >
            {/* Map through the fetched model options */}
            {Array.isArray(modelData) && modelData.length > 0 ? (
          modelData.map((model) => (
              <MenuItem key={model.MODL_ID} value={model.MODL_ID}>
                {model.MODL_NAME} 
              </MenuItem>
           ))
          ) : (
            <MenuItem disabled>No Model Available</MenuItem>
          )}
          </Field>
          <ErrorMessage name="ModelNumber" component="div" style={{ color: 'red', fontSize: '10px' }} />
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={6}>
        {/* Model Class Id Dropdown */}
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="model-class-id-label">Vendor Name</InputLabel>
          <Field
            as={Select}
            name="VendorNumber"
            labelId="model-class-id-label"
            label="Vendor Id"
            fullWidth
            sx={{
              '& .MuiFormHelperText-root': {
                color: 'red',
                fontSize: '10px',
              },
            }}
            onChange={(e) => setVendorId1( e.target.value)} // Handle change

          >
            {/* Map through the fetched model options */}
            {Array.isArray(vendorData) && vendorData.length > 0 ? (
          vendorData.map((model) => (
              <MenuItem key={model.VEND_ID} value={model.VEND_ID}>
                {model.VEND_NAME} 
              </MenuItem>
           ))
          ) : (
            <MenuItem disabled>No Vendors Available</MenuItem>
          )}
          </Field>
          <ErrorMessage name="VendorNumber" component="div" style={{ color: 'red', fontSize: '10px' }} />
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={6}>
                    <FormControl fullWidth margin="normal" variant="outlined" >
                      <InputLabel>Rate Slab </InputLabel>
                      <Field
                        name="taxipassengercapacity" // Change the field name to match the number field
                        as={Select} // Use the Select component from Material-UI
                        label="Passenger Capacity"
                        sx={{
                          "& .MuiFormHelperText-root": {
                            color: "red",
                            fontSize: "10px",
                           
                          },
                        }}
                      >
                        {/* Define number options as MenuItem components */}
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                      </Field>
                      <FormHelperText>
                        <ErrorMessage name="taxipassengercapacity" />
                      </FormHelperText>
                    </FormControl>
                  </Grid>
    
                
                </Grid>

                

                {loading ? (
                  <Box sx={{ textAlign: "center", mt: 2 }}>
                    <CircularProgress />
                  </Box>
                ) : (
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    disabled={isSubmitting}
                    
                  >
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
    <Box sx={{ display: "flex", height: "100vh", paddingTop: "70px" }}>
      {" "}
      {/* Added space below navbar */}
      <MasterSidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#f5f5f5",
          display: "flex",
          justifyContent: "flex-start", // Aligns items leftward
          alignItems: "center",
        }}
      >
        <Grid container spacing={2} sx={{ alignItems: "center" }}>
          {/* Image on the Left */}
          <Grid item xs={12} md={6}>
            {" "}
            {/* Adjust the width to 6 columns */}
            <CardMedia
              component="img"
              height="450"
              src={taxitravel1}
              alt="Taxi Image"
              sx={{
                width: "60%",
                borderRadius: "10px",
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
                marginLeft: "20px",
                marginRight: "auto",
              }}
            />
          </Grid>

          {/* Form on the Right */}
          <Grid item xs={12} md={6}>
            {" "}
            {/* Form takes the other 6 columns */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <InputTaxiRate />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default App;
