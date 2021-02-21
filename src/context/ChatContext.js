import React, { useState, createContext, useContext, useEffect } from "react";
import app from "../components/firebase";
import { AuthContext } from "./AuthContex";

const initContext = {
  messages: [],
  writeMessages: () => {
    throw new Error("writeMessages() not implemented");
  },
  readMessages: () => {
    throw new Error("readMessages() not implemented");
  },
};

export const ChatContext = createContext(initContext);

export const ChatProvider = ({ children }) => {
  const db = app.firestore();
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState(initContext.messages);

  useEffect(() => {
    readMessages();
  }, []);

  const writeMessages = async (body) => {
    console.log("user", user);
    db.collection("messages")
      .add({
        username: user.displayName,
        timestamp: new Date(),
        body,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        readMessages();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const readMessages = () => {
    db.collection("messages")
      .orderBy("timestamp")
      .limit(10)
      .get()
      .then((querySnapshot) => {
        const messageArray = [];

        querySnapshot.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data());
          messageArray.push(doc.data());
        });
        setMessages(messageArray);
      });
  };

  return (
    <ChatContext.Provider value={{ messages, readMessages, writeMessages }}>
      {children}
    </ChatContext.Provider>
  );
};
