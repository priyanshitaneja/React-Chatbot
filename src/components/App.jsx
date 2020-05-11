import React, { useState } from "react";
import botlogo from "../data/assets/images/botlogo.jpg";
import PopDiv from "./popDiv/popDiv";
import "../data/styles/common.scss";

function App() {
  const [pop, setPop] = useState(false);

  function popUp() {
    setPop(prevValue => {
      return !prevValue;
    });
  }

  return (
    <div className="chatbotContainer">
      <img src={botlogo} alt="bot logo" className="botlogo" onClick={popUp} />
      {pop ? <PopDiv /> : null}
    </div>
  );
}

export default App;