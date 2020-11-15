import React from "react";
import "./Chats.css";
import Chat from "./Chat";
import { Redirect } from "react-router-dom";
import { useStateValue } from "./StateProvider";
export const Chats = () => {
  const [{ logged }] = useStateValue();
  if (!logged) {
    return <Redirect to="/" />;
  }
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="all goood!"
        timestamp="40 seconds ago"
        profilePic="..."
      />
      <Chat
        name="Ahmed"
        message="hey dude !"
        timestamp="40 seconds ago"
        profilePic="..."
      />
      <Chat
        name="Jamal"
        message="YO keep it up!"
        timestamp="40 seconds ago"
        profilePic="..."
      />
      <Chat
        name="ALi"
        message="YO demmn up!"
        timestamp="40 seconds ago"
        profilePic="..."
      />
    </div>
  );
};
