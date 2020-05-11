import React, { useState } from "react";
import botlogo from "../data/assets/images/botlogo.jpg";
import PopDiv from "./popDiv/popDiv";
import "../data/styles/common.scss";

function App() {
  const [pop, setPop] = useState(false);

  return (
    <div className="chatbotContainer">
      <img
        src={botlogo}
        alt="bot logo"
        className="botlogo"
        onClick={() => {
          setPop((prevValue) => {
            return !prevValue;
          });
        }}
      />
      {pop ? <PopDiv setPop={setPop} pop={pop} /> : null}
    </div>
  );
}

export default App;
