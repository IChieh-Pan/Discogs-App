import React, { useEffect, useState, createContext } from "react";
import app from "../components/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const db = app.firestore();
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  const addFavorite = (id) => {
    var user = app.auth().currentUser;
    console.log("user", user);
    user
      .updateProfile({
        favorites: [id],
        displayName: "foo",
      })
      .then(function () {
        // Update successful.
        console.log("suxcces");
      })
      .catch(function (error) {
        // An error happened.
        console.log("error", error);
      });
  };
  if (pending) {
    return <h2>Loading...</h2>;
  }

  return (
    <AuthContext.Provider value={{ currentUser, addFavorite }}>
      {children}
    </AuthContext.Provider>
  );
};
