// Import the functions you need from the SDKs you need
import  {initializeApp}  from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5-sF4muKuSt8vin2PFHoVD6K65HiZRBY",
  authDomain: "react7-firebase.firebaseapp.com",
  projectId: "react7-firebase",
  storageBucket: "react7-firebase.appspot.com",
  messagingSenderId: "973144656457",
  appId: "1:973144656457:web:95b32b0dd56f35c5810d98"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);  
