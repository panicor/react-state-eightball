import React, { useState } from "react";
import "./EightBall.css";
import messagesArr from "./messages.json";
import {rand} from "./rand";

function EightBall({ messages = messagesArr }) {
    const [message, setMessage] = useState({
        msg: "Think of a Question", color: "black",
    });

    function clickHandler(e){
        setMessage(rand(messages))
    }

  return (
    <div
      className="EightBall"
      onClick={clickHandler}
      style={{ backgroundColor: message.color }}
    >
        <p>{message.msg}</p>
    </div>
  );
}

export default EightBall;
