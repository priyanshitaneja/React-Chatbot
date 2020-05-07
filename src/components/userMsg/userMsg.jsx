import React from "react";
import "./index.scss";

function UserMsg(props) {
  return (
    <div>
      <p className="popUpMsg userMsg">          
          {props.text}
      </p>
    </div>    
  );
}

export default UserMsg;
