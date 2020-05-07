// import React, { useState, useRef } from "react";

// function InputArea() {

//     const chatbodyRef = useRef();

//     const [inputText, setInputText] = useState("");
//     const [msg, sendMsg] = useState([]);

//     function handleChange(event) {
//         const newValue = event.target.value;
//         setInputText(newValue);
//       }
    
//       function handleSend() {
//         chatbodyRef.current.scrollIntoView({ behavior: 'smooth' });
//         sendMsg(prevMsg => {
//           return [...prevMsg, inputText];
//         });
        
//         setInputText("");
        
//       }


//     return (
//         <div> 
//         <div class="inputArea">
//         <input
//           class="popUpInput"
//           type="text"
//           placeholder="Type your query here . . ."
//           value={inputText}
//           onChange={handleChange}
//         />

//         <button class="sendBtn" onClick={handleSend}>
//           Send
//       </button>
//       </div>

//       <div ref={chatbodyRef} />
//         </div>

//     )
// }

// export default InputArea;