import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDqu_xQgFB5ikqd-2q69E5Uypxwi1Z5ZXo",
  authDomain: "prueba-b11d5.firebaseapp.com",
  projectId: "prueba-b11d5",
  storageBucket: "prueba-b11d5.appspot.com",
  messagingSenderId: "972729846222",
  appId: "1:972729846222:web:7ead2e9c9b31d1f76c439f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();
