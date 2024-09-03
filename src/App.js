import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Chatbot from "./components/Chatbot";
import Disp from "./components/Mentor";
import Mentor from "./components/Mentor";
import Recommend from "./components/Recommend";

const App = () => {
return (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/chat" element={<Chatbot/>}/>
      <Route exact path ="/Mentor" element={<Mentor/>}/>
      <Route exact path="/recommended/mentors" element={<Recommend/>}/>
    </Routes>
  </Router>
);
}

export default App

