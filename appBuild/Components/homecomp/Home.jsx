import React from "react";
import Link from "next/link"; // https://reactrouter.com/web/guides/quick-start
import HomeStyle from "./HomeStyle";

const Home = () => {
  return (
    <>
      <style jsx>{HomeStyle}</style>
      <main className="Home">
        {/* <Counter /> */}
        <div className="projectTitle">
          <h1>Corona Speedtester App</h1>
        </div>
        <ol className="list">
          <Link href="/apicms">
            <li>API</li>
          </Link>
          <Link href="/apicms">
            <li>ClientSide App</li>
          </Link>
        </ol>
      </main>
    </>
  );
};

export default Home;
