import React, { useState, useEffect } from "react";
import { renderButton, checkSignedIn } from "../api/authanalytics";
import Report from "./report";

function DataDashboard() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [amountDays, setDays] = useState(10);
  // const [number2, setNumber2] = useState(+1);
  // const [totalAmount, setTotal] = useState(amountDays + number2);
  // const [sendUpdate, setSender] = useState(amountDays);

  // function calculateTotal() {
  //   setTotal(amountDays + number2);
  // }

  // function sending() {
  //   useEffect(() => setSender(amountDays));
  // }

  const updateSignin = (signedIn) => {
    //(3)
    setIsSignedIn(signedIn);
    if (!signedIn) {
      renderButton();
    } else {
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
    <div className="dataContainer">
      <div id="signin-button"></div>
      <div className="filterOptions">
        <input
          id="typeinp"
          type="range"
          min="0"
          max="50"
          value={amountDays}
          onChange={(event) => {
            setDays(+event.target.value);
            // calculateTotal();
          }}
          step="1"
        />
        {/* <button onClick={sending()}>Change</button> */}
        <div>Previous day amount: {amountDays}</div>
      </div>
      {!isSignedIn ? (
        <div id="signin-button"></div>
      ) : (
        <Report days={amountDays} />
      )}
    </div>
  );
}

export default DataDashboard;
