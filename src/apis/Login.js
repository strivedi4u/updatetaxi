import axios from "axios";
import { encryptData } from "../utils/encryption";


export const Login = async (loginId, password) => {
    const API_KEY = process.env.REACT_X_API_KEY;
    const URL = process.env.REACT_APP_API_URL;
    const API = `${URL}/login`;
    try {
        console.log("Login Api called : ");
        let encryptLoginId = encryptData(loginId);
        let encryptPassword = encryptData(password);
        const response = await axios.post(
            API,
            {
                UserName: encryptLoginId,
                Password: encryptPassword
            },
            {
                headers: {
                    "x-api-key": API_KEY
                },
            }
        );

        if (response.status === 200 && response.data) {
            const token = response.data.token;
            return token;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error)
        return null;
    }
};




