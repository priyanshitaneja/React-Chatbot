import React, { useState } from "react";

import botlogo from "../data/assets/images/botlogo.jpg";
import PopDiv from "./popDiv/popDiv";
import "../data/styles/common.scss";

const App = () => {

  const handleBotClick = () => {
      setPop((prevValue) => {
        return !prevValue;
      });
  }

  const [pop, setPop] = useState(false);
  return (
    <div className="chatbotContainer">
      <img
        src={botlogo}
        alt="bot logo"
        className="botlogo"
        onClick={handleBotClick}
      />
      {pop ? <PopDiv setPop={setPop} pop={pop} /> : null}
    </div>
  );
}

export default App;
