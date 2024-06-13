// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-UvNnq9mAgPAdx3fvYCST63khWLTva6k",
    authDomain: "master-ingenius.firebaseapp.com",
    projectId: "master-ingenius",
    storageBucket: "master-ingenius.appspot.com",
    messagingSenderId: "538642707304",
    appId: "1:538642707304:web:2a7426281a60a497315cdd",
    measurementId: "G-JTJ48HZS1P"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseDB  = getFirestore( FirebaseApp );