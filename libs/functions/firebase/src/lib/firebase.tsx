// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage"
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd-G5afmdtaWVNVygP_hNujRUGwb9tfmU",
  authDomain: "sivitex-8af5b.firebaseapp.com",
  projectId: "sivitex-8af5b",
  storageBucket: "sivitex-8af5b.appspot.com",
  messagingSenderId: "162260496830",
  appId: "1:162260496830:web:baccc09d308c52d4cf09ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
