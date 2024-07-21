import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'
const firebaseConfig = {
    apiKey: String(import.meta.env.API_KEY),
    authDomain: String(import.meta.env.AUTH_DOMAIN),
    projectId: String(import.meta.env.PROJECT_ID),
    storageBucket: String(import.meta.env.STORAGE_BUCKET),
    messagingSenderId: String(import.meta.env.MESSAGING_SENDER_ID),
    appId: String(import.meta.env.APP_ID)
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)