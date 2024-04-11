// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcMumypkSJlQ8wNf_Vg1sCYU053QfYfhw",
  authDomain: "mern-book-inventory-64d96.firebaseapp.com",
  projectId: "mern-book-inventory-64d96",
  storageBucket: "mern-book-inventory-64d96.appspot.com",
  messagingSenderId: "586408655112",
  appId: "1:586408655112:web:760c13bb7f3eb6c1d0d4bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;