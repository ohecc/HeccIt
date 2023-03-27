// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { initializeAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBdlToPSORBLLWTtodpaBZaKYC6OUuzw-0",
    authDomain: "heccit-b25ac.firebaseapp.com",
    projectId: "heccit-b25ac",
    storageBucket: "heccit-b25ac.appspot.com",
    messagingSenderId: "803484164522",
    appId: "1:803484164522:web:1286957fe16754cdec8bd3"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

  // const app = initializeApp(firebaseConfig);
  // const db = getFirestore();
  // const auth = initializeAuth();

  // export { db, auth }

//   // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBdlToPSORBLLWTtodpaBZaKYC6OUuzw-0",
//   authDomain: "heccit-b25ac.firebaseapp.com",
//   projectId: "heccit-b25ac",
//   storageBucket: "heccit-b25ac.appspot.com",
//   messagingSenderId: "803484164522",
//   appId: "1:803484164522:web:1286957fe16754cdec8bd3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);