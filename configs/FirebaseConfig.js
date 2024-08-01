// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDtxt1WD2SAig_sUwfOr4wT0UAF9sBz0I",
  authDomain: "react-native-3d373.firebaseapp.com",
  projectId: "react-native-3d373",
  storageBucket: "react-native-3d373.appspot.com",
  messagingSenderId: "551383392583",
  appId: "1:551383392583:web:44e1480de06ac2406a6c62",
  measurementId: "G-6JZ9ZG1R0Z",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
