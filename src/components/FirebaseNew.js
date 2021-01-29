import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDAPTLBCUYX_tHi-s_cynnEJSUVYqODwFs",
  authDomain: "discogs-app-1702a.firebaseapp.com",
  projectId: "discogs-app-1702a",
  storageBucket: "discogs-app-1702a.appspot.com",
  messagingSenderId: "20433794205",
  appId: "1:20433794205:web:384d09a7e337217cc19074",
  measurementId: "G-DZJ2FHQVY3",
};

const FirebaseNew = firebase.initializeApp(firebaseConfig)

export default FirebaseNew;
