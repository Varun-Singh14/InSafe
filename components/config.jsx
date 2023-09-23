// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-0sGxR9BDDm8eNMJFf_ZHFtGQv_hhZEU",
  authDomain: "insafe-af68f.firebaseapp.com",
  projectId: "insafe-af68f",
  storageBucket: "insafe-af68f.appspot.com",
  messagingSenderId: "838871181326",
  appId: "1:838871181326:web:30bccbc4bcb3582ec1745f",
  measurementId: "G-D9H3S78HF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);