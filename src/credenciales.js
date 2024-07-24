// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAECGLSWGfkRR_dSq0BjHIHWLNRfpsLTZM",
  authDomain: "login-tasca7-starships.firebaseapp.com",
  projectId: "login-tasca7-starships",
  storageBucket: "login-tasca7-starships.appspot.com",
  messagingSenderId: "1043807496485",
  appId: "1:1043807496485:web:b7cd4afb26d56a5af392cc"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig)

export default appFirebase

