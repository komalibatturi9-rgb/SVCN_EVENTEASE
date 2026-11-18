import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";

import { 
    getAuth 
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

import { 
    getFirestore 
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDULGoIQTERpgt9r2SHeE3GP5eLRafdJgc",
    authDomain: "svcn-eventease.firebaseapp.com",
    projectId: "svcn-eventease",
    storageBucket: "svcn-eventease.firebasestorage.app",
    messagingSenderId: "564854148304",
    appId: "1:564854148304:web:86040ec9e70fa7fe2122d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);

// Initialize Firestore Database
export const db = getFirestore(app);

console.log("Firebase connected successfully!");
