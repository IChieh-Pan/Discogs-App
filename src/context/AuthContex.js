import React, { useState, createContext } from "react";
import { useHistory } from "react-router-dom";
import app from "../components/firebase";

export const AuthContext = createContext(initContext);

const initContext = {
  user: null,
  signUp: () => {
    throw new Error("login() not implemented");
  },
  logIn: () => {
    throw new Error("register() not implemented");
  },
  addFavorite: () => {
    throw new Error("addToFavorite() not implemented");
  },
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const db = app.firestore();

  const signUp = () => {
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        console.log("user", user);
        setUser(user);
        setLoggedIn(true);

        db.collection("users")
          .doc(user.uid)
          .set({
            username,
            favorites: [],
          })
          .then(() => {
            console.log("User sign up successfully!");
          })
          .catch((error) => {
            console.error("Error when writing user document", error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const logIn = () => {
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", user);
        setUser(user);
        setLoggedIn(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("There is an error when logging");
      });
  };

  const addFavorite = (addItem) => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        const userRef = db.collection("users").doc(user.uid);
        return userRef
          .update({
            regions: firebase.firestore.FieldValue.arrayUnion(addItem),
          })
          .then(() => {
            alert("Update Success!");
          })
          .catch((error) => {
            alert("Error when adding item", error);
          });
      } else {
        history.push("/login");
      }
    });
  };
  return (
    <AuthContext.Provider
      value={{ user, loggedIn, logIn, signUp, addFavorite }}
    >
      {children}
    </AuthContext.Provider>
  );
};
