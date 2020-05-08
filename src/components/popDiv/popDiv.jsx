import React, { useState, useEffect, useRef } from "react";
import "../../data/styles/styles.scss";
import "./index.scss";
import UserMsg from "../userMsg/userMsg";
// import BotHeader from "../botHeader/botHeader";
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

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  };

  const handleSend = () => {
    if(inputText.trim() !== "" && inputText.trim() !== null) {
      setMsgs((prevMsg) => {
        return [...prevMsg, inputText];
      });
      setInputText("");
      // scrollToBottom();
    }
  };

  const handleEnter = (event) => {
    if (event.key === "Enter" && inputText.trim() !== "" && inputText.trim() !== null) {
       console.log("enter pressed");
       handleSend();
    }
};

  return (
    <div className="BotWindow" style={{ display: close ? "none" : null }}>
      <div className="botHeader">
        <p>Chatbot P.T</p>
        <HighlightOffIcon
          className="closeIcon"
          onClick={() => closeBot(true)}
        />
      </div>

      {/* <BotHeader /> */}

       <div className="chatArea">
        <img src={require("../../images/avatar.jpg")}  className="avatar" alt="avatar" />
        {botMessage.map((item) => {
          return (
            <div className="botMsgArea" >
              <p className="popUpMsg botMsg" key={item.id}>
                {item.text}
              </p>
            </div>
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
        {/* Scroll to bottom Reference  */}
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

        <button
          className="sendBtn"
          onClick={handleSend}
        >
          Send
        </button>
        
      </div>

      {/* { close ? null : <PopDiv />}  */}
    </div>
  )
}

export default PopDiv;
