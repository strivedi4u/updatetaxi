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
import { getModelClass } from "../apis/GetModelClass";

const InputTaxiClass = () => {
  const [submitted, setSubmitted] = useState(false);
  const [vendorData, setVendorData] = useState([]);
  const [vendorId1, setVendorId1] = useState();
  const [modelData, setModelData] = useState();
  const [modelId1, setModelId1] = useState();
  const [modelclassData, setModelClassData] = useState();
  const [modelclassId1, setModelClassId1] = useState();

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

  const initialValues = {
    modelId: "",
    taximodelname: "",
    taximodelmaker: "",
    //vendorId: "",
    isActive: "N",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    taximodelname: Yup.string().required("Taxi Model Name is required"),
    //  ModelNumber: Yup.string().required("Please Select Model Name"),
    // VendorNumber: Yup.string().required("Please Select Vendor Name"),
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
        process.env.REACT_APP_API_URL + "/Services/UpdateModel";

      const response = await axios.post(
        API_ENDPOINT,
        {
          ModelID: values.modelId,
          ModelClassID: modelclassId1,
          ModelName: values.taximodelname,
          ModelMaker: values.taximodelmaker,
          PassengerCapacity: values.taxipassengercapacity,
          ActiveFlag: "Y",
          username: decryptData(Username),
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
            New Taxi Class Details Input 
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
                      name="modelId"
                      label="Model Id (blank)"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      helperText={<ErrorMessage name="modelId" />}
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
                      name="taximodelname"
                      label="Model Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      inputProps={{ maxLength: 100 }} // Limit to 20 characters
                      helperText={<ErrorMessage name="taximodelname" />}
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
                      <InputLabel id="model-class-id-label">
                        Model Class
                      </InputLabel>
                      <Field
                        as={Select}
                        name="ModelNumber"
                        labelId="model-class-id-label"
                        label="Model Class Id"
                        fullWidth
                        sx={{
                          "& .MuiFormHelperText-root": {
                            color: "red",
                            fontSize: "10px",
                          },
                        }}
                        onChange={(e) => setModelClassId1(e.target.value)} // Handle change
                      >
                        {/* Map through the fetched model options */}
                        {Array.isArray(modelclassData) &&
                        modelclassData.length > 0 ? (
                          modelclassData.map((model) => (
                            <MenuItem
                              key={model.CLASS_ID}
                              value={model.CLASS_ID}
                            >
                              {model.CLASS_NAME}
                            </MenuItem>
                          ))
                        ) : (
                          <MenuItem disabled>No Model Available</MenuItem>
                        )}
                      </Field>
                      <ErrorMessage
                        name="ModelNumber"
                        component="div"
                        style={{ color: "red", fontSize: "10px" }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="taximodelmaker"
                      label="Model Maker"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      inputProps={{ maxLength: 50 }} // Limit to 20 characters
                      helperText={<ErrorMessage name="taximodelmaker" />}
                      sx={{
                        "& .MuiFormHelperText-root": {
                          color: "red",
                          fontSize: "10px",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth margin="normal" variant="outlined" >
                      <InputLabel>Passenger Capacity</InputLabel>
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
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
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
              <InputTaxiClass />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default App;
