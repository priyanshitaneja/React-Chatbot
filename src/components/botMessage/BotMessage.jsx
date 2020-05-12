import React from "react";

import { botMessages } from "../../data/config/constants";

import "./index.scss";
import "../../data/styles/common.scss";

const BotMessage = () => {
  return (
    botMessages.map((item) => {
      return (
        <div className="botMsgArea" key={item.id}>
          <p className="popUpMsg botMsg" >
            {item.text}
          </p>
        </div>
      )
    })
  )
}

export default BotMessage;
