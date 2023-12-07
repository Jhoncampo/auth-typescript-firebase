// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {FormValues} from "../pages/Login"
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBt5EQNxLWyVqY3jP3PaLAiZfUhfzYhFrE",
    authDomain: "typescript-6779d.firebaseapp.com",
    projectId: "typescript-6779d",
    storageBucket: "typescript-6779d.appspot.com",
    messagingSenderId: "1071685661774",
    appId: "1:1071685661774:web:b600346e739d1cdd817f1f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const login = ({ email, password }: FormValues) => {
    return signInWithEmailAndPassword(auth, email, password);
};
export const register = ({email, password}: FormValues) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}
export const logout = ()=>{
    return signOut(auth)
}