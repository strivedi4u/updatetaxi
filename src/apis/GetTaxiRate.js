














// export const UpdateTaxi = async (values) => {
   
//     try {
//       const token = localStorage.getItem("token");
//       console.log(token);
//       const API_ENDPOINT =
//         process.env.REACT_APP_API_URL + "/Services/UpdateTaxi";

//       const response = await axios.post(
//         API_ENDPOINT,
//         {
//           TaxiID: values.taxiId,
//           RegNo: values.registrationNumber,
//           ModelID: values.modelId,
//           VendorID: values.vendorId,
//           ActiveFlag: values.isActive ? "Y" : "N",
//           username: "588180",
//         },
//         {
//           headers: {
//             AuthToken: token, // Custom header for token
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("Form submitted successfully:", response.data);
     

//       setTimeout(() => {
//         setSubmitted(false);
//       }, 3000);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     } finally {
//       setLoading(false);
//     }
//   };
