import React, { useState } from "react";
import "./styles.css";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function PopDiv () {

  const [close, closeBot]= useState(false);

  function handleClick() {
    closeBot(true);
  }

  return (
    <div className="BotWindow" style={{ display : close ? "none" : null}}>
      
      <HighlightOffIcon 
        className="closeIcon"
        onClick= {handleClick}
        />

      <p class="popUpMsg">
        Hi, How can I help you today?
      </p>

      <input 
        class="popUpInput" 
        type="text" 
        placeholder="Type your query here . . ."
      />

       {/* { close ? null : <PopDiv />}  */}

    </div>
  )
};

export default PopDiv;