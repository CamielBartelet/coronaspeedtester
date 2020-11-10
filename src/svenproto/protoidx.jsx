import React from "react";
import { Link } from "react-router-dom"; // https://reactrouter.com/web/guides/quick-start
import HomeButton from "../Homebutton";
import "./svenprot.css";

const SvenProto = () => {
  return (
    <>
      <HomeButton />
      <main className="container">
        <p>Hi there Sven</p>
      </main>
    </>
  );
};

export default SvenProto;
