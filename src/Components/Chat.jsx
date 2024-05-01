import React, { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import "../styles/Chat.css";
import { auth, db } from "../firebaseConfig.js";
export default function Chat({ room }) {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesRef = collection(db, "message");
  //!Date and time
  const date = Date.now();
  const nDate = new Date(date);
  const utime = nDate.toLocaleTimeString();
  const udate = nDate.toLocaleDateString();

  //!how to check when we nter data something happens
  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("roomName", "==", room),
      orderBy("createdAt")
    ); //! enable this on firebase by running query
    onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newMessage);
    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      email: auth.currentUser.email,
      roomName: room,
      time: utime,
      date: udate,
    });
    setNewMessage("");
  };

  return (
    <div>
      <div className="chat-app flex justify-center items-center m-2 flex-col ">
        <div className="header">
          <h1 className="text-3xl p-2">Welcome to "{room}"</h1>
        </div>
        <div className="messages h-8">
          {messages.map((message) => (
            <div key={message.id} className="message">
              <span className="user">
                {message.email.replace("@gmail.com", "")}
              </span>
              <span>{message.text}</span>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="new-message-form">
          <input
            type="text"
            placeholder="Enter your message..."
            className="new-message-input"
            onChange={(e) => {
              setNewMessage(e.target.value);
            }}
            value={newMessage}
          />
          <button type="submit" aria-setsize={30} className="send-button p-5">
            <IoIosSend />
          </button>
        </form>
      </div>
    </div>
  );
}
