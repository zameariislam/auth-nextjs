// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZyU7GPntk84uW8zAUeJsTP5v1MH5Av5I",
  authDomain: "next-auth-723a0.firebaseapp.com",
  projectId: "next-auth-723a0",
  storageBucket: "next-auth-723a0.appspot.com",
  messagingSenderId: "330896011598",
  appId: "1:330896011598:web:8cca872de83923f3712e1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth