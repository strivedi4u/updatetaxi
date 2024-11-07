import axios from "axios";
import React, { useState } from "react";
import swal from "sweetalert"; // Assuming you're using sweetalert for success messages
import { decryptData } from "../utils/encryption"; // Assuming this decrypts user info

export const updateAction = async (
    AppName,
    RequestID,
    RequestStatus,
    TourType,
    RequestorType,
    RequestorID,
    RequestorMobile,
    TripStartPoint,
    TripEndPoint,
    TripStartTime,
    TripEndTime,
    TripWayPoint,
    RequestorModel,
    ApproverModel,
    AllotedModel,
    VendorID,
    VehicleRegNo,
    DriverID,
    CreatorID,
    Action,
    Comments,
    PassengerDet,
    Purpose,
    ExtraBills,
    BillCatg,
    UserName
) => {
  //  const UserName = localStorage.getItem("UserName");
    const authToken = localStorage.getItem("token");
    const URL = process.env.REACT_APP_API_URL;
    const API = `${URL}/Services/UpdateAction`;

    try {
        console.log("Hello update");
        console.log(AppName,
            RequestID,
            RequestStatus,
            TourType,
            RequestorType,
            RequestorID,
            RequestorMobile,
            TripStartPoint,
            TripEndPoint,
            TripStartTime,
            TripEndTime,
            TripWayPoint,
            RequestorModel,
            ApproverModel,
            AllotedModel,
            VendorID,
            VehicleRegNo,
            DriverID,
            CreatorID,
            Action,
            Comments,
            PassengerDet,
            Purpose,
            ExtraBills,
            BillCatg,
            UserName);
        let decryptUserName = decryptData(UserName);

        const response = await axios.post(
            API,
            {
                AppName: AppName,
                RequestID: RequestID,
                RequestStatus: RequestStatus,
                TourType: TourType,
                RequestorType: RequestorType,
                RequestorID: "598801",
                RequestorMobile: RequestorMobile,
                TripStartPoint: TripStartPoint,
                TripEndPoint: TripEndPoint,
                TripStartTime: TripStartTime,
                TripEndTime: TripEndTime,
                TripWayPoint: TripWayPoint,
                RequestorModel: RequestorModel,
                ApproverModel: ApproverModel,
                AllottedModel: AllotedModel,
                VendorID: VendorID,
                VehicleRegNo: VehicleRegNo,
                DriverID: DriverID,
                CreatorID: "598801",
                Action: Action,
                Comments: Comments,
                PassengerDet: PassengerDet,
                Purpose: Purpose,
                ExtraBills: ExtraBills,
                BillCatg: BillCatg,
                UserName: "598801"
            },
            {
                headers: { authToken: authToken },
            }
        );

        if (response.status === 200 && response.data) {
            console.log(response.data)
            const updateAction = response.data.Value[0];
            console.log("UpdateAction : ", updateAction);
            return updateAction;
        } else {
            return null;
        }
    } catch (error) {
        return error;
    }
};