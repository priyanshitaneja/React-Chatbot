// import React, { useState, useEffect, useRef } from "react";
// import "../../data/styles/styles.scss";
// import "./index.scss";
// import UserMsg from "../userMsg/userMsg";

// const botMessage = [
//     { id: 1, text: "Hi, How can I help you today?" },
//     {
//       id: 2,
//       text:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
//     },
//     { id: 3, text: "I am your virtual help bot" },
//     { id: 4, text: "Want to connect to an agent" },
//   ];


// function ChatArea() {
//      //saving the text of input area
//   const [inputText, setInputText] = useState("");

//   //for messages the user sends
//   const [msgs, setMsgs] = useState([]);

//   const chatbodyRef = useRef();
//   //reference created

//     const scrollToBottom = () => {
//     chatbodyRef.current.scrollIntoView({ behavior: "smooth" });
//   };
//   //scrollToBottom function

//   useEffect(scrollToBottom, [msgs]);
//   //used the useEffect hook so that the scrollToBottom is called after every new msg is sent

//   const handleChange = (event) => {
//     const newValue = event.target.value;
//     setInputText(newValue);
//   };

//   const handleEnter = (event) => {
//     if (event.key === "Enter") {
//        console.log("enter pressed");
//     }
// };


// return (
//     <div className="chatArea">
//         <img src={require("../../images/avatar.jpg")}  class="avatar" alt="avatar" />
//         {botMessage.map((item) => {
//           return (
//             <div className="botMsgArea" >
//               <p className="popUpMsg botMsg" key={item.id}>
//                 {item.text}
//               </p>
//             </div>
//           );
//         })}
//         ;
//         {msgs.map((item, index) => {
//           return (
//             <UserMsg text={item} key={index} />
//           );
//         })}
//         ;
//         <div ref={chatbodyRef} />
//         {/* Scroll to bottom Reference */}
//       </div>
// )
// }

// export default ChatArea ;
