// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu1KdkAVdTtQyReFwKcHikvgOH-L-49Xc",
  authDomain: "agency-aa371.firebaseapp.com",
  projectId: "agency-aa371",
  storageBucket: "agency-aa371.appspot.com",
  messagingSenderId: "1049594437027",
  appId: "1:1049594437027:web:357e4e4561d863d50bce16",
  measurementId: "G-ZQ2YBHX30C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);