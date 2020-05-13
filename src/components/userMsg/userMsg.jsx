import React from "react";

import "./index.scss";

const UserMsg = (props) => {
  return (
    <div>
      <p className="popUpMsg" >        
          {props.text}
      </p>
    </div>
  );
}

export default UserMsg;
