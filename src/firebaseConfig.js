import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyArFIAhmQowNO8Urpckdbw9E86vK2fo2b4",
    authDomain: "realtimeroomschatapp.firebaseapp.com",
    projectId: "realtimeroomschatapp",
    storageBucket: "realtimeroomschatapp.appspot.com",
    messagingSenderId: "598864643519",
    appId: "1:598864643519:web:ccb9f848f2fcd52cdd4d0a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)