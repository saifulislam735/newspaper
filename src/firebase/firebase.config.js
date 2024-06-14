// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPX_tR1Th36dH5NiSodpNdF4W4gGDVyrA",
    authDomain: "dragonnews-auth-80087.firebaseapp.com",
    projectId: "dragonnews-auth-80087",
    storageBucket: "dragonnews-auth-80087.appspot.com",
    messagingSenderId: "145931625188",
    appId: "1:145931625188:web:f50d61ba7e25a9b50f02f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;