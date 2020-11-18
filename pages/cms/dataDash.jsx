import React, { useState, useEffect } from "react";
import { renderButton, checkSignedIn } from "../util/authAnalytics";

function DataDashboard() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const updateSignin = (signedIn) => {
    //(3)
    setIsSignedIn(signedIn);
    if (!signedIn) {
      renderButton();
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
    <div className="App">
      {!isSignedIn ? <div id="signin-button"></div> : <div>Coming soon...</div>}
    </div>
  );
}

export default DataDashboard;
