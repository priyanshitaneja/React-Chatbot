import React, { useState } from "react";
import { defaultMessages } from "../data/config/constants";

import botlogo from "../data/assets/images/botlogo.jpg";
import SetChatbot from "./setChatbot/setChatbot";
import "../data/styles/common.scss";

const App = () => {
  const [chatbot, setChatbot] = useState(false);
  const [msgs, setMsgs] = useState(defaultMessages);

  const handleBotClick = () => {
    setChatbot((prevValue) => {
      return !prevValue;
    });
  }

  const updatedMsgs = (msg) => {
    setMsgs((prevMsg) => {
      return [...prevMsg, msg]
    })
  };
  // console.log("App rendered");
  return (
    <div className="chatbotContainer">
      <img
        src={botlogo}
        alt="bot logo"
        className="botlogo"
        onClick={handleBotClick}
      />
      {chatbot ? <SetChatbot msgs={msgs} setMsgs={setMsgs} setChatbot={setChatbot} updatedMsgs={updatedMsgs} /> : null}
    </div>
  );
}

export default App;
