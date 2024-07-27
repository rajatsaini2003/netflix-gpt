// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB14KxRLdO-CpWJl7Ng2iTg7v3vEXiDgPI",
  authDomain: "netflix-gpt-bc8d7.firebaseapp.com",
  projectId: "netflix-gpt-bc8d7",
  storageBucket: "netflix-gpt-bc8d7.appspot.com",
  messagingSenderId: "450564433266",
  appId: "1:450564433266:web:9043398b71094ab7d329eb",
  measurementId: "G-L3P4JXDDQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();