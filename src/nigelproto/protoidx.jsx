import React from "react";
import { Link } from "react-router-dom"; // https://reactrouter.com/web/guides/quick-start
import HomeButton from "../Homebutton";
import "./nigelprot.css";

const NigelProto = () => {
  return (
    <>
      <HomeButton />
      <main className="container">
        <p>Hi there Nigel</p>
      </main>
    </>
  );
};

export default NigelProto;
