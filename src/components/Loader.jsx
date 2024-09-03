import React, { useState, useEffect } from "react";
import "./Loader.css"; // Create a CSS file for styling

const Loader = ({isLoading,loadedNumber}) => {
 
  const [data,setdata]=useState(0)


  return (
    <div className="loader-container">
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="loaded-number">{loadedNumber}</div>
      )}
    </div>
  );
};

export default Loader;
