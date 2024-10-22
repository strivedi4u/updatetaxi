import axios from "axios";
import React, { useState } from "react";
import { decryptData } from "../utils/encryption";

// "CompCode": "101",
// "LocnCode":"002",
// "VendorID":"",
// "UserName":"598801"
export const getModel = async () => {
  const UserName = localStorage.getItem("UserName");
  const authToken = localStorage.getItem("token");
  const URL = process.env.REACT_APP_API_URL;
  const API = `${URL}/Services/GetModel`;
  try {
    let decryptUserName = decryptData(UserName);

    const response = await axios.post(
      API,
      { UserName: decryptUserName, ModelID: "", ModelMake: ""},
      {
        headers: { authToken: authToken },
      }
    );

    // Log the entire response object to check the structure
    console.log("API Response:", response);

    if (response.status === 200 && response.data) {
      const modelData = response.data.Value;
      console.log("Model data", modelData);
      return modelData;
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
