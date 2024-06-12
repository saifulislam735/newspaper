// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBytC61FxwAX4Q4Kf9THdJo2HrzAQTSmQI",
    authDomain: "newspaper-react-bs-fb.firebaseapp.com",
    projectId: "newspaper-react-bs-fb",
    storageBucket: "newspaper-react-bs-fb.appspot.com",
    messagingSenderId: "150098757755",
    appId: "1:150098757755:web:332951fb6396452e5e3ade"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;