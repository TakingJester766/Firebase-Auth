// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzHbdpa8DreyPjtqc2gpXXh9xk3MaFQQU",
  authDomain: "fir-auth-a9e98.firebaseapp.com",
  projectId: "fir-auth-a9e98",
  storageBucket: "fir-auth-a9e98.appspot.com",
  messagingSenderId: "161057337622",
  appId: "1:161057337622:web:3875ea3c587ad545fb2037"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;