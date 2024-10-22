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
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
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
import { getModelClass } from "../apis/GetModelClass";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { format } from "date-fns"; // Import format function
import { fetchData, GetEmployeeProfile } from "../apis/GetEmployeeProfile";
import { getLocnGroup } from "../apis/GetLocnGroup";

const InputVendor = () => {
  const [submitted, setSubmitted] = useState(false);
  const [vendorData, setVendorData] = useState([]);
  const [emplallData, setEmplAllData] = useState([]);

  const [vendorId1, setVendorId1] = useState();
  const [modelData, setModelData] = useState();
  const [modelId1, setModelId1] = useState();
  const [modelclassData, setModelClassData] = useState();
  const [modelclassId1, setModelClassId1] = useState();
  //const [taxidrvrDob1, setDrvrDob] = useState();
  const [locngroupdata, setLocnGroup] = useState();



  const [loading, setLoading] = useState(false); // Loading state for handling loader
  const [modelOptions, setModelOptions] = useState(false);

  console.log("InputModel", vendorData);
  useEffect(() => {
    const getVendorData = async () => {
      try {
        const vendor = await getVendor(); // Wait for the fetchData to resolve
        console.log("vendor1 ", vendor.Value); // Set the data into the state
        setVendorData(vendor);
        console.log("Data fetched:", vendor);
      } catch (error) {
        console.error("Error in useEffect:", error);
      }
    };

    getVendorData(); // Call the async function
  }, []);

  console.log("Model Data : ", modelData);

  useEffect(() => {
    const getModelData = async () => {
      try {
        const taximodel = await getModel(); // Wait for the fetchData to resolve
        //console.log("Taxi Model : ",taximodel.Value);// Set the data into the state
        setModelData(taximodel);
        console.log("Data fetched:", taximodel);
      } catch (error) {
        console.error("Error in useEffect:", error);
      }
    };

    getModelData(); // Call the async function
  }, []);

  // useEffect(() => {
  //   const getModelData = async () => {
  //     try {
  //       const taximodel = await getModel(); // Wait for the fetchData to resolve
  //       console.log("Taxi Model : ",taximodel.Value);// Set the data into the state
  //       setModelClassData(taximodel);
  //       console.log("Data fetched:", taximodel);
  //     } catch (error) {
  //       console.error("Error in useEffect:", error);
  //     }
  //   };

  //   getModelData(); // Call the async function
  // }, []);

  console.log("Model Class Data :", modelclassData);
  useEffect(() => {
    const getModelClassData = async () => {
      try {
        const taximodelclass = await getModelClass(); // Wait for the fetchData to resolve
        //console.log("Taxi Model Class : ",taximodelclass.Value);// Set the data into the state
        setModelClassData(taximodelclass);
        console.log("Data fetched:", taximodelclass);
      } catch (error) {
        console.error("Error in useEffect:", error);
      }
    };

    getModelClassData(); // Call the async function
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const locationData = await GetEmployeeProfile(); // Wait for the fetchData to resolve
        console.log("string1", locationData);
        setEmplAllData(locationData);
        console.log("Data fetched:", locationData);
      } catch (error) {
        console.error("Error in useEffect:", error);
      }
    };

    getData(); // Call the async function
  }, []);


  useEffect(() => {
    const getLocnData = async () => {
      try {
        const emplData = await getLocnGroup(); // Wait for the fetchData to resolve
        console.log("string1", emplData);
        setLocnGroup(emplData);
        console.log("Data fetched:", emplData);
      } catch (error) {
        console.error("Error in useEffect:", error);
      }
    };

    getLocnData(); // Call the async function
  }, []);


  const initialValues = {
    taxivendorid: "",
    taxivendrlocngrp: "",
    taxivendorname: "",
    taxivendrfromdate: "",
    taxivendrtodate: "",
    taxivendrmblno: "",
    taxivendremail: "",
    taxivendruser: "",
    taxivendrfromdate: "",
    taxivendrtodate: "",
    taxivendraddr: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    taxivendorname: Yup.string().required("Please Enter Vendor Name"),
    taxivendrmblno: Yup.string().required("Please Enter Vendor Mobile Number"),
    taxivendremail: Yup.string().required("Please Enter Vendor Email ID"),
    taxivendruser: Yup.string().required("Please Enter Vendor User - Staff ID"),
    taxivendraddr: Yup.string().required("Please Enter Driver Mobile Number"),
    // taxivendrfromdate: Yup.string().required("Please Select Driver DOB "),
    // taxivendrtodate:Yup.string().required("Please Select Driver DOJ "),
  });

  const handleSubmit = async (values) => {
    console.log("hi");
    console.log(values);
    console.log("vendor id 1", vendorId1);
    console.log("model id 1 ", modelId1);

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const Username = localStorage.getItem("UserName");
      console.log(token);
      const API_ENDPOINT =
        process.env.REACT_APP_API_URL + "/Services/UpdateVendor";

      const response = await axios.post(
        API_ENDPOINT,
        {
          VendorID: "",
          VendorName: values.taxivendorname,
          CompCode: decryptData(emplallData.EMPL_COMP_CODE),
          LocnGroup: values.taxivendrlocngrp,
          VendorUserName: values.taxivendruser,
          MobileNo: values.taxivendrmblno,
          Email: values.taxivendremail,
          Address: values.taxivendraddr,
          FromDate: values.taxivendrfromdate,
          ToDate: values.taxivendrtodate,
          UserName: decryptData(Username),
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
      console.error("Error submitting form:", error);
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
  const animationSize = isMobile ? "400px" : "200px"; // Adjust size based on screen width

  return (
    <Box
      sx={{
        marginTop: "250px", //'200px',
        marginBottom: "300px",
        marginRight: "100px",
        padding: "10px",
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
          <Lottie options={defaultOptions} height={"100px"} width={"300px"} />
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
            New Taxi Vendor Details Input
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
                  <Grid item xs={8} sm={6}>
                    <Field
                      as={TextField}
                      name="taxivendorid"
                      label="Vendor Id (blank)"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      helperText={<ErrorMessage name="taxivendorid" />}
                      sx={{
                        "& .MuiFormHelperText-root": {
                          color: "red",
                          fontSize: "10px",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={8} sm={6}>
                    <Field
                      as={TextField}
                      name="taxivendorname"
                      label="Vendor Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      inputProps={{
                        maxLength: 100,
                        pattern: "[A-Za-z ]*", // Allows only letters and spaces
                        onKeyDown: (e) => {
                          if (
                            !/[a-zA-Z ]/.test(e.key) &&
                            e.key !== "Backspace"
                          ) {
                            e.preventDefault(); // Prevent entering non-alphabetic characters
                          }
                        },
                      }}
                      //inputProps={{ maxLength: 100 }} // Limit to 20 characters
                      helperText={<ErrorMessage name="taxivendorname" />}
                      sx={{
                        "& .MuiFormHelperText-root": {
                          color: "red",
                          fontSize: "10px",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={8} sm={6}>
                    <Field
                      as={TextField}
                      name="taxivendrmblno"
                      label="Vendor Mobile No"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      inputProps={{
                        maxLength: 10, // Optional: Maximum length of 10 digits
                        inputMode: "numeric", // Helps on mobile to show numeric keyboard
                        pattern: "[0-9]*", // Restrict to digits only
                        onKeyDown: (e) => {
                          // Allow only digits and navigation keys (e.g., Backspace)
                          if (
                            !/[0-9]/.test(e.key) &&
                            e.key !== "Backspace" &&
                            e.key !== "Tab" &&
                            e.key !== "ArrowLeft" &&
                            e.key !== "ArrowRight"
                          ) {
                            e.preventDefault();
                          }
                        },
                      }}
                      //inputProps={{ maxLength: 10 }} // Limit to 20 characters
                      helperText={<ErrorMessage name="taxivendrmblno" />}
                      sx={{
                        "& .MuiFormHelperText-root": {
                          color: "red",
                          fontSize: "10px",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={8} sm={6}>
                    <Field
                      as={TextField}
                      name="taxivendruser"
                      label="Vendor User(Staff Id)"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      //inputProps={{ maxLength: 10 }} // Limit to 20 characters
                      inputProps={{
                        maxLength: 25, // Optional: Maximum length of 10 digits
                        inputMode: "numeric", // Helps on mobile to show numeric keyboard
                        pattern: "[0-9]*", // Restrict to digits only
                        onKeyDown: (e) => {
                          // Allow only digits and navigation keys (e.g., Backspace)
                          if (
                            !/[0-9]/.test(e.key) &&
                            e.key !== "Backspace" &&
                            e.key !== "Tab" &&
                            e.key !== "ArrowLeft" &&
                            e.key !== "ArrowRight"
                          ) {
                            e.preventDefault();
                          }
                        },
                      }}
                      helperText={<ErrorMessage name="taxivendruser" />}
                      sx={{
                        "& .MuiFormHelperText-root": {
                          color: "red",
                          fontSize: "10px",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={8} sm={6}>
                    <Field
                      as={TextField}
                      name="taxivendremail"
                      label="Vendor Email"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      inputProps={{ maxLength: 100 }} // Limit to 20 characters
                      helperText={<ErrorMessage name="taxivendremail" />}
                      sx={{
                        "& .MuiFormHelperText-root": {
                          color: "red",
                          fontSize: "10px",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={8} sm={6}>
                    <Field
                      as={TextField}
                      name="taxivendraddr"
                      label="Vendor Address"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      inputProps={{ maxLength: 100 }} // Limit to 20 characters
                      helperText={<ErrorMessage name="taxivendraddr" />}
                      sx={{
                        "& .MuiFormHelperText-root": {
                          color: "red",
                          fontSize: "10px",
                        },
                      }}
                    />
                  </Grid>

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Grid item xs={8} sm={6}>
                      <Field name="taxivendrfromdate">
                        {({ field, form }) => {
                          const { setFieldValue } = form;
                          return (
                            <DatePicker
                              label="Select Vendor FromDate"
                              value={field.value || null} // Ensure value is either valid or null
                              onChange={(newValue) => {
                                if (newValue) {
                                  const formattedDatedoj = format(
                                    newValue,
                                    "dd-MMM-yyyy"
                                  ); // Format the date as "dd-MM-yyyy"
                                  setFieldValue(field.name, formattedDatedoj); // Set formatted date
                                  console.log(
                                    "Formatted Date (taxivendrfromdate):",
                                    formattedDatedoj
                                  ); // Log formatted date
                                }
                              }}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  variant="outlined"
                                  fullWidth
                                  margin="normal"
                                  helperText={
                                    <ErrorMessage name="taxivendrfromdate" />
                                  }
                                  sx={{
                                    "& .MuiFormHelperText-root": {
                                      color: "red",
                                      fontSize: "10px",
                                    },
                                    width: "170px",
                                  }}
                                />
                              )}
                            />
                          );
                        }}
                      </Field>
                    </Grid>
                  </LocalizationProvider>

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Grid item xs={8} sm={6}>
                      <Field name="taxivendrtodate">
                        {({ field, form }) => {
                          const { setFieldValue } = form;
                          return (
                            <DatePicker
                              label="Select Vendor ToDate"
                              value={field.value || null} // Ensure value is either valid or null
                              onChange={(newValue) => {
                                if (newValue) {
                                  const formattedDatedob = format(
                                    newValue,
                                    "dd-MMM-yyyy"
                                  ); // Format the date as "dd-MM-yyyy"
                                  setFieldValue(field.name, formattedDatedob); // Set formatted date
                                  console.log(
                                    "Formatted Date (taxivendrtodate):",
                                    formattedDatedob
                                  ); // Log formatted date
                                }
                              }}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  variant="outlined"
                                  fullWidth
                                  margin="normal"
                                  helperText={
                                    <ErrorMessage name="taxivendrtodate" />
                                  }
                                  sx={{
                                    "& .MuiFormHelperText-root": {
                                      color: "red",
                                      fontSize: "10px",
                                    },
                                  }}
                                />
                              )}
                            />
                          );
                        }}
                      </Field>
                    </Grid>
                  </LocalizationProvider>

                  <Grid item xs={8} sm={6}>
                    {/* Model Class Id Dropdown */}
                    <FormControl fullWidth variant="outlined" margin="normal">
                      <InputLabel id="model-class-id-label">
                        Select Location Group
                      </InputLabel>
                      <Field
                        as={Select}
                        name="taxivendrlocngrp"
                        labelId="model-class-id-label"
                        label="Vendor Id"
                        fullWidth
                        sx={{
                          "& .MuiFormHelperText-root": {
                            color: "red",
                            fontSize: "10px",
                          },
                        }}
                        //onChange={(e) => setVendorId1(e.target.value)} // Handle change
                      >
                        {/* Map through the fetched model options */}
                        {Array.isArray(locngroupdata) && locngroupdata.length > 0 ? (
                          locngroupdata.map((model) => (
                            <MenuItem key={model.LCGP_GROUP} value={model.LCGP_GROUP}>
                              {model.LCGP_GROUP}
                            </MenuItem>
                          ))
                        ) : (
                          <MenuItem disabled>No Location Group Available</MenuItem>
                        )}
                      </Field>
                      <ErrorMessage
                        name="taxivendrlocngrp"
                        component="div"
                        style={{ color: "red", fontSize: "10px" }}
                      />
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
                    sx={{ mt: 4 }}
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
              <InputVendor />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default App;
