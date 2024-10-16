import CryptoJS from 'crypto-js';
const AES_KEY = process.env.REACT_APP_AES_KEY;
// Encrypt function with 256-bit key, CBC mode, and null IV
export const encryptData = (data) => {
    const key = CryptoJS.enc.Utf8.parse(AES_KEY); // 256-bit key
    
    // IV is null (optional)
    const iv = CryptoJS.enc.Utf8.parse(''); // Empty IV

    const encrypted = CryptoJS.AES.encrypt(data, key, {
        iv: iv, // Set IV to null/empty
        mode: CryptoJS.mode.CBC, // CBC mode
        padding: CryptoJS.pad.Pkcs7 // Padding scheme
    });

    return encrypted.toString(); // Base64 format
};

// Decrypt function with 256-bit key, CBC mode, and null IV
export const decryptData = (ciphertext) => {
    const key = CryptoJS.enc.Utf8.parse(AES_KEY); // 256-bit key
    
    // IV is null (optional)
    const iv = CryptoJS.enc.Utf8.parse(''); // Empty IV

    const decrypted = CryptoJS.AES.decrypt(ciphertext, key, {
        iv: iv, // Set IV to null/empty
        mode: CryptoJS.mode.CBC, // CBC mode
        padding: CryptoJS.pad.Pkcs7 // Padding scheme
    });

    return decrypted.toString(CryptoJS.enc.Utf8); // Convert decrypted bytes to string
};
