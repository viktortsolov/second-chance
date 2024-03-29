// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgBBIqOcmD13Mb606HFQ2FAu3FWGLNdmc",
  authDomain: "second-chance-viktortsolov.firebaseapp.com",
  databaseURL: "https://second-chance-viktortsolov-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "second-chance-viktortsolov",
  storageBucket: "second-chance-viktortsolov.appspot.com",
  messagingSenderId: "441737278016",
  appId: "1:441737278016:web:449f0971157f5af431a5a5",
  measurementId: "G-RSMDBG29H2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;