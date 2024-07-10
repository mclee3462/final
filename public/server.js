// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMdDmah0KLghD1d9KkZxHAd-ZUDQ5RK3w",
  authDomain: "min-max-inventory-7bf23.firebaseapp.com",
  projectId: "min-max-inventory-7bf23",
  storageBucket: "min-max-inventory-7bf23.appspot.com",
  messagingSenderId: "494280029189",
  appId: "1:494280029189:web:6a36517d02f253a947986c",
  measurementId: "G-MYCR26QXR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);