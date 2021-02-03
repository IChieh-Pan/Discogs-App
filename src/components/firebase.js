import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import { firebaseConfig } from "../config.js";

app.initializeApp(firebaseConfig);

// let db= firebase.firestore()

export default app;
