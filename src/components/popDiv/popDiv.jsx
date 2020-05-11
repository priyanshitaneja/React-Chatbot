import React, { useState, useEffect, useRef } from "react";

import "../../data/styles/common.scss";
import "./index.scss";

import { avatar } from "../../data/assets/images/index.js";

import UserMsg from "../userMsg/userMsg";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import { botMessage } from "../../data/config/constants";

const PopDiv = () => {
  const [close, setClose] = useState(false);

  const [inputText, setInputText] = useState("");

  const [msgs, setMsgs] = useState([]);

  const chatbodyRef = useRef();

  useEffect(() => {
    chatbodyRef.current.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

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
    <div className="BotWindow" style={{ display: close ? "none" : null }}>
      <div className="botHeader">
        <img
          src={avatar}
          className="avatarIcon"
          alt="Avatar Icon"
        ></img>
        <div>
          <p class="headerText">Chatbot P.T</p>
          <p className="onlineStatus">
            <FiberManualRecordIcon className="onlineIcon" />
            Online
          </p>
        </div>
        <HighlightOffIcon
          className="closeIcon"
          onClick={() => setClose(true)}
        />
      </div>
      <div className="chatArea">
        <img
          src={avatar}
          className="avatar"
          alt="avatar"
        />
        {botMessage.map((item) => {
          return (
            <div className="botMsgArea">
              <p className="popUpMsg botMsg" key={item.id}>
                {item.text}
              </p>
            </div>
          );
        })}
        {msgs.map((item, index) => (
          <UserMsg text={item} key={index} />
        ))}
        <div ref={chatbodyRef} />
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
