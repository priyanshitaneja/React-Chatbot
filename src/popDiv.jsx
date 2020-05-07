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

  function handleClick() {
    closeBot(true);
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleSend() {
    setMsgs((prevMsg) => {
      return [...prevMsg, inputText];
    });

    setInputText("");
    // scrollToBottom();
  }

  return (
    <div className="BotWindow" style={{ display: close ? "none" : null }}>
      <div class="botHeader">
        <p>Chatbot</p>
        <HighlightOffIcon className="closeIcon" onClick={handleClick} />
      </div>

      <div class="chatArea">
        {botMessage.map(function (item) {
          return (
            <p class="popUpMsg" key={item.id}>
              {item.text}
            </p>
          );
        })}
        ;
        {msgs.map(function (item) {
          return <UserMsg text={item} />;
        })}
        ;
        <div ref={chatbodyRef} />
        {/* Scroll to bottom Reference */}
      </div>

      <div class="inputArea">
        {/* <form> */}
        <input
          class="popUpInput"
          type="text"
          placeholder="Type your query here . . ."
          value={inputText}
          onChange={handleChange}
          required
        />

        <button class="sendBtn" onClick={handleSend}>
          Send
        </button>
        {/* </form> */}
      </div>

      {/* { close ? null : <PopDiv />}  */}
    </div>
  );
}

export default PopDiv;
