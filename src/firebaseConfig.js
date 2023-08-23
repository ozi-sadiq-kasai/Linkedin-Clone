// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXp2jUtpBrEzULs2CeYS6STGk1m7xrMFk",
  authDomain: "linkedin-clone-22c65.firebaseapp.com",
  projectId: "linkedin-clone-22c65",
  storageBucket: "linkedin-clone-22c65.appspot.com",
  messagingSenderId: "108188822297",
  appId: "1:108188822297:web:1e17d2a51ff15c2e01f388",
  measurementId: "G-RL271QYK6B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
