// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4u3y5uHiRW-rV9UJbnSb3aIydmNbSol0",
  authDomain: "myorginalreactapp.firebaseapp.com",
  projectId: "myorginalreactapp",
  storageBucket: "myorginalreactapp.appspot.com",
  messagingSenderId: "408030090051",
  appId: "1:408030090051:web:5e82eee24dd3cc9b7915f6",
  measurementId: "G-B9CXTQ5GZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;