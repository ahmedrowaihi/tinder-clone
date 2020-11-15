import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";
function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://boxrec.com/media/images/thumb/5/50/Naseem_Hamed.jpg/200px-Naseem_Hamed.jpg",
      message: "",
    },
    {
      name: "Ellen",
      image:
        "https://boxrec.com/media/images/thumb/5/50/Naseem_Hamed.jpg/200px-Naseem_Hamed.jpg",
      message: "ssup",
    },
    {
      message: "ssup",
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH Live Stream ON 7/28/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />

            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="Type message..."
        />
        <button onClick={handleSend} className="chatScreen__inputButton">
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
