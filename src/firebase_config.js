// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSrTtAZe4qTIr8uieZ1hn6yI2aam5kTTA",
  authDomain: "optician-a5eba.firebaseapp.com",
  projectId: "optician-a5eba",
  storageBucket: "optician-a5eba.appspot.com",
  messagingSenderId: "38301640301",
  appId: "1:38301640301:web:045f548500d2012eae0164",
  measurementId: "G-CBL8SVB9Z8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
