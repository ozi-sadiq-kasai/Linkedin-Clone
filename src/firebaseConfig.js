// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRvvcCSW-jjTFhl4iKlRux_w4Ukaj6N38",
  authDomain: "linkedinclone-be7c1.firebaseapp.com",
  projectId: "linkedinclone-be7c1",
  storageBucket: "linkedinclone-be7c1.appspot.com",
  messagingSenderId: "158294659443",
  appId: "1:158294659443:web:e6aab270f0365af4377506",
  measurementId: "G-8L9GWJS0LM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore= getFirestore(app)
export { auth,app,firestore}






