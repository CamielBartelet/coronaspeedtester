import React from "react";
import { Link } from "react-router-dom"; // https://reactrouter.com/web/guides/quick-start
import HomeStyle from "./HomeStyle";

const HomeButton = () => {
  return (
    <>
      <style jsx>{HomeStyle}</style>
      <div className="homeButton">
        <Link href="/">Back</Link>
      </div>
    </>
  );
};

export default HomeButton;
