import React, { useState, useRef } from "react";
import "./styles.css";
import UserMsg from "./userMsg";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';



const botMessage = [
  { id: 1, text: "Hi, How can I help you today?" },
  { id: 2, text: "Are you looking for?" },
  { id: 3, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " },
  { id: 4, text: "abcdefghijklmnopqrstuvwxyz" },
  { id: 5, text: "I am your virtual help bot" },
  { id: 6, text: "Want to connect to an agent" },
  { id: 7, text: "lorem ipsum 5" },
  { id: 8, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " },
  { id: 9, text: "Any random text zhxbikhsxokhnkxhnkiaqbxkqbakxhbqklxhakbhxloa" }
];

// const userMsg = [];

function PopDiv() {

  const [close, closeBot] = useState(false);

  const [inputText, setInputText] = useState("");
  const [msg, sendMsg] = useState([]);

  const chatbodyRef = useRef()

  function handleClick() {
    closeBot(true);
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleSend() {
    chatbodyRef.current.scrollIntoView({ behavior: 'smooth' })
    sendMsg(prevMsg => {
      return [...prevMsg, inputText];
    });
    setInputText("");
    
  }

  // const classes = useStyles();

  return (
    <div className="BotWindow" style={{ display: close ? "none" : null }}>

      <div class="botHeader">
        <HighlightOffIcon
          className="closeIcon"
          onClick={handleClick}
        />
      </div>


      <div  class="chatArea">
        {botMessage.map(function (item) {
          return (
            <p class="popUpMsg" key={item.id}>
              {item.text}
            </p>
          )
        })};

      {msg.map(function (message) {
          return (
            <UserMsg
              text={message} />
          )
        })};

        <div ref={chatbodyRef} />
    </div>
    

      <div class="inputArea">
        <input
          class="popUpInput"
          type="text"
          placeholder="Type your query here . . ."
          value={inputText}
          onChange={handleChange}
        />

        <button class="sendBtn" onClick={handleSend}>
          Send
      </button>
      </div>



      {/* { close ? null : <PopDiv />}  */}

    </div>
  )
};

export default PopDiv;