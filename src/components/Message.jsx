import React from "react";
import "./styles/Message.css";

function Message({ message }) {
  return (
    <div className="container">
      <h2 className="message">{message}</h2>
    </div>
  );
}

export default Message;
