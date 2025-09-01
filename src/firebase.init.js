// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//Do Not Share Public 
const firebaseConfig = {
  apiKey: "AIzaSyAgWEhUsjI3y2yBE-l6jSG76bL4Y57q6NY",
  authDomain: "email-password-auth-1dc08.firebaseapp.com",
  projectId: "email-password-auth-1dc08",
  storageBucket: "email-password-auth-1dc08.firebasestorage.app",
  messagingSenderId: "1004197215866",
  appId: "1:1004197215866:web:d5eb74c9309e639b9545c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;