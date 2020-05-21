import { sender } from "../../data/config/constants";
import { avatar, customerAvatar } from "../../data/assets/images/index.js";

import React from "react";

import "./index.scss";
import "../../data/styles/common.scss";

const UserMsg = ({ message }) => {
 
  const avatarType = message.sender === sender.CUSTOMER ? { customerAvatar } : { avatar };
  let prevSender = message[message.prevIndex].sender

  return (
    <div className={`rc-relative display-flex rc-m-10 rcMsgContainer
      ${message.sender === sender.CUSTOMER ? "rc-jc-fe rc-p-l-50 " : "rc-jc-fs rc-p-r-50 "}`}>

      <img
        src={prevSender !== message.sender && message.prevIndex ? avatarType : null}
        className={`avatar rc-absolute ${message.sender === sender.CUSTOMER ? "rc-align-r" : ""}`}
        alt="avatar" />
      <div className={`rc-p-10 rc-word-wrap bubble rc-br-10 ${message.sender === sender.CUSTOMER ? "chat-bg-sec rc-m-r-50" : "chat-bg-primary rc-m-l-50 "}`}>
        {message.text}
      </div>
    </div>
  );
}

export default UserMsg;
