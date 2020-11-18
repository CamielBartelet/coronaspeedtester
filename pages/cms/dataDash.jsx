import React, { useState, useEffect } from "react";
import { renderButton, checkSignedIn } from "../api/authanalytics";
import Report from "./report";

function DataDashboard() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const updateSignin = (signedIn) => {
    //(3)
    setIsSignedIn(signedIn);
    if (!signedIn) {
      renderButton();
      console.log("yess");
    } else {
      renderButton();
      console.log("yessssss");
    }
  };

  const init = () => {
    //(2)
    checkSignedIn()
      .then((signedIn) => {
        updateSignin(signedIn);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    window.gapi.load("auth2", init); //(1)
  });

  return (
    <div className="dataContainer">
      <div id="signin-button"></div>
      {!isSignedIn ? <div id="signin-button"></div> : <Report />}
    </div>
  );
}

export default DataDashboard;
