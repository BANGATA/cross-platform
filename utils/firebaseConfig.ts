// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDswEN3H3LK2--sMhqJsm77dkObxfwFJ5g",
  authDomain: "cross-platform-umn.firebaseapp.com",
  projectId: "cross-platform-umn",
  storageBucket: "cross-platform-umn.appspot.com",
  messagingSenderId: "566975798958",
  appId: "1:566975798958:web:f9a94a6bf4f0a686be173f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage();

export default firebaseConfig;
