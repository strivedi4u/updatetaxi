import axios from "axios";
import React, { useState } from "react";
import { decryptData } from "../utils/encryption";

export const GetEmployeeProfile = async (userName) => {
  const authToken = localStorage.getItem("token");
  const URL = process.env.REACT_APP_API_URL;
  const API = `${URL}/Services/GetEmployeeProfile`;
  try {
    let decryptUserName = userName;
    const response = await axios.post(
      API,
      { UserName: decryptUserName },
      {
        headers: { authToken: authToken },
      }
    );
    console.log("API Response:", response);
    if (response.status === 200 && response.data?.Value?.Table1?.[0]) {
      const userData = response.data.Value.Table1[0];
      console.log("Userdata", userData);
      return userData;
    } else {
      console.log(response);
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
