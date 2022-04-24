// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFwbKhJ2QHs9NkyCVrkQk_0DB6SE5wYc4",
  authDomain: "simple-ecom-project-d45c0.firebaseapp.com",
  projectId: "simple-ecom-project-d45c0",
  storageBucket: "simple-ecom-project-d45c0.appspot.com",
  messagingSenderId: "526673023000",
  appId: "1:526673023000:web:27e4e8b21bc34c008a336d"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const auth = getAuth(fireBaseApp);

export default auth;