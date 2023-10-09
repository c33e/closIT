// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
//import { getAnalytics } from "firebase/analytics"; may need later
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2gd05IH8JGBaTAsUVbFibyNMSssOwOYs",
  authDomain: "closit-dc24a.firebaseapp.com",
  projectId: "closit-dc24a",
  storageBucket: "closit-dc24a.appspot.com",
  messagingSenderId: "609002498138",
  appId: "1:609002498138:web:7dc0c92b0fd7a841ffd063",
  measurementId: "G-MCVR65JJTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app)

export {auth}