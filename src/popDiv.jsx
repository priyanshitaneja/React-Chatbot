import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import UserMsg from "./userMsg";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const botMessage = [
  { id: 1, text: "Hi, How can I help you today?" },
  {
    id: 2,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  { id: 3, text: "I am your virtual help bot" },
  { id: 4, text: "Want to connect to an agent" },
];

function PopDiv() {
  const [close, closeBot] = useState(false);

  // const [botMsg, setBotMsg]= useState(["Hi, How can I help you today?","I am your virtual help bot"]);

  //saving the text of input area
  const [inputText, setInputText] = useState("");

  //for messages the user sends
  const [msgs, setMsgs] = useState([]);

  const chatbodyRef = useRef();
  //reference created

  const scrollToBottom = () => {
    chatbodyRef.current.scrollIntoView({ behavior: "smooth" });
  };
  //scrollToBottom function

  useEffect(scrollToBottom, [msgs]);
  //used the useEffect hook so that the scrollToBottom is called after every new msg is sent

  return (
    <div className="BotWindow" style={{ display: close ? "none" : null }}>
      <div className="botHeader">
        <p>Chatbot</p>
        <HighlightOffIcon
          className="closeIcon"
          onClick={() => closeBot(true)}
        />
      </div>

      <div className="chatArea">
        {botMessage.map((item) => {
          return (
            <p className="popUpMsg" key={item.id}>
              {item.text}
            </p>
          );
        })}
        ;
        {msgs.map((item, index) => {
          return (
            <UserMsg text={item} key={index} />
          );
        })}
        ;
        <div ref={chatbodyRef} />
        {/* Scroll to bottom Reference */}
      </div>

      <div className="inputArea">
        {/* <form> */}
        <input
          className="popUpInput"
          type="text"
          placeholder="Type your query here . . ."
          value={inputText}
          onChange={(event) => {
            const newValue = event.target.value;
            setInputText(newValue);
          }}
          required
        />

        <button
          className="sendBtn"
          onClick={() => {
            setMsgs((prevMsg) => {
              return [...prevMsg, inputText];
            });
            setInputText("");
            // scrollToBottom();
          }}
        >
          Send
        </button>
        {/* </form> */}
      </div>

      {/* { close ? null : <PopDiv />}  */}
    </div>
  );
}

export default PopDiv;
