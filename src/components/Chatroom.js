import React, { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContex";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  container: {
    bottom: 0,
    // position: "fixed" // remove this so we can apply flex design
  },
  bubbleContainer: {
    width: "100%",
    display: "flex", //new added flex so we can put div at left and right side
    //check style.css for left and right classnaeme based on your data
  },
  bubble: {
    border: "0.5px solid black",
    borderRadius: "10px",
    margin: "5px",
    padding: "10px",
    display: "inline-block",
  },
}));

function Chatroom() {
  const classes = useStyles();
  const { messages, readMessages, writeMessages } = useContext(ChatContext);
  const { loggedIn } = useContext(AuthContext);
  const [body, setBody] = useState("");

  const handleInput = (e) => {
    setBody(e.target.value);
  };

  const handleWriteMsg = () => {
    writeMessages(body);
  };

  console.log("messages", messages);

  return (
    <div>
      <input
        type="text"
        placeholder="message"
        value={body}
        onChange={handleInput}
      />
      <button onClick={handleWriteMsg}>SEND</button>
      {loggedIn ? <p>User looged in</p> : <p>Please log in first</p>}
      {messages ? (
        messages.map((message, index) => {
          return (
            <div>
              <h6>{message.userName}</h6>
              <h6>{message.timestamp.toString()}</h6>
              <p>{message.body}</p>
            </div>
          );
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default Chatroom;
