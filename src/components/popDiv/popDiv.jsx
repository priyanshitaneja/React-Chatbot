import React, { useState, useEffect, useRef } from "react";

import "../../data/styles/common.scss";
import "./index.scss";

import { defaultMessages , botReplys , sender } from "../../data/config/constants";

import UserMsg from "../userMsg/userMsg";
import BotHeader from "../botHeader/botHeader";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const PopDiv = ({ setPop }, { pop }) => {

  const hasMounted = useRef(false);
  const chatAreaRef = useRef();
  const chatbodyRef = useRef();

  const [inputText, setInputText] = useState("");
  const [msgs, setMsgs] = useState(defaultMessages);

  useEffect(() => {
    chatbodyRef.current.scrollTop = chatbodyRef.current.scrollHeight
  }, [])

  const scrollToBottom = () => {
    chatAreaRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if(msgs[msgs.length - 1].sender === sender.CUSTOMER) {
      const index = parseInt(Math.random() * 15);
      console.log(index);
      setMsgs((prevMsg) => {
        return [...prevMsg, botReplys[index]];
      });
    }
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
      const userMsgObj = { 
        id: new Date().valueOf(),
        text: inputText,
        sender: "customer"
      }
      setMsgs((prevMsg) => {
        return [...prevMsg, userMsgObj];
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
      <div className="chatArea" ref={chatbodyRef} >
        {
          msgs.map((item, index) => (
          <UserMsg
            message={item}
            key={index}
          />
          ))
        }
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
