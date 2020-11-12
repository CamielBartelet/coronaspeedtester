import React from "react";
import { Link } from "react-router-dom"; // https://reactrouter.com/web/guides/quick-start
import HomeButton from "../Homebutton";
import "./camielprot.css";

const CamielProto = () => {
  return (
    <>
      <HomeButton />
      <main className="container">
        <p>Hi there Camiel</p>
      </main>
    </>
  );
};

export default CamielProto;
