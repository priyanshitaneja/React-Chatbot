import { avatar } from "../../data/assets/images/index.js";

import React from "react";

import "../../data/styles/common.scss";
import "./index.scss";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const BotHeader = () => {
  return (
    <div className="botHeader">
      <img src={avatar} className="avatarIcon" alt="Avatar Icon"></img>
      <div>
        <p className="headerText">Chatbot P.T</p>
        <p className="onlineStatus">
          <FiberManualRecordIcon className="onlineIcon" />
          Online
        </p>
      </div>
    </div>
  );
};
export default BotHeader;
