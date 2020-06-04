import { botReplys, sender } from "../../data/config/constants";

import React, { useState, useEffect, useRef } from "react";

import "../../data/styles/common.scss";
import "./index.scss";

import UserMsg from "../userMsg/userMsg";
import BotHeader from "../botHeader/botHeader";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

var _ = require('lodash');

const SetChatbot = ({ setChatbot , msgs, setMsgs, updatedMsgs}) => {

  const hasMounted = useRef(false);
  const chatAreaRef = useRef();
  const chatbodyRef = useRef();
  const timer = useRef(null);

  const [inputText, setInputText] = useState("");

  useEffect(() => {
    chatbodyRef.current.scrollTop = chatbodyRef.current.scrollHeight
  }, [])

  const scrollToBottom = () => {
    chatAreaRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (!hasMounted.current)
      hasMounted.current = true
    else {
      if (msgs[msgs.length - 1].sender === sender.CUSTOMER) {
        if (timer.current)
          clearInterval(timer.current)
        const timeout = setTimeout(() => {
          const index = parseInt(Math.random() * 15);
          // console.log(index);
          setMsgs((prevMsg) => {
            return [...prevMsg, botReplys[index]];
          });
        }, 1500);
        timer.current = timeout;
      }
    }
    scrollToBottom()
  }, [msgs]);

  const handleChange = (event) => {

    event.persist();

    let debouncedFn =  _.debounce(() => {
      let newValue = event.target.value;
         setInputText(newValue);
    }, 300);
    
    if (!debouncedFn) {
      debouncedFn();
    }
    debouncedFn();

    // const newValue = event.target.value;
    // console.log(newValue);
    // setInputText(newValue);
  };

  const handleSend = () => {
    if (inputText.trim() !== "" && inputText.trim() !== null) {
      const userMsgObj = {
        id: new Date().valueOf(),
        text: inputText,
        sender: "customer"
      }
      updatedMsgs(userMsgObj);
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
    <div className="BotWindow">
      <HighlightOffIcon className="closeIcon" onClick={() => setChatbot(false)} />
      <BotHeader />
      <div className="chatArea" ref={chatbodyRef} >
        {
          msgs.map((msg, index) => {
            const isFirst = (index === 0) || (index > 0 && msgs[index-1].sender !== msg.sender)
            return (
              <UserMsg
              message={msg}
              key={index}
              showAvatar={isFirst}
              />  
            )
          })
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

export default SetChatbot;
