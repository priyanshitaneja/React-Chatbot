import React, { useState } from "react";
import "../../data/styles/styles.scss";
import "./index.scss";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

function BotHeader() {
  const [close, closeBot] = useState(false);

  return (
    <div className="botHeader">
      <p>Chatbot P.T</p>
      <HighlightOffIcon className="closeIcon" onClick={() => closeBot(true)} />
    </div>
  );
}
export default BotHeader;
