// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_TTUkdZrSoKqXq5U0JvA7E0ho4v2nbNM",
  authDomain: "clinicflow-auth-firebase.firebaseapp.com",
  projectId: "clinicflow-auth-firebase",
  storageBucket: "clinicflow-auth-firebase.firebasestorage.app",
  messagingSenderId: "129060424642",
  appId: "1:129060424642:web:fd1d81e1418c7f7eff645b",
};

// Initialize Firebase (avoid reinitializing in development)
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

export default app;
