// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdJzYAm8ERZ1fA9yTvFbifJ7UOS4PuqAw",
  authDomain: "rexrox-music.firebaseapp.com",
  projectId: "rexrox-music",
  storageBucket: "rexrox-music.appspot.com",
  messagingSenderId: "253838746425",
  appId: "1:253838746425:web:d4c3c5da5a7623a6fe7ee8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;