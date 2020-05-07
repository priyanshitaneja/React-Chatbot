import React from "react";
import "./styles.scss"

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
