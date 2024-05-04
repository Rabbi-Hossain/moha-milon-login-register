// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbn7MSc8t37wJZkmuESc6h_l-IirEi9JA",
  authDomain: "moha-milon-auth-2ef11.firebaseapp.com",
  projectId: "moha-milon-auth-2ef11",
  storageBucket: "moha-milon-auth-2ef11.appspot.com",
  messagingSenderId: "61650545136",
  appId: "1:61650545136:web:3abab50f6f4cf2b908d535"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth