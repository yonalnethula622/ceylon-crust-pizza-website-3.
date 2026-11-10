import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCA0H5V981dlNWV4Y3C0s_4OSHlZrq7_GY",
  authDomain: "ceylon-crust-pizza.firebaseapp.com",
  projectId: "ceylon-crust-pizza",
  storageBucket: "ceylon-crust-pizza.firebasestorage.app",
  messagingSenderId: "738510786932",
  appId: "1:738510786932:web:ace48eb4afc9cb69229c21",
  measurementId: "G-XYZWY5C016"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db };
