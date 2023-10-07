// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-41052.firebaseapp.com",
  projectId: "mern-auth-41052",
  storageBucket: "mern-auth-41052.appspot.com",
  messagingSenderId: "49905385522",
  appId: "1:49905385522:web:30ab79f81d8ed8ad7d3c2b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
