
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBtc1R-dXZEE4xUQ6aIb48yCbGQdQ4cdc4",
    authDomain: "moon2-c98cb.firebaseapp.com",
    projectId: "moon2-c98cb",
    storageBucket: "moon2-c98cb.appspot.com",
    messagingSenderId: "970196241018",
    appId: "1:970196241018:web:da24eb26a1d170370749c3"
  };


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
