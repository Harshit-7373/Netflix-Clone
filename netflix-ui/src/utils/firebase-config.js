import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBz0cNpeFrZyepjH999HgrlhXKcA8CvID8",
  authDomain: "react-netflix-clone-6338e.firebaseapp.com",
  projectId: "react-netflix-clone-6338e",
  storageBucket: "react-netflix-clone-6338e.appspot.com",
  messagingSenderId: "522096615944",
  appId: "1:522096615944:web:11c7dbeb75f0f4c51027bd",
  measurementId: "G-7XXRNWP4RB",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
