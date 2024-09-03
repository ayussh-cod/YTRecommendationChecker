import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import SquareButton from "./SquareButton";
import "./SquareButton.css";
// const Dotenv = require("dotenv-webpack");
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedNumber, setLoadedNumber] = useState(null);
  const [isdisabled, setisdisabled] = useState();
  const [done, setDone] = useState(false);
  useEffect(() => {
    setisdisabled(true);
  }, []);

  const handleButtonClick = () => {
    const editorExtensionId = "poaibjlmpdbeejhaggmcmlaiheakcocl";
    setIsLoading(true);
    window.chrome.runtime.sendMessage(editorExtensionId, {
      command: "create tab",
      API_KEY: process.env.REACT_APP_API_Key,
    });
  };

  window.updatedone = () => {
    setDone(true);
  };

  window.updateState = (newValue) => {
    setIsLoading(false);
    setLoadedNumber(newValue);
    setisdisabled(false);
  };

  const Chat = () => {
    window.open("http://localhost:3000/chat", "_blank");
  };
  const Mentor = () => {
    window.open("http://localhost:3000/Mentor", "_blank");
  };
  const Help = () => {
    const editorExtensionId = "poaibjlmpdbeejhaggmcmlaiheakcocl";

    window.chrome.runtime.sendMessage(editorExtensionId, {
      command: "Help",
    });
  };

  return (
    <div className="button-container">
      {isLoading ? (
        <div className="loader-container">
          <CircularProgress color="primary" size={50} thickness={6} />
        </div>
      ) : loadedNumber ? (
        <div
          className="loader-container "
          style={{
            color:
              loadedNumber <= 25
                ? "green"
                : loadedNumber <= 65
                ? "orange"
                : "red",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: "24px", fontWeight: "bold" }}>
            {loadedNumber}
          </span>
        </div>
      ) : (
        <SquareButton color="#3498db" isdisabled={false} f={handleButtonClick}>
          Click me
        </SquareButton>
      )}

      <SquareButton color="#27ae60" isdisabled={isdisabled} f={Chat}>
        Chat
      </SquareButton>
      <SquareButton color="#e74c3c" isdisabled={isdisabled} f={Mentor}>
        Mentor
      </SquareButton>
      <SquareButton color="#9b59b6" isdisabled={isdisabled} f={Help}>
        Help me
      </SquareButton>
    </div>
  );
};

export default Home;
