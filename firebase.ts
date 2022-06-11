import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvVaWPYZ7Aa2UO-DsfRL9F_OBZafFCP6U",
    authDomain: "netflix-clone-aec0d.firebaseapp.com",
    projectId: "netflix-clone-aec0d",
    storageBucket: "netflix-clone-aec0d.appspot.com",
    messagingSenderId: "398970358756",
    appId: "1:398970358756:web:d82a7b89b4882908f7d5f1"
  };
  

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }