import React from "react";
import { Link } from "react-router-dom"; // https://reactrouter.com/web/guides/quick-start
import "./Home.css";

const HomeButton = () => {
  return (
    <div className="homeButton">
      <Link to="/">Back</Link>
    </div>
  );
};

export default HomeButton;
