
import React, { useState } from "react";
import botlogo from "./images/botlogo.jpg";
import PopDiv from "./popDiv";
import "./styles.css";

function App() {
  const [pop, setPop] = useState(false);

  function popUp() {
    setPop(prevValue => {
      return !prevValue;
    });
  }

  return (
    <div class="chatbotContainer">
      <img src={botlogo} alt="bot logo" className="botlogo" onClick={popUp} />

      {pop ? <PopDiv /> : null}
    </div>
  );
}

export default App;