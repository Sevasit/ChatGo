// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBxRd2iuVpJDlUFfe6o-tJClBDhSLTOXM",
  authDomain: "games-c5f95.firebaseapp.com",
  databaseURL: "https://games-c5f95.firebaseio.com",
  projectId: "games-c5f95",
  storageBucket: "games-c5f95.appspot.com",
  messagingSenderId: "665881573949",
  appId: "1:665881573949:web:aa2cbc5e87717896f00854",
  measurementId: "G-094LJ9M0S5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const auth = getAuth(app);
