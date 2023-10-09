// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDS_PWfV2jvgQMe-NxVgnDzIGHyuwxLQAU",
  authDomain: "image-input.firebaseapp.com",
  projectId: "image-input",
  storageBucket: "image-input.appspot.com",
  messagingSenderId: "941283453943",
  appId: "1:941283453943:web:698975527c2c1aee769cf2",
  measurementId: "G-CCV1X2LVBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default getFirestore();