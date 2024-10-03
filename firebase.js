// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfDlsgmbVilAlA8NT3FUdBBhatXQXz68k",
  authDomain: "emailprotocol-cf99b.firebaseapp.com",
  projectId: "emailprotocol-cf99b",
  storageBucket: "emailprotocol-cf99b.appspot.com",
  messagingSenderId: "908585876419",
  appId: "1:908585876419:web:8c83dee3a243537389db76",
  measurementId: "G-RMH3YFGMQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);