// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCFpXgzAZ6lAWlHUXSbd74IwOK87QVWl5M",
    authDomain: "visitcounter-90007.firebaseapp.com",
    databaseURL: "https://visitcounter-90007-default-rtdb.firebaseio.com",
    projectId: "visitcounter-90007",
    storageBucket: "visitcounter-90007.firebasestorage.app",
    messagingSenderId: "827634743311",
    appId: "1:827634743311:web:057b3a4d408f93b0f84b7a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };