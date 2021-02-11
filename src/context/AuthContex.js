import React, { useState, createContext, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import app from "../components/firebase";

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

export const AuthContext = createContext(initContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [favList, setFavList] = useState([]);
  const history = useHistory();
  const db = app.firestore();

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log("user", user);
        setLoggedIn(true);
        getFavorites();
      }
    });
  }, []);

  const signUp = ({ email, password, username }) => {
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        console.log("user", user);
        // alert("User sign up successfully!");

        user
          .updateProfile({
            displayName: username,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
          .then(function () {
         
            setUser(user);
            // setUser(user);
            setLoggedIn(true);
          })
          .catch(function (error) {});

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
        console.log("error creating user...", errorMessage);
      });
  };

  const logIn = async ({ email, password }) => {
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

  const addFavorite = (favorites, title) => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        const userRef = db.collection("users").doc(user.uid);
        return userRef
          .update({
            favorites: app.firestore.FieldValue.arrayUnion(favorites),
          })
          .then(() => {
            alert(`${title} added!`);
          })
          .catch((error) => {
            console.log("Error when adding item", error);
          });
      } else {
        history.push("/login");
      }
    });
  };

  const handleLogout = () => {
    app.auth().signOut();
    console.log("logout", handleLogout);
    alert("Log out successfully");
  };

  const getFavorites = () => {
    app.auth().onAuthStateChanged((user) => {
      const FavoritesRef = db.collection("users").doc(user.uid);

      FavoritesRef.get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Favorites:", doc.data().favorites);
            setFavList(doc.data().favorites);
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loggedIn,
        logIn,
        signUp,
        addFavorite,
        handleLogout,
        favList,
        getFavorites,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
