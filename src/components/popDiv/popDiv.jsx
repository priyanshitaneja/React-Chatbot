import React, { useState, useEffect, useRef } from "react";

import "../../data/styles/common.scss";
import "./index.scss";

import { avatar } from "../../data/assets/images/index.js";
import { botReplys } from "../../data/config/constants";
import { defaultMessages } from "../../data/config/constants";

import UserMsg from "../userMsg/userMsg";
// import BotMessage from "../botMessage/botMessage";
import BotHeader from "../botHeader/botHeader";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const PopDiv = ({ setPop }, { pop }) => {

  const hasMounted = useRef(false);
  const chatAreaRef = useRef();
  // const chatbodyRef = useRef();

  const [inputText, setInputText] = useState("");
  const [msgs, setMsgs] = useState([
    defaultMessages[0].text , defaultMessages[1].text, defaultMessages[2].text
  ]);

  useEffect(() => {
    chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight
  }, [])

  const scrollToBottom = () => {
    chatAreaRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if(msgs[msgs.length - 1].sender === "customer") {
      const i = parseInt(Math.random() * 15);
      console.log(botReplys[i].text);
      msgs.concat(botReplys[i].text);
    }
      // autoReplyFun();
    if (!hasMounted.current)
      hasMounted.current = true
    else
      scrollToBottom()
  }, [msgs])

  // const autoReplyFun = () => {
  //   const i = parseInt(Math.random() * 15);
  //   // msgs.push(botReplys[i].text);
  //   console.log(botReplys[i].text);
  //   msgs.concat(botReplys[i].text);
  // }

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
        return [...prevMsg, userMsgObj.text];
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
      // setTimeout(botReply(),100);
      // botReply();
    }
  };

  return (
    <div className="BotWindow" style={{ display: pop ? "none" : null }}>
      <HighlightOffIcon className="closeIcon" onClick={() => setPop(false)} />
      <BotHeader />
      <div className="chatArea">
        <img src={avatar} className="avatar" alt="avatar" />
        {/* <BotMessage /> */}
        {/* {defaultMessages.map((item) => {
          return (
            <div className="botMsgArea" key={item.id}>
              <p className="popUpMsg botMsg" >
                {item.text}
              </p>
            </div>
          )
        })} */}
        {msgs.map((item, index) => (
          <UserMsg
            text={item}
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
