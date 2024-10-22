import axios from "axios";
import React, { useState } from "react";
import { decryptData } from "../utils/encryption";


export const GetUserRole = async (userName) => {
    const UserName = localStorage.getItem("UserName");
    const authToken = localStorage.getItem("token");
    const URL = process.env.REACT_APP_API_URL;
    const API = `${URL}/Services/GetUserRole`;

    try {

        const response = await axios.post(
            API,
            {
                UserName: userName
            },
            {
                headers: { authToken: authToken },
            }
        );

        if (response.status === 200 && response.data) {
            const userRole = response.data.Result;
            console.log("userRole : ", userRole);
            return userRole;
        } else {
            return null;
        }
    } catch (error) {
        return error;
    }
};
