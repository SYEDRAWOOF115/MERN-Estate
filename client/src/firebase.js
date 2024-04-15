// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-748bc.firebaseapp.com",
  projectId: "mern-estate-748bc",
  storageBucket: "mern-estate-748bc.appspot.com",
  messagingSenderId: "784177348684",
  appId: "1:784177348684:web:27ee5fba81ff29e36d34e9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);