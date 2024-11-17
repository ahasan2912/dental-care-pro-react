// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwItckGcHcu-n-gfp4zAP_RffwvmiIEEE",
  authDomain: "auth-moha-milon-project-64f5a.firebaseapp.com",
  projectId: "auth-moha-milon-project-64f5a",
  storageBucket: "auth-moha-milon-project-64f5a.firebasestorage.app",
  messagingSenderId: "218606503313",
  appId: "1:218606503313:web:50813fe164fb4e62610630"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;