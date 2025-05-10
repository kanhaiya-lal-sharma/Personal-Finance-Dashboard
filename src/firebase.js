// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 🔥 Add Firestore

const firebaseConfig = {
  apiKey: "AIzaSyBHfnTFhG4kaAO0zFCiMymwnvcs1Ivua9M",
  authDomain: "practice-47d81.firebaseapp.com",
  projectId: "practice-47d81",
  storageBucket: "practice-47d81.appspot.com",
  messagingSenderId: "854437093499",
  appId: "1:854437093499:web:d515eded80d44a161ac2de"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // 🔥 Initialize Firestore

export { auth, db };
