import React, { useState, useEffect, useRef } from "react";

import "../../data/styles/common.scss";
import "./index.scss";

import { avatar } from "../../data/assets/images/index.js";

import UserMsg from "../userMsg/userMsg";
import BotMessage from "../botMessage/BotMessage";
import BotHeader from "../botHeader/BotHeader";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const PopDiv = ({ setPop }, { pop }) => {

  const hasMounted = useRef(false);
  const chatAreaRef = useRef();
  // const chatbodyRef = useRef();

  const [inputText, setInputText] = useState("");
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight
  }, [])

  const scrollToBottom = () => {
    chatAreaRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (!hasMounted.current)
      hasMounted.current = true
    else
      scrollToBottom()
  }, [msgs])

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  };

  const handleSend = () => {
    if (inputText.trim() !== "" && inputText.trim() !== null) {
      setMsgs((prevMsg) => {
        return [...prevMsg, inputText];
      });
      setInputText("");
    }
  };

  const handleEnter = (event) => {
    if (
      event.key === "Enter" &&
      inputText.trim() !== "" &&
      inputText.trim() !== null
    ) {
      handleSend();
    }
  };

  return (
    <div className="BotWindow" style={{ display: pop ? "none" : null }}>
      <HighlightOffIcon className="closeIcon" onClick={() => setPop(false)} />
      <BotHeader />
      <div className="chatArea">
        <img src={avatar} className="avatar" alt="avatar" />
        <BotMessage />
        {msgs.map((item, index) => (
          <UserMsg text={item} key={index} />
        ))}
        <div ref={chatAreaRef} />
      </div>
      <div className="inputArea">
        <input
          className="popUpInput"
          type="text"
          placeholder="Send your query here..."
          value={inputText}
          onChange={handleChange}
          onKeyPress={handleEnter}
        />
        <button className="sendBtn" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default PopDiv;
