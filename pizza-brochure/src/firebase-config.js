// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBThElXjSuQ5kgX8VdpfmKPJkmeRfiBqpg",
  authDomain: "pizza-brochure-development.firebaseapp.com",
  projectId: "pizza-brochure-development",
  storageBucket: "pizza-brochure-development.appspot.com",
  messagingSenderId: "640262976333",
  appId: "1:640262976333:web:3077160c3a7983a1407d04",
  measurementId: "G-5P0C4F4PQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);