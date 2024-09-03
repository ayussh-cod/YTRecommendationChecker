import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    try {
      setMessages((prevMessages) => [...prevMessages, inputValue.trim()]);

      setInputValue("");
     
      const res = await axios.post(process.env.REACT_APP_Chat, {
        prompt: inputValue.trim(),
      });

      setMessages((prevMessages) => [...prevMessages, res.data]);

      setTimeout(() => {
        console.log("Updated messages:", messages);
      }, 100);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        height: "94.5vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#222",
        color: "#fff",
        padding: "20px",
      }}
    >
      <div style={{ flex: 1, overflowY: "auto", marginBottom: "20px" }}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#444",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            {message}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
          style={{
            flex: 1,
            marginRight: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            backgroundColor: "#333",
            color: "#fff",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
