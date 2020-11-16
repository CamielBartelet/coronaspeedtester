import React from "react";
import Link from "next/link"; // https://reactrouter.com/web/guides/quick-start
import HomeStyle from "./HomeStyle";

const HomeButton = () => {
  return (
    <>
      <style jsx>{HomeStyle}</style>{" "}
      <Link href="/">
        <div className="homeButton">Back</div>
      </Link>
    </>
  );
};

export default HomeButton;
