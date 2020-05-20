import React, { useState } from "react";
import { defaultMessages } from "../data/config/constants";

import botlogo from "../data/assets/images/botlogo.jpg";
import PopDiv from "./popDiv/popDiv";
import "../data/styles/common.scss";

const App = () => {
  const [pop, setPop] = useState(false);
  const [msgs, setMsgs] = useState(defaultMessages);

  const handleBotClick = () => {
      setPop((prevValue) => {
        return !prevValue;
      });
  }

  const updatedMsgs = (msg) => {
    setMsgs((prevMsg) => {
            return [...prevMsg , msg]
          })
  };

  return (
    <div className="chatbotContainer">
      <img
        src={botlogo}
        alt="bot logo"
        className="botlogo"
        onClick={handleBotClick}
      />
      {pop ? <PopDiv msgs={msgs} setMsgs={setMsgs} setPop={setPop} pop={pop} updatedMsgs={updatedMsgs} /> : null}
    </div>
  );
}

export default App;
