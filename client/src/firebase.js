// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "skyestates-e5fc0.firebaseapp.com",
  projectId: "skyestates-e5fc0",
  storageBucket: "skyestates-e5fc0.appspot.com",
  messagingSenderId: "132054445254",
  appId: "1:132054445254:web:e001ef97ede8436dd37bc7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);