import axios from "axios";
import React, { useState } from "react";
import { decryptData } from "../utils/encryption";


export const getEmployeeLookup = async (staffId) => {
    const UserName = localStorage.getItem("UserName");
    const authToken = localStorage.getItem("token");
    const URL = process.env.REACT_APP_API_URL;
    const API = `${URL}/Services/GetEmplLookup`;

    try {
        let decryptUserName = decryptData(UserName);

        const response = await axios.post(
            API,
            { Search: staffId, ReportManager: "", },
            {
                headers: { authToken: authToken },
            }
        );

        if (response.status === 200 && response.data) {
            const employeeLookup = response.data.Value[0];
            console.log("employeeLookup : ", employeeLookup);
            return employeeLookup;
        } else {
            return null;
        }
    } catch (error) {
        return error;
    }
};
