// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firestore from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT-oXpqxby099bYyZQ618SEyoAN5gYrr4",
  authDomain: "teste-8bc99.firebaseapp.com",
  projectId: "teste-8bc99",
  storageBucket: "teste-8bc99.appspot.com",
  messagingSenderId: "836253991111",
  appId: "1:836253991111:web:b2a7a0e08685766fb4fee2",
  measurementId: "G-KK95J22473"
};

// Initialize Firebase
console.log('Conectado ao Firebase!')
const Firebase = initializeApp(firebaseConfig);
export const db = firestore.getFirestore(Firebase)

export { firestore }