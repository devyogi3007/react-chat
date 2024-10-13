// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFYiSWfqcr78ACOTuInM3oRMz900xNGts",
  authDomain: "reactauth-86124.firebaseapp.com",
  databaseURL: "https://reactauth-86124-default-rtdb.firebaseio.com",
  projectId: "reactauth-86124",
  storageBucket: "reactauth-86124.appspot.com",
  messagingSenderId: "1045699153290",
  appId: "1:1045699153290:web:93d57e57f40e44e0080c73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
