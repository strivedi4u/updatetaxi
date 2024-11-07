import axios from "axios";
import React, { useState } from "react";
import { decryptData } from "../utils/encryption";

// "CompCode": "101",
// "LocnCode":"002",
// "VendorID":"",
// "UserName":"598801"
export const getGeneralReport = async () => {
  const UserName = localStorage.getItem("UserName");
  const authToken = localStorage.getItem("token");
  const URL = process.env.REACT_APP_API_URL;
  const API = `${URL}/Services/GetGeneralReport`;
  try {
    console.log("Hi")
    let decryptUserName = decryptData(UserName);

    const response = await axios.post(
      API,
      { Type:"ALL",
        RequestID:"",
        CompCode:"101",
        Status:"",
        Requestor:"",
        FromDate:"",
        ToDate:"",
        Filter:"",
        UserName: "598801"},
      {
        headers: { authToken: authToken },
      }
    );

    // Log the entire response object to check the structure
    console.log("API Response:", response);

    if (response.status === 200 && response.data) {
      const getGeneralReport = response.data.Value;
      console.log("getGeneralReport data", getGeneralReport);
      return getGeneralReport;
      // console.log("User Data: ", userData);
      // setEmplId(decryptData(userData.EMPL_ID)); // No decryption needed if it's plaintext
      // setEmplName(decryptData(userData.EMPL_NAME));
      // setProfilePhoto(userData.profile_photo);
    } else {
      // swal("Error", "Data fetch was unsuccessful", "error");
      // navigate('/login');
      return null;
    }
  } catch (error) {
    // console.error('Fetch error:', error);
    // swal("Error", "An error occurred while fetching the profile", "error");
    // navigate('/login');
    return error;
  }
};
